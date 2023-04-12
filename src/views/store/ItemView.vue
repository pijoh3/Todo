<template>
  <div>
    <section>
      <UserProfile>
        <template #username>
          <router-link :to="`/store/user/${itemInfo.user}`">
            {{ itemInfo.user }}
          </router-link>
        </template>
        <template #time>{{ `Posted ${itemInfo.time_ago}` }}</template>
      </UserProfile>
    </section>
    <section class="item-container"> 
      <h2>{{ itemInfo.title }}</h2>
      <div class="item__content" v-html="itemInfo.content">
      </div>
    </section>
</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useListStore } from '@/store';
import { computed } from "vue"
import { ItemInfo } from '@/types';
import UserProfile from '@/components/store/UserProfile.vue';

const route = useRoute()
const store = useListStore()

const itemId :string | string[] = route.params.id

const itemInfo = computed(() => store.item as ItemInfo)

store.setItem(itemId)

</script>

<style lang="scss" scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  .fa-user {
    font-size: 2.5rem;
  }
  
  .user-description {
    padding-left: 8px;
  }

  .time {
    font-size: 0.7rem;
  }
}

.item-container {
  padding-left: 0.5rem;
  text-align: left;

  .item__content {
    padding-top: 1rem;
  }
}
</style>