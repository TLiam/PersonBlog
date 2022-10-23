<template>
  <div class="nav">
    <div class="nav__slogan">Liam's Blog</div>
    <div class="nav__menu">
      <div class="menu__item" v-for="(item,index) of menuMember">
        <RouterLink :to="item.route" active-class="menu__item--active">{{item.page}}</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, computed } from "vue"
const menuMember = ref([
  { page: '首页', route: '/home' },
  { page: '博客', route: '/blogs' },
  { page: '知识总结', route: '/summary' },
  { page: '关于', route: '/about' },
  { page: '联系', route: '/contact' }
])
onMounted(() => { });
computed(() => { });
watchEffect(() => { });
</script>

<style scoped lang="less">
.nav {
  height: 80px;
  background: linear-gradient(90deg, #183114 0.75%, #446129 100%);
  line-height: 80px;

  .nav__slogan {
    float: left;
    width: 300px;
    height: 80px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    text-align: center;
    color: #e9de4c;
    text-shadow: 5px 5px 5px black;
  }

  .nav__menu {
    float: right;
    width: 600px;
    height: 80px;
    line-height: 80px;

    .menu__item {
      float: left;
      width: 120px;
      height: 80px;
      // font-family: 'Roboto';
      // font-style: normal;
      // font-weight: 400;
      // font-size: 18px;
      line-height: 80px;
      text-align: center;
      color: #FFFFFF;
    }

    .menu__item a {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      transition: all .5s;
    }

    .menu__item a:hover {
      color: #FCEE21;
      font-size: 20px;
    }

    .menu__item--active {
      color: #FCEE21;
    }
  }
}
</style>