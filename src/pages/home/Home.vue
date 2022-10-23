<template>
  <div class="home">
    <div class="home__hero">
      <div class="hero__slogan">
        <div class="slogan__title">
          记录自己的学习状况及掌握的技能
        </div>
        <div class="slogan__content">
          该博客的目的是将自己学到的知识
        </div>
      </div>
      <div class="hero__asset">
        <img src="./images/Asset.png" alt="" />
      </div>
    </div>
    <div class="home__plate">
      <div class="plate__item">
        <p class="item__title">Latest Blogs</p>
        <div class="item__card">
          <Card></Card>
        </div>
      </div>
      <div class="plate__item">
        <p class="item__title">Latest Summary</p>
        <div class="item__card">
          <Card></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, computed } from "vue"
import Card from "../../components/Card.vue";

onMounted(() => { });

computed(() => { });

watchEffect(() => { });
</script>

<style lang="less" scoped>
.home {

  .home__hero {
    height: 300px;
    background: linear-gradient(90deg, #183114 0.75%, #446129 100%);

    .hero__slogan {
      float: left;
      width: 1000px;
      height: 300px;
      padding-left: 50px;
      text-align: left;

      .slogan__title {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 46px;
        line-height: 75px;
        color: #FCEE21;
      }

      .slogan__content {
        width: 500px;
        margin-left: 30px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 47px;
        align-items: center;
        color: #FFFFFF;
      }
    }

    .hero__asset {
      float: left;

      img {
        width: 400px;
        transition: all .5s;
        cursor: pointer;
      }

      img:hover {
        transform: scale(1.2, 1.2);
      }
    }
  }

  .home__plate {
    background: #F3F3D3;

    .plate__item {
      .item__title {
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 75px;
        color: #183114;
        padding: 10px 0;
      }

      .item__card {}
    }
  }
}
</style>