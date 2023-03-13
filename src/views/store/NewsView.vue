<template>
  <div v-for="user in users" :key="user.id">
   {{ user.title }}
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue"
import {News} from "@/types"
import {fetchNewsList} from "@/api"

const users = ref<Array<News>>([])

fetchNewsList()
.then(response => {
    console.log(response)
    users.value = response.data
  })
  .catch(error => console.log(error))

</script>

<style lang="scss">
  
</style>