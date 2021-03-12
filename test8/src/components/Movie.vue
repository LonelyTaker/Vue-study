<template>
    <div>
        <ul>
            <li v-for="item in mlist" :key="item.id" @click="goDetail(item)">{{item.name}}</li>

            <!-- <router-link v-for="item in mlist" :key="item.id" :to="'/Mdetail/'+item.id+'/'+item.name" tag="li">{{item.name}}</router-link> -->
            <!-- 使用命名路由实现跳转（了解） -->
            <!-- <router-link v-for="item in mlist" :key="item.id" :to="{name:'moviedetail',params:{id:item.id,name:item.name}}" tag="li">{{item.name}}</router-link> -->
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mlist:[
                {id:1,name:'雷神'},
                {id:2,name:'死侍'},
                {id:3,name:'黑豹'},
                {id:4,name:'复仇者联盟'},
                {id:5,name:'蜘蛛侠'},
            ]
        }
    },
    methods:{
        //通过点击li标签，实现路由跳转
        goDetail(item){
            this.$router.push(`/Mdetail/${item.id}/${item.name}`)
        }
    }
}
</script>

<style lang="less" scoped>
li{
    border:1px dashed #ccc;
    cursor: pointer;
    margin: 10px 0;
}
</style>