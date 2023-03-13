<template>
  <div class="header">
    <router-link to="/store/news">News</router-link> |
    <router-link to="/store/ask">ask</router-link> |
    <router-link to="/store/jobs">Jobs</router-link>
  </div>
</template>
<script setup lang="ts">
</script>

<style lang="scss" scoped>
.header {
  color:white;
  background-color: #42b883;
  display: flex;
  padding: 8px;

  .router-link-exact-active {
    color: #35495e;  
  }

  a {
    color: white;
  }
}  
</style>