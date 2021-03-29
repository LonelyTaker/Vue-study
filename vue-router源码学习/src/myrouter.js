let Vue;

export default class Myrouter {
  static install(_Vue) {
    Vue = _Vue;
    Vue.mixin({
      beforeCreate() {
        // 这里的this.$options是vue的配置
        if (this.$options.router) {
          // 启动路由
          this.$options.router.init();
          Vue.prototype.$router = this.$options.router;
        }
      },
    });
  }
  //构造函数
  constructor(options) {
    // 这里的this.$options是路由的配置规则
    this.$options = options;
    this.routeMap = {};
    // 使用Vue的响应式机制，路由切换的时候做一些响应
    this.app = new Vue({
      data: {
        // 默认根目录
        current: "/",
      },
    });
  }
  init() {
    //启动整个路由
    //1.监听hashchange事件
    this.bindEvents();
    //2.处理路由表
    this.createRouteMap();
    //3.初始化组件:router-view和router-link
    this.initComponent();
  }
  //处理路由表
  createRouteMap() {
    this.$options.routes.forEach((item) => {
      this.routeMap[item.path] = item;
    });
  }
  //初始化组件
  initComponent() {
    Vue.component("router-view", {
      render: (h) => {
        const component = this.routeMap[this.app.current].component;
        //使用h新建一个虚拟dom
        return h(component);
      },
    });
    Vue.component("router-link", {
      // Vue自带的参数校验,不推荐下面形式
      // props:['to']
      props: {
        to: String,
      },
      render(h) {
        // h三个参数：组件名，参数，子元素
        return h(
          "a",
          {
            attrs: {
              href: "#" + this.to,
            },
          },
          [this.$slots.default]
        );
      },
    });
  }
  //监听hash改变
  bindEvents() {
    console.log(this.app);
    window.addEventListener("load", this.onHashChange.bind(this), false);
    window.addEventListener("hashchange", this.onHashChange.bind(this), false);
  }
  getHash() {
    return window.location.hash.slice(1) || "/";
  }
  onHashChange(e) {
    // 获取当前的哈希值
    let hash = this.getHash();
    // 修改this.app.current
    this.app.current = hash;
  }

  push(url) {
    window.location.hash = url;
  }
}
