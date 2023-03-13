<template>
   <div v-for="item in jobs" :key="item.id">
    {{ item.title }}
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue"
import { GeneralInfo } from "@/types";
import { fetchJobsList } from '@/api';

const jobs = ref<Array<GeneralInfo>>([])

fetchJobsList()
  .then(response => {
    jobs.value = response.data
  })
  .catch(error => console.log(error))

</script>

<style lang="scss">
  
</style>