<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/store/user/${itemInfo.user}`">
            {{ itemInfo.user }}
          </router-link>
          <div class="time">
            {{ itemInfo.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ itemInfo.title }}</h2>
    </section>
    <section>
      <div v-html="itemInfo.content">
      </div>
    </section>
</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from "vue"

const route = useRoute()
const store = useStore()

const itemId = route.params.id

const itemInfo = computed(() => store.state.storeModule.item)

store.dispatch('FETCH_ITEM', itemId)

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

</style>