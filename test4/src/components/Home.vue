<template>
    <div>
        <!-- 注意：单文件组件中的template节点，只能有唯一的父元素进行包裹 -->
        <h3>.Vue----{{msg}}</h3>
        <my-son></my-son>
    </div>
</template>

<script>
import Son from './Son.vue'

//行为中固定写法
//注意：组件中没有el
export default {
    //这是当前组件中的私有data数据
    data() {
        return {
            msg:"hello .vue文件"
        }
    },
    methods: {
        
    },
    filters:{

    },
    //在.vue文件中，可以通过components属性，
    //可以把另外一个.vue组件定义为自己的私有组件
    components:{
        'my-son':Son
    }
}
</script>

<style scoped>
    /* 期望组件内的样式，只在当前组件内生效 */
    h3{
        color: red;
    }
</style>