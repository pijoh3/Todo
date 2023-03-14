<template>
  <div>
    <section>
      <div>
        <div>
          User
        </div>
        <div>
          <router-link :to="`/store/user/${itemInfo.user}`">
            {{ itemInfo.user }}
          </router-link>
          <div>
            {{ itemInfo.time_ago }}
          </div>
        </div>
        <h2>{{ itemInfo.title }}</h2>
      </div>
    </section>
    <section>
      {{ itemInfo.content }}
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

<style lang="scss">
  
</style>