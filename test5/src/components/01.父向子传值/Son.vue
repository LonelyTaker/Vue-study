<template>
    <div>
        <h3>子组件----{{infoFormParent}}--------{{info2FormParent}}</h3>
        <button @click="change">修改父组件传递过来的数据</button>
        <button @click="change2">修改pmsg2的数据</button>
    </div>
</template>

<script>
//导入lodash
import _ from 'lodash'

export default {
    data() {
        return {
            infoFormParent:this.pmsg,
            info2FormParent:_.cloneDeep(this.pmsg2),
        }
    },
    //子组件，需要使用props数组，接收外界传递过来的数据
    //props接收的数据，是只读的，不要为他们重新赋值
    props:['pmsg','pmsg2'],
    methods: {
        change(){
            this.infoFormParent='777'
        },
        change2(){
            this.info2FormParent.a+=1
        }
    },
}
</script>