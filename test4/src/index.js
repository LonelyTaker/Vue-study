import Vue from 'vue/dist/vue.js'

// //组件其实就是封装了一些html标签
// Vue.component('my-test',{
//     template:`<div>
//     <div @click="show">这是我定义的第一个Vue组件</div>
//     <div>{{d1|testFilter}}</div>
//     </div>`,
//     //vue规定，组件中的data必须是function函数
//     //必须return 一个数据对象
//     data(){
//         return {
//             d1:'111'
//         }
//     },
//     //组件中可以有自己的methods方法
//     methods:{
//         show(){
//             console.log("调用了自定义组件中的show方法")
//         }
//     },
//     //组件中也能有自己的私有过滤器
//     filters:{
//         testFilter(originVal){
//             return originVal+'......'
//         }
//     }
// })

// const vm = new Vue({
//     el: "#app",
//     data:{
//         msg:"hello world!"
//     },
//     methods:{

//     },
// })

// const vm2 = new Vue({
//     el: "#app2",
//     data:{
//         info:'ooo'
//     },
//     methods:{

//     },
//     components:{
//         'my-test2':{
//             template:`<div>
//             <div>这是私有组件</div>
//             </div>`
//         }
//     },
// })

import Home from './components/Home.vue' //1. 导入单文件组件
Vue.component('my-home',Home)
const vm = new Vue({
    el:"#app",
    data:{

    },
})

