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
import { useListStore } from '@/store';
import { computed } from "vue"
import { UserInfo } from '@/types';

const route = useRoute()
const store = useListStore()

const userName: string | string[] = route.params.id

const userInfo = computed(()=> store.user as UserInfo)

store.setUser(userName)

</script>

<style lang="scss">
  
</style>