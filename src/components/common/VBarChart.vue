<template>
  <div>
    <canvas id="barChart" ref="barChart" width="400" height="400"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, inject } from "vue"
import { ChartConfiguration, ChartData, ChartOptions } from "chart.js"

export interface BarProps {
  type?: string
  data?: ChartData<'bar'>
  options?: ChartOptions<'bar'>
}

export interface VBarProps {
  options?: BarProps
}

const props = withDefaults(defineProps<VBarProps>(),{
})

const barChart = ref<HTMLCanvasElement|null>(null)

const chart = inject('$_Chart')

onMounted(() => {
  //@ts-ignore
  // Chart.js에 Chart 인터페이스가 따로 없음ㅠㅠ
  new chart(barChart.value as HTMLCanvasElement, props.options as ChartConfiguration)
})

</script>

<style lang="scss">
  
</style>