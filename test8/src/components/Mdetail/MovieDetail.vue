<template>
    <div>
        <h1>详情----{{id}}----{{name}}</h1>
        <button @click="goback">返回</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    //外界传递过来的数据
    props:['id','name'],
    methods:{
        goback(){
            // this.$router.back()
            this.$router.go(-1)
        }
    },
}
</script>