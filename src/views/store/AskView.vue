<template>
  <div>
    <ul class="ask-list">
      <li v-for="item in ask" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{  item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="ask-title">
            <router-link :to="`/store/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <router-link class="link-text" :to="`/store/user/${item.user}`">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
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
.ask-list {
  margin: 0;
  padding: 0;

  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;

    .points {
      width: 80px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #42b883
    }

    .ask-title {
      margin: 0;
    }

    .link-text {
      color: #828282;
    }
  }
}
</style>