<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </div>
</template>

<script setup lang="ts">
// emit
const emit = defineEmits(["clearAll"])
// emit event
const clearTodo = ():void => {
    emit('clearAll')
}
</script>

<style scoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
}
.clearAllBtn {
    color: #e20303;
    display: block;
}
</style>