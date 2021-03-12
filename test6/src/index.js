import Vue from 'vue'
//import Home from './components/Home.vue'
// Vue.component('my-home',Home)


import App from './components/App.vue'

import Test from './components/Test.vue'
Vue.component('my-test',Test)

const vm = new Vue({
    el: '#app',
    //如果使用了render函数，data就没必要写
    // data:{
    //     msg:'hello'
    // },

    // template:'<h6>hello</h6>'
    // createElements是个方法，专门用来渲染组件,并替换掉el区域
    // render(createElements) {
    //     return createElements(App)
    // },
    // 这是render的终极格式
    render:h=>h(App)

    //注意：被render渲染的组件，叫做根组件
    //不论浏览器中的页面如何切换，根组件永远都在页面上显示
})