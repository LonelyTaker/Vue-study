<template>
    <div>
        <h1>父组件</h1>
        <hr>
        <!-- 通过事件绑定机制，父组件把自己的方法传递给子组件 -->
        <my-son @func="show"></my-son>
    </div>
</template>

<script>
import Son from './Son.vue'
export default {
    data() {
        return {
            msgFormSon:'',
        }
    },
    components:{
        'my-son':Son
    },
    methods: {
        show(arg1){
            console.log('有人调用了父组件的show方法'+arg1);
            this.msgFormSon=arg1;
        },
    },
}
</script>