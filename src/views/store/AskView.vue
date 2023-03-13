<template>
  <div v-for="item in ask" :key="item.id">
    {{ item.title }}
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue"
import {GeneralInfo} from "@/types"
import { fetchAskList } from '@/api';

const ask = ref<Array<GeneralInfo>>([])

fetchAskList()
  .then(response => {
    console.log(response.data)
    ask.value = response.data
  })
  .catch(error => console.log(error))

</script>

<style lang="scss">
  
</style>