<template>
    <div>
        <h3>子组件</h3>
        <button @click="btnHandler">触发func事件</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg:'这是子组件中的数据'
        }
    },
    methods: {
        btnHandler(){
            //在子组件中，通过this.$emit()方法，触发父组件为子组件绑定的func事件
            this.$emit('func',this.msg)
        }
    },
}
</script>