<template>
  <div>
    <ul class="news-list">
      <li v-for="item in news" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{  item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
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
import {useStore} from "vuex"
import { computed } from "vue"

const store = useStore()

const news = computed(() => store.state.storeModule.news)

store.dispatch('FETCH_NEWS')

</script>

<style lang="scss" scoped>
.news-list {
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

    .news-title {
      margin: 0;
    }

    .link-text {
      color: #828282;
    }
  }
}  
</style>