<template>
  <div>
    <ToolBar />
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import ToolBar from "@/components/store/ToolBar.vue"

</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}  

a {
  color: #34495e;
  text-decoration: none;

  &.router-link-exact-active {
    text-decoration: underline;
  }

  &:hover {
    color: #42b883;
    text-decoration: underline;
  }
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity 2s;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
}
</style>