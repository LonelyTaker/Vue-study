<template>
    <div>
        <h3>这是哥哥组件</h3>
        <button @click="send">发送</button>
    </div>
</template>
<script>
import bus from './bus.js'
export default {
    data() {
        return {
            msg:'哥哥有颗糖，分享给弟弟'
        }
    },
    methods: {
        send(){
            //在数据发送方，调用bus.$emit()
            //触发bus上的某个事件，从而把数据发送出去
            bus.$emit('ooo',this.msg)
        }
    },
}
</script>