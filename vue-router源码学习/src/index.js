import Vue from "vue";
import App from "./App.vue";
import Test1 from "./components/Test1.vue";
import Test2 from "./components/Test2.vue";
import Test from "./components/Test.vue";

//自己写的路由
import MyRouter from "./myrouter";
//实际执行的是myrouter.js里的install方法
Vue.use(MyRouter);
const router = new MyRouter({
  routes: [
    { path: "/", component: Test },
    { path: "/test1", component: Test1 },
    { path: "/test2", component: Test2 },
  ],
});

const vm = new Vue({
  el: "#app",
  render(h) {
    return h(App);
  },
  router,
});
