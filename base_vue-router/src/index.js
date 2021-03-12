import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//注册路由
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        //路由规则
        //每个路由规则都是对象，对象中必须有path属性和component属性
        {}
    ]
})

const vm = new Vue({
    el: "#app",
    render(h) {
        return h(App)
    },
    router:router
})