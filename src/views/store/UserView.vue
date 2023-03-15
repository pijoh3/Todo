<template>
  <div>
    <UserProfile>
      <template #username>{{ userInfo.id }}</template>
      <template #time>
        <span>{{ `Joined ${userInfo.created}` }}, </span>
      </template>
      <template #karma>
        <span>{{ userInfo.karma }}</span>
      </template>
    </UserProfile>
  </div>
</template>

<script setup lang="ts">
import UserProfile from '@/components/store/UserProfile.vue';

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