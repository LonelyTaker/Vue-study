import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Movie from './components/Movie.vue'
import About from './components/About.vue'
import Tab1 from './components/tab/Tab1.vue'
import Tab2 from './components/tab/Tab2.vue'
import MovieDetail from './components/Mdetail/MovieDetail.vue'


//注册路由
Vue.use(VueRouter)
//创建路由实例对象
const router = new VueRouter({
    routes: [
        //路由规则
        //每个路由规则都是对象，对象中必须有path属性和component属性
        //在路由规则中，通过redirect属性，指向一个新地址，就能实现路由的重定向
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/Movie',
            component: Movie
        },
        {
            //在路由规则中，参数项前面加：
            //props:true表示，为当前路由规则开启props传参
            path: '/Mdetail/:id/:name',
            component: MovieDetail,
            props:true,
            name:'moviedetail'
        },
        {
            path: '/About',
            component: About,
            redirect: '/About/Tab1',
            children: [{
                    path: '/About/Tab1',
                    component: Tab1
                },
                {
                    path: '/About/Tab2',
                    component: Tab2
                },
            ]
        },
    ]
})

router.beforeEach((to,from,next)=>{
    // console.log(to)
    // console.log(from)
    //to.path表示下一刻要访问的地址
    //from.path表示上一刻所访问的是哪个地址
    //next()直接调用，表示放行
    //next()

    //如果要访问的地址是登录页面，没有必要拦截，直接放行
    if(to.path === '/Home'){
        next()
    }
    else{
        const tokenStr=window.sessionStorage.getItem('token')
        if(!tokenStr)//如果没有令牌，则强制跳转到登录页
            next('/Home')
        else{
            next()
        }
    }

})

const vm = new Vue({
    el: "#app",
    render(h) {
        return h(App)
    },
    //把路由对象挂载到vm上
    router: router
})