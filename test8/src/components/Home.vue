<template>
    <div>
        <h1>Home</h1>
        <p>
            用户名：
            <input type="text" v-model="uname">
        </p>
        <p>
            密码：
            <input type="text">
        </p>
        <button @click="login">登录</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            uname:'',
        }
    },
    methods:{
        login(){
            const tokenStr='123456'//虚拟
            window.sessionStorage.setItem('token',tokenStr)
            this.$router.push('/Movie')
        }
    },
    //监控data的数据变化
    watch:{
        uname:function(newVal,oldVal){

        }
    }
}
</script>