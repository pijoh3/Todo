<template>
  <div class="VCarousel">
    <v-carousel class="VCarousel__carousel" hide-delimiters :height="height" :show-arrows="showArrows" :cycle="cycle" v-model="currentIndex" @change="$emit('change', $event)">
      <v-carousel-item v-for="(item,idx) in items" class="VCarousel__carousel_item" :key="`carousel_${idx}`" v-html="item" />
      <slot />
    </v-carousel>

    <div v-if="!hideDelimiters" class="VCarousel__control" :class="cycleClass">
      <div class="VCarousel__control__pagination">
        <button type="button" v-for="idx in _itemCnt" :key="idx-1" :class="currentIndex == idx -1 ? 'active' : ''" @click="changeScene(idx -1)">
          <span>{{ currentIndex }} Slide</span>
        </button>
      </div>
      <button v-if="cycle" type="button" class="pause" @click="clickPlay">
        <span>Pause</span>
      </button>
      <button v-else type="button" class="play" @click="clickPlay">
        <span>Play</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue"

export interface VCarouselProps {
  height?: number | string
  hideDelimiters?: boolean
  showArrows?: boolean
  cycle?: boolean
  items?: Array<HTMLElement>
  itemCnt?: number
  modelValue?: number
}

const props = withDefaults(defineProps<VCarouselProps>(),{
  height: "auto",
  hideDelimiters: false,
  showArrows: false,
  cycle: false,
  items: () => [],
  itemCnt: 0,
  modelValue: 0
})

const emit = defineEmits(["changeScene","clickCycle"])

const cycleClass = computed(() => 
  props.cycle ? "VCarousel__control--play" : "VCarousel__control--pause"
)

const _itemCnt = computed(() => props.itemCnt && props.itemCnt > 0 ? props.itemCnt : props.items.length)

const currentIndex = ref(props.modelValue)

const changeScene = (idx: number):void => {
  currentIndex.value = idx
  emit("changeScene", idx)
}

const clickPlay = (e:Event):void => emit("clickCycle",e)
</script>

<style lang="scss">
</style>