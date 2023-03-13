<template>
  <v-tabs class="Tab TabNavigation" v-model="currentIndex">
    <v-tab class="TabNavigation__item" v-for="(item,idx) in tabList" :key="idx">{{ item }}</v-tab>
  </v-tabs>
  <template v-if="currentIndex === 0">
    <CarouselView />
  </template>
  <template v-if="currentIndex === 1">
    <DragView />
  </template>
  <template v-if="currentIndex === 2">
    <CheckboxAccordionView />
  </template>
</template>

<script setup lang="ts">
import CarouselView from "@/views/Example/CarouselView.vue"
import DragView from "@/views/Example/DragView.vue";
import CheckboxAccordionView from "@/views/Example/CheckboxAccordionView.vue";
import {ref} from "vue"

const tabList = ["Carousel","Drag","CheckboxAccordion"]

const currentIndex = ref(0)
</script>

<style lang="scss">
.Tab {
  position: sticky;
  top: 0;
  z-index: 99;
  background: #ffffff;
  overflow: visible !important;

  &:before {
    $minus-side: - 24px;
    content: '';
    display: block;
    bottom: 0;
    left: $minus-side;
    right: $minus-side;
    height: 1px;
    background: #E5E5E5;
  }

  &.TabNavigation {
    $높이: 52px;
    --v-tabs-height: #{$높이}; 

    .TabNavigation__item {
      --v-tabs-height: #{$높이};
      min-width: 0;
      padding: 0 14px;
      color: #c5c5c5;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: normal;

      &:first-child {
        padding-left: 0;
      }

      .v-btn__content {
        &:before {
          content: '';
          display: block;
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 2px;
        }
      }

      .v-btn__overlay,
      .v-btn__underlay {
        display: none;
      }

      &.v-slide-group-item--active {
        .v-btn__content {
          color: black;

          &:before {
            background: #000;
          }
        }
      }

      &:active,
      &:focus {
        outline: 1px dotted #0e0e0e;
      }
    }
  }
}
</style>