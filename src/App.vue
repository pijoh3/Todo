<template>
  <div id="app">
    <router-view v-slot="{Component, route}">
        <div :key="route.fullPath">
          <component :is="Component" />
        </div>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import {RouterView, useRoute, useRouter} from "vue-router"

const route = useRoute()
const router = useRouter()

console.log("App",route)
console.log("App",router)

</script>

<style lang="scss">

</style>
