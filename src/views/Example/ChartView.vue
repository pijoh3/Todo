<template>
  <div>
    <h2>Chart.js</h2>
      <VBarChart :options="state.bar"/>
      <VLineChart :options="state.line"/>
  </div>
</template>

<script setup lang="ts">
import VBarChart from '@/components/common/VBarChart.vue'
import VLineChart from '@/components/common/VLineChart.vue'
import { reactive } from 'vue'

const state = reactive({
  bar : {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  },
  line : {
    type: 'line',
    data: {
      labels: ['January', 'Februaray', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
        }]
      }
  }
})
</script>

<style lang="scss">
  
</style>