<template>
  <h1>Vue Project</h1>
  <VCard v-for="(item,idx) in cardList" :key="idx" v-bind="item" @click="$event=>$router.push(item.path)"/>
  <!-- <VCard :overLine="'basic vue'" :title="'Todo'" :content="todoTemplate" @click="$event=>$router.push('/todo')"/>
  <VCard :overLine="'vue component'" :title="'Component'" :content="todoTemplate" @click="$event=>$router.push('/component')"/> -->
</template>

<script setup lang="ts">
import {ref} from "vue"
import VCard from '@/components/common/VCard.vue';

const cardList = ref([
  {overLine: "basic vue", title: "Todo", 
   content: `<p>Option API와 Composition API를 Todo 앱 예제를 통해 비교해봅니다.</p>
             <p><b>사용 기술</b> : Typescript, Option API, Composition API</p>`,
   path: "/todo"},
  {overLine: "vue component", title: "Component", 
   content: `<p>Vuetify, vue.draggable.next 등의 라이브러리를 활용하여 Component를 제작합니다.</p>
             <p><b>사용 기술</b> : Vuetify, vue.draggable.next 등</p>`,
   path: "/component"},
])
</script>

<style lang="scss" scoped>
h1 {
    color: #2F3B52;
    font-weight: 900;
    margin : 2.5rem 0 1.5rem;
}
</style>