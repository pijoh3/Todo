<template>
  <h2>Drag & Drop</h2>
  <VDrag :group="'default'" :list="list1" :animation="500">
    <template #item>
      <div v-for="(item) in list1" :key="item.title">
        <VCard v-bind="item"/>
      </div>
    </template>
  </VDrag>
</template>

<script setup lang="ts">
import {ref} from "vue"
import VDrag from '@/components/common/VDrag.vue';
import VCard from "@/components/common/VCard.vue";
const list1 = ref([
{overLine: "basic vue", title: "Todo", isBtn: false,
   content: `<p>Option API와 Composition API를 Todo 앱 예제를 통해 비교해봅니다.</p>
             <p><b>사용 기술</b> : Typescript, Option API, Composition API</p>`},
{overLine: "vue component", title: "Component",isBtn: false,
   content: `<p>Vuetify, vue.draggable.next 등의 라이브러리를 활용하여 Component를 제작합니다.</p>
             <p><b>사용 기술</b> : Vuetify, vue.draggable.next 등</p>`},
{overLine: "React", title: "Redux",isBtn: false,
   content: `<p>React는 반응형 웹 라이브러리입니다. 다양한 기술을 배워보세요.</p>
             <p><b>React를 지금부터</b>공부해 봅시다!!!</p>`},
])
</script>

<style lang="scss"></style>