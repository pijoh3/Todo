<template>
  <canvas id="lineChart" ref="lineChart"></canvas>
</template>

<script setup lang="ts">
import { ChartData, ChartConfiguration } from 'chart.js'
import { onMounted, ref, inject } from 'vue'

export interface LineProps {
  type?: string
  data?: ChartData<'line'>
}

export interface VLineProps {
  options?: LineProps
}

const props = withDefaults(defineProps<VLineProps>(),{
})

const lineChart = ref<HTMLCanvasElement|null>(null)

const chart = inject('$_Chart')

onMounted(() => {
  //@ts-ignore
  // Chart.js에 Chart 인터페이스가 따로 없음ㅠㅠ
  new chart(lineChart.value as HTMLCanvasElement, props.options as ChartConfiguration)
})

</script>

<style lang="scss">
  
</style>