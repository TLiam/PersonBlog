<template>
  <div class="card">
    <div class="item">Card</div>
    <div class="item">Card</div>
    <div class="item">Card</div>
    <div class="item">Card</div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, computed } from "vue"


onMounted(() => { });

computed(() => { });

watchEffect(() => { });
</script>

<style lang="less" scoped>
.card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .item {
    width: 320px;
    height: 500px;
    background-color: skyblue;
  }
}
</style>