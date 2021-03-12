<template>
    <div>
        <h1>根组件</h1>
        <hr>    
        <!-- 注意：router-link标签是Vue提供的路由链接标签，默认会被渲染为a链接 -->
        <router-link  to="/Home">首页</router-link>
        <router-link  to="/Movie">电影</router-link>
        <router-link  to="/About">关于</router-link>
        <hr>
        <!-- 在合适的位置，放一个router-view标签来显示对应的组件 -->
        <!-- router-view是路由容器组件，路由匹配到的组件会被替换到里面去 -->
        <router-view></router-view>


    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

<style lang="less" scoped>
.router-link-active{
    color: red;
    font-size: 20px;
}
</style>