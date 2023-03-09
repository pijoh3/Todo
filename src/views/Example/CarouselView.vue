<template>
  <h2>Carousel - Default</h2>
  <VCarousel v-bind="state_1" @clickCycle="onClickCycle(1)"/>
  <h2>Carousel - Cycle</h2>
  <VCarousel v-bind="state_2" @clickCycle="onClickCycle(2)"/>
  <h2>Carousel - Show Arrows</h2>
  <VCarousel v-bind="state_3" @clickCycle="onClickCycle(3)"/>
  <h2>Carousel - Hide Delimeters</h2>
  <VCarousel v-bind="state_4" @clickCycle="onClickCycle(4)"/>
</template>

<script setup lang="ts">
import {reactive} from "vue"
import VCarousel from '@/components/common/VCarousel.vue';
import slide1 from '@/assets/images/slide1.jpg'
import slide2 from '@/assets/images/slide2.jpg'
import slide3 from '@/assets/images/slide3.jpg'

const state_1 = reactive({
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

const state_2 = reactive({
  cycle : true,
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

const state_3 = reactive({
  cycle : false,
  showArrows: true,
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

const state_4 = reactive({
  cycle : false,
  showArrows: true,
  hideDelimiters: true,
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

const onClickCycle = (num:number) => {
  switch (num) {
    case 1:
      state_1.cycle = !state_1.cycle
    break;
    case 2:
      state_2.cycle = !state_2.cycle
    break;
    case 3:
      state_3.cycle = !state_3.cycle
    break;
    case 4:
      state_4.cycle = !state_4.cycle
    break;
    default:
      break;
  }
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