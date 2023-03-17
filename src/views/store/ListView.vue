<template>
  <div>
    <ListItem />
  </div>
</template>

<script setup lang="ts">
import ListItem from '@/components/store/ListItem.vue'
import { onMounted, inject } from 'vue'
import { EventBusType } from "@/types"

const $bus = inject('$bus') as EventBusType

onMounted(()=> {
  $bus.emit('end:spinner')
})

</script>

<style lang="scss">
  
</style>