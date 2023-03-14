<template>
   <div v-for="job in jobs" :key="job.id">
    {{ job.title }}
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue"

const store = useStore()

const jobs = computed(() => store.state.storeModule.jobs)

store.dispatch('FETCH_JOBS')

</script>

<style lang="scss">
  
</style>