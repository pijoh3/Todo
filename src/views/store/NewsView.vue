<template>
  <div>
    <p v-for="item in news" :key="item.id">
      <a :href="item.url">{{ item.title }}</a>
      <small>
        {{ item.time_ago }} by 
        <router-link :to="`/store/user/${item.user}`">
          {{ item.user }}
        </router-link>
      </small>
    </p>
  </div>
</template>

<script setup lang="ts">
import {useStore} from "vuex"
import { computed } from "vue"

const store = useStore()

const news = computed(() => store.state.storeModule.news)

store.dispatch('FETCH_NEWS')

</script>

<style lang="scss">
  
</style>