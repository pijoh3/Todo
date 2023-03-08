<template>
  <h2>Carousel</h2>
  <VCarousel v-bind="state"/>
</template>

<script setup lang="ts">
import {reactive} from "vue"
import VCarousel from '@/components/common/VCarousel.vue';
import slide1 from '@/assets/images/slide1.jpg'

// const slide1 = require("@/assets/images/slide1.jpg")
const state = reactive({
  items: [
    `<img src="${slide1}"/>`,
    `<div></div>`,
    `<div></div>`
  ]
})

</script>

<style lang="ts">

</style>