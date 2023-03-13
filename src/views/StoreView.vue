<template>
  <div>
    <ToolBar />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import ToolBar from "@/components/store/ToolBar.vue"
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}  
</style>