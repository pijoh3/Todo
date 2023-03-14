<template>
  <div v-for="item in ask" :key="item.id">
    {{ item.title }}
  </div>
</template>
<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue"

const store = useStore()

const ask = computed(() => store.state.ask)

store.dispatch('FETCH_ASK')
</script>

<style lang="scss">
  
</style>