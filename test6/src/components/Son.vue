<template>
    <div>
        <h4>这是子组件----{{sonMsg}}</h4>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sonMsg:0,
        }
    },
    methods:{
        add(){
            this.sonMsg++
        }
    },
}
</script>

<style lang="less" scoped>

</style>