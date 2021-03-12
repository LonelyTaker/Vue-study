<template>
    <div>
        <!-- ref获取到的DOM元素的引用，就是一个原生的DOM对象 -->
        <!-- ref是Vue中，提供的用于获取DOM对象引用的方式 -->
        <h3 ref="myh3">这是Home组件</h3>
        <button @click="getContent">获取h3内部的文本</button>
        <button @click="reset">重置</button>
        <!-- 使用ref引用组件 -->
        <my-son ref="son"></my-son>
    </div>
</template>

<script>
import Son from './Son.vue'
export default {
    data() {
        return {
            
        }
    },
    methods:{
        getContent(){
            // console.log(this.$refs.myh3.innerHTML)
            this.$refs.son.add()
        },
        reset(){
            this.$refs.son.sonMsg=0
        }
    },
    components:{
        'my-son':Son
    },
}
</script>
<style lang="less" scoped>

</style>