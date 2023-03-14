<template>
  <div>
    <p v-for="item in ask" :key="item.id">
      <router-link :to="`/store/item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue"

const store = useStore()

const ask = computed(() => store.state.storeModule.ask)

store.dispatch('FETCH_ASK')

</script>

<style lang="scss">
  
</style>