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
        <span class="blind">
          <a target="_blank" href="https://icons8.com/icon/101884/%EC%A0%95%EC%82%AC%EA%B0%81%ED%98%95-%EB%A9%88%EC%B6%A4">정사각형 멈춤</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </span>
        <span>Pause</span>
      </button>
      <button v-else type="button" class="play" @click="clickPlay">
        <span>Play</span>
        <span class="blind">
          <a target="_blank" href="https://icons8.com/icon/85165/%EB%86%80%EC%9D%B4">놀이</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </span>
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
  items?: Array<HTMLElement> | Array<string>
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

<style lang="scss" scoped>
@charset "UTF-8";

@import "@/assets/styles/index.scss";

.VCarousel {
  & .VCarousel__carousel {
    & .VCarousel__carousel__item {
     display: block;
     text-align: center;
    }

    & .figure {
      & img {
        max-width: 100%;
      }
    }
  }
  & .VCarousel__control {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 24px;
    
    & button span {
      margin: -1px;
      padding: 0;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      position: absolute;
    }

    & .VCarousel__control--play {
        & .pause {
          display : block;
        }
    }
   
    & .VCarousel__control--pause {
      & .play {
        display: block;
      }
    }

    & .blind {
      display: none;
    }
    
    & .play,
    & .pause {
      width: 16px;
      height: 16px;
    }

    & .play {
      @include icon("16px", "16px", "icons8-play-24");
    }

    & .pause {
      @include icon("16px", "16px", "icons8-pause-24");
    }

    & .VCarousel__control__pagination {
      display: flex;
      align-items: center;
      gap: 10px;

      & button {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        padding: 0.2em;
        background-color: #666666;

        &.active {
          width: 12px;
          height: 12px;
          background-color: #222;
        }
      }
    }
  }
}
</style>