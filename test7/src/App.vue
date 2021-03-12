<template>
    <div>
        <h1>根组件</h1>
        <button @click="comName='my-home'">Home</button>
        <button @click="comName='my-movie'">Movie</button>
        <component :is="comName"></component>
    </div>
</template>

<script>
import Home from './components/Home.vue'
import Movie from './components/Movie.vue'

export default {
    data() {
        return {
            comName:'my-home'
        }
    },
    components:{
        'my-home':Home,
        'my-movie':Movie
    },

}
</script>

<style lang="less" scoped>

</style>