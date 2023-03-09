<template>
  <h2>Drag & Drop - Default</h2>
  <VDrag :group="'default'" :list="list1" :animation="500">
    <template #item>
      <div v-for="(item) in list1" :key="item.title">
        <VCard v-bind="item"/>
      </div>
    </template>
  </VDrag>
  <hr/>
  <h2>Drag & Drop - Multiple</h2>
  <div class="container">
    <div >
      <VDrag :group="'multiple'" :list="list2" :animation="500">
        <template #item>
          <div v-for="(item) in list2" :key="item.title">
            <VCard v-bind="item"/>
          </div>
          <!-- List 길이가 0인 경우 버그가 발생하여 길이가 0일때는 hidden된 VCard 생성 -->
          <div v-if="list2.length === 0">
            <VCard class="blind" :title="''"/>
          </div>
        </template>
      </VDrag>
    </div>
    <div>
      <VDrag :group="'multiple'" :list="list3" :animation="500">
        <template #item>
          <div v-for="(item) in list3" :key="item.title">
            <VCard v-bind="item"/>
          </div>
          <!-- List 길이가 0인 경우 버그가 발생하여 길이가 0일때는 hidden된 VCard 생성 -->
          <div v-if="list3.length === 0">
            <VCard class="blind" :title="''"/>
          </div>
        </template>
      </VDrag>
    </div>
  </div>
  <h2>Drag & Drop - Clone</h2>
  <div class="container"> 
    <div >
      <VDrag :group="{name: 'clone', pull: 'clone', put: false}" :list="list4" :animation="500">
        <template #item>
          <div v-for="(item) in list4" :key="item.title">
            <VCard v-bind="item"/>
          </div>
          <!-- List 길이가 0인 경우 버그가 발생하여 길이가 0일때는 hidden된 VCard 생성 -->
          <div v-if="list4.length === 0">
            <VCard class="blind" :title="''"/>
          </div>
        </template>
      </VDrag>
    </div>
    <div>
      <VDrag :group="'clone'" :list="list5" :animation="500">
        <template #item>
          <div v-for="(item) in list5" :key="item.title">
            <VCard v-bind="item"/>
          </div>
          <!-- List 길이가 0인 경우 버그가 발생하여 길이가 0일때는 hidden된 VCard 생성 -->
          <div v-if="list5.length === 0">
            <VCard class="blind" :title="''"/>
          </div>
        </template>
      </VDrag>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import VDrag from '@/components/common/VDrag.vue';
import VCard from "@/components/common/VCard.vue";

export interface ListState {
  overLine?: string
  title: string
  content?: HTMLElement|string
  isBtn?: boolean
  btnLabel?: string
}

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

const list2 = ref<Array<ListState>>([
  {title: "대한민국", isBtn: false,
  content: `<p>원달러 1,319.20</p>
            <p>▲ 3.20 (+0.24%)</p>`},
  {title: "일본", isBtn: false,
  content: `<p>엔달러 136.86</p>
            <p>▲ 3.60 (+0.27%)</p>`},
  {title: "중국",isBtn: false,
  content: `<p>위안달러 182.23</p>
            <p>▲ 3.60 (+0.27%)</p>`},
])

const list3 = ref<Array<ListState>>([
  {title: "영국", isBtn: false,
   content: `<p>원달러 1,323139.20</p>
             <p>▲ 3.20 (+0.24%)</p>`},
  {title: "대만", isBtn: false,
   content: `<p>대만달러 136.86</p>
             <p>▲ 4,290 (+0.27%)</p>`},
  {title: "캐나다",isBtn: false,
   content: `<p>달러 182.23</p>
             <p>▲ 20.60 (+0.27%)</p>`},
])

const list4 = ref<Array<ListState>>([
  {title: "영국", isBtn: false,
   content: `<p>원달러 1,323139.20</p>
             <p>▲ 3.20 (+0.24%)</p>`},
  {title: "대만", isBtn: false,
   content: `<p>대만달러 136.86</p>
             <p>▲ 4,290 (+0.27%)</p>`},
  {title: "캐나다",isBtn: false,
   content: `<p>달러 182.23</p>
             <p>▲ 20.60 (+0.27%)</p>`},
])

const list5 = ref<Array<ListState>>([
  {title: "영국", isBtn: false,
   content: `<p>원달러 1,323139.20</p>
             <p>▲ 3.20 (+0.24%)</p>`},
  {title: "대만", isBtn: false,
   content: `<p>대만달러 136.86</p>
             <p>▲ 4,290 (+0.27%)</p>`},
  {title: "캐나다",isBtn: false,
   content: `<p>달러 182.23</p>
             <p>▲ 20.60 (+0.27%)</p>`},
])
</script>

<style lang="scss">
.blind {
  visibility: hidden;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;
}
</style>