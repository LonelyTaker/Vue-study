<template>
    <div>
        <h6>这是弟弟组件</h6>
        <h6>{{msgFormGG}}</h6>
    </div>
</template>
<script>
import bus from './bus.js'
export default {
    data() {
        return {
            msgFormGG:''
        }
    },
    created(){
        //在数据接收方使用bus.$on自定义事件，并指定事件处理函数
        bus.$on('ooo',data=>{
            console.log(data)
            this.msgFormGG=data
        })
    }
}
</script>