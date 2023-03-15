<template>
  <div>
    <ListItem />
  </div>
</template>

<script setup lang="ts">
import ListItem from "@/components/store/ListItem.vue";

</script>

<style lang="scss">
.ask-list {
  margin: 0;
  padding: 0;

  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;

    .points {
      width: 80px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #42b883
    }

    .ask-title {
      margin: 0;
    }

    .link-text {
      color: #828282;
    }
  }
}
</style>