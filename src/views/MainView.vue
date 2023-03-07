<template>
  <h1>Vue Project</h1>
  <VCard :overLine="'basic vue'" :title="'Todo'" :content="contentTemplate"/>
</template>

<script setup lang="ts">
import VCard from '@/components/common/VCard.vue';

const contentTemplate = `<p>Option API와 Composition API를 Todo 앱 예제를 통해 비교해봅니다.</p>
                         <p><b>사용 기술</b> : Typescript, Option API, Composition API</p>`
</script>

<style lang="scss" scoped>
h1 {
    color: #2F3B52;
    font-weight: 900;
    margin : 2.5rem 0 1.5rem;
}
</style>