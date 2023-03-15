<template>
  <div>
    <ListItem />
  </div>
</template>

<script setup lang="ts">
import ListItem from "@/components/store/ListItem.vue";
import { useStore } from "vuex";
import {inject} from "vue"
import { EventBusType } from "@/types"

const store = useStore()
const $bus = inject('$bus') as EventBusType

$bus.emit('start:spinner')

// Spinner 확인을 위해 시간 지연
setTimeout(() => {
  store.dispatch('FETCH_ASK')
  .then(() => {
    console.log('fetched')
    $bus.emit('end:spinner')
  })
}, 3000)

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