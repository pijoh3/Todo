<template>
  <div v-for="item in news" :key="item.id">
   {{ item.title }}
  </div>
</template>
<script setup lang="ts">
import {useStore} from "vuex"
import { computed } from "vue"

const store = useStore()

const news = computed(() => store.state.news)

store.dispatch('FETCH_NEWS')
</script>

<style lang="scss">
  
</style>