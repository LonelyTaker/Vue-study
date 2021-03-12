import Vue from 'vue/dist/vue.js'

// import Parent from './components/02.子向父传值/Parent.vue'
// Vue.component('my-parent',Parent)

import GG from './components/03.兄弟组件的数据共享/GG.vue'
import DD from './components/03.兄弟组件的数据共享/DD.vue'
Vue.component('my-gg',GG)
Vue.component('my-dd',DD)

const vm = new Vue({
    el: '#app',
    data:{

    },
})