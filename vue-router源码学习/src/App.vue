<template>
  <div>
    <h1>测试</h1>
    <button @click="push">回到首页</button>
    <router-link to="/test1">test1</router-link>
    <router-link to="/test2">test2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    push() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scoped></style>
