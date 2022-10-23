<template>
  <div class="blogs">
    <h3>Blogs</h3>
    {{blogs}}
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, computed } from "vue"
import axios from 'axios'

const blogs = ref([])
onMounted(() => {
  axios
    .get("http://localhost:3000/blogs")
    .then((res) => {
      blogs.value = res.data
      console.log(res.data);
    })
});
console.log(blogs.value);

computed(() => { });

watchEffect(() => { });
</script>

<style scoped>

</style>