<template>
  <div id="app">
    <router-view v-slot="{Component, route}">
      <div :key="route.fullPath">
        <component :is="Component" />
      </div>
    </router-view>
    <VSpinner :loading="loadingStaus"/>
  </div>
</template>

<script setup lang="ts">
import {RouterView, useRoute, useRouter} from "vue-router"
import VSpinner from "@/components/common/VSpinner.vue"
import { ref, inject, onBeforeUnmount } from "vue"
import { EventBusType } from "@/types";

const route = useRoute()
const router = useRouter()

const $bus = inject('$bus') as EventBusType

const loadingStaus = ref(false)

const startSpinner = () => {
  loadingStaus.value = true
}

const endSpinner = () => {
  loadingStaus.value = false
}

$bus.on('start:spinner', startSpinner)
$bus.on('end:spinner', endSpinner)

console.log("App",route)
console.log("App",router)

onBeforeUnmount(() => {
  $bus.off('start:spinner', startSpinner)
  $bus.off('end:spinner', endSpinner)
})

</script>

<style lang="scss">
/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}

.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
