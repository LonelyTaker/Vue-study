<template>
    <div>
        <h1>父组件</h1>
        <button>发送数据给子组件</button>
        <hr>
        <!-- 在使用组件的时候，通过属性绑定，把数据传递给子组件 -->
        <my-son :pmsg="parentMsg" :pmsg2="parentMsg2"></my-son>
    </div>
</template>

<script>
import Son from './Son.vue'
export default {
    data() {
        return {
            parentMsg:'1551',
            parentMsg2:{
                a:10,
                b:30,
            }
        }
    },
    components:{
        'my-son':Son
    },
    methods: {
    },
}
</script>