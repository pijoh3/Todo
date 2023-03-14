<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from "vue"

const route = useRoute()
const store = useStore()

const userName = route.params.id

const userInfo = computed(()=> store.state.storeModule.user)

store.dispatch('FETCH_USER', userName)

</script>

<style lang="scss">
  
</style>