<template>
  <h2>Carousel</h2>
  <VCarousel v-bind="state" @clickCycle="onClickCycle"/>
</template>

<script setup lang="ts">
import {reactive} from "vue"
import VCarousel from '@/components/common/VCarousel.vue';
import slide1 from '@/assets/images/slide1.jpg'
import slide2 from '@/assets/images/slide2.jpg'
import slide3 from '@/assets/images/slide3.jpg'

const state = reactive({
  cycle : false,
  items: [
    `<div class="carousel_item">
       <img class="imgBox" src="${slide1}"/>
     </div>`,
    `<div class="carousel_item">
       <img class="imgBox" src="${slide2}"/>
     </div>`,
    `<div class="carousel_item">
       <img class="imgBox" src="${slide3}"/>
     </div>`
  ]
})

const onClickCycle = () => {
  state.cycle = !state.cycle
}
</script>

<style lang="scss">
.carousel_item {
  position: relative;
  margin:auto;
}
.imgBox {
  width: 200px;
  height: 300px;
}
</style>