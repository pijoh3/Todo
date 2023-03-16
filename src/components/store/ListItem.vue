<template>
  <div>
    <ul class="item-list">
      <li v-for="item in listItems" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{  item.points  || 0}}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="item-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`/store/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <router-link v-if="item.user" class="link-text" :to="`/store/user/${item.user}`">
              {{ item.user }}
            </router-link>
            <a v-else :href="item.url">{{ item.domain }}</a>
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

const listItems = computed(() => store.state.storeModule.list)

</script>

<style lang="scss">
.item-list {
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

    .item-title {
      margin: 0;
    }

    .link-text {
      color: #828282;
    }
  }
}  
</style>