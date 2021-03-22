class Vue {
  constructor(options) {
    this.$data = options.data;

    //调用数据劫持的方法
    Observe(this.$data);

    //属性代理
    Object.keys(this.$data).forEach((key) => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return this.$data[key];
        },
        set(newVal) {
          this.$data[key] = newVal;
        },
      });
    });

    //调用模板编译的函数
    Compile(options.el, this);
  }
}

//定义数据劫持的方法
function Observe(obj) {
  //如果obj没有值或者obj不是一个对象，就退出递归
  if (!obj | (typeof obj !== "object")) return;
  const dep = new Dep();

  //通过Object.keys(obj)获取当前obj上的每个属性
  Object.keys(obj).forEach((key) => {
    //当前被循环的key所对应的属性值
    let value = obj[key];
    //把value子节点进行递归
    Observe(value);
    //为当前key所对应的属性添加getter和setter
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        //只要执行了下面这一行，那么刚才new的Watcher实例，就被放到了dep.subs这个数组中
        Dep.target && dep.addsub(Dep.target);
        return value;
      },
      set(newVal) {
        value = newVal;
        //为新添加的对象也设置getter和setter
        Observe(value);

        //通知每个订阅者更新自己的文本
        dep.notify();
      },
    });
  });
}

//对HTML结构进行模板编译
function Compile(el, vm) {
  //获取el对应的DOM元素
  vm.$el = document.querySelector(el);

  //创建文档碎片，提高DOM操作的性能
  const fragment = document.createDocumentFragment();
  while ((childNode = vm.$el.firstChild)) {
    fragment.append(childNode);
  }
  //进行模板编译
  replace(fragment);
  vm.$el.appendChild(fragment);

  //定义模板编译的方法
  function replace(node) {
    //定义匹配插值表达式的正则表达式
    const regMustache = /\{\{\s*(\S+)\s*\}\}/;
    //如果当前的node节点是一个文本子节点，需要进行正则替换
    if (node.nodeType === 3) {
      //文本子节点也是个DOM对象，要获取文本子节点的字符串内容，需要调用textContent属性获取
      const text = node.textContent;
      //进行正则匹配与提取
      const execResult = regMustache.exec(text);
      if (execResult) {
        const value = execResult[1]
          .split(".")
          .reduce((newObj, key) => newObj[key], vm);
        node.textContent = text.replace(regMustache, value);
        //在这个时候，创建watcher类的实例
        new Watcher(vm, execResult[1], (newVal) => {
          node.textContent = text.replace(regMustache, newVal); /*重点*/
        });
      }
      return;
    }

    //如果当前节点是Input输入框
    if (node.nodeType === 1 && node.tagName.toUpperCase() === "INPUT") {
      //获得当前元素的所有属性节点
      const attrs = Array.from(node.attributes);
      //查看v-model属性
      const findResult = attrs.find((x) => x.name === "v-model");
      if (findResult) {
        //获取当前v-model属性的值
        const expStr = findResult.value;
        const value = expStr.split(".").reduce((newObj, k) => newObj[k], vm);
        node.value = value;
        new Watcher(vm, expStr, (newVal) => {
          node.value = newVal;
        });

        //监听文本框的input输入事件，拿到文本框最新的值，把最新的值，更新到vm上即可
        node.addEventListener("input", (e) => {
          const keyArr = expStr.split(".");
          const obj = keyArr
            .slice(0, keyArr.length - 1)
            .reduce((newObj, k) => newObj[k], vm);
          obj[keyArr[keyArr.length - 1]] = e.target.value;
        });
      }
    }

    //如果不是文本节点，需要进行递归处理
    node.childNodes.forEach((child) => {
      replace(child);
    });
  }
}

//依赖收集的类
class Dep {
  constructor() {
    this.subs = [];
  }
  //向subs数组中，添加watcher的方法
  addsub(watcher) {
    this.subs.push(watcher);
  }
  //负责通知每个watcher的方法
  notify() {
    this.subs.forEach((watcher) => watcher.update());
  }
}

//订阅者的类
class Watcher {
  //cd回调函数中，记录着watcher如何更新自己的文本内容
  //但是只知道如何更新自己还不行，还必须拿到最新的数据，因此还需要传递vm和key
  constructor(vm, key, cb) {
    this.vm = vm;
    this.key = key;
    this.cb = cb;

    //下面三行代码，负责把创建的Watcher实例存到Dep实例的subs数组中
    //target为自定义属性
    Dep.target = this;
    key.split(".").reduce((newObj, k) => newObj[k], vm);
    Dep.target = null;
  }
  //watcher的实例，需要有update函数，从而让发布者能够通知我们进行更新
  update() {
    const value = this.key.split(".").reduce((newObj, k) => newObj[k], this.vm);
    this.cb(value);
  }
}
