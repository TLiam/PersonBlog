<template>
  <!-- 头部组件 Header -->
  <Header></Header>
  <!-- 组件展示 -->
  <router-view />
</template>

<script setup>
// 引入 头部组件 "Header"
import Header from "./components/Header.vue";
</script>

<style scoped>

</style>