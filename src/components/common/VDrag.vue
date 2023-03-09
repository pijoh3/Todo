<template>
  <draggable 
    :list="list" 
    :group="group" 
    :animation="animation" 
    tag="transition-group" 
    :disabled="disabled" 
    :move="onMove"
    @change="onChange"
    @start="onStart($event, $event.originalEvent)"
    @end="onEnd"
    @clone="onClone" >
    <slot name="header" />
    <slot name="item" />
    <slot name="footer" />
  </draggable>
</template>

<script setup lang="ts">
import {VueDraggableNext as draggable} from "vue-draggable-next"

// interface
export interface GroupProps {
  name?: string
  pull?: string
  put?: boolean
}

export interface StateProps {
  moved?: {
    element: unknown
    oldIndex: number
    newIndex: number
  }
  removed?: {
    element: unknown
    oldIndex: number
    newIndex: number
  }
  added?: {
    element: unknown
    oldIndex: number
    newIndex: number
  }
}

export interface VDragProps {
  disabled?: boolean
  group: string | GroupProps // D&D 객체 카테고리화
  list: Array<any>
  animation?: number
}

// props
// eslint-disable-next-line no-unused-vars
const props = withDefaults(defineProps<VDragProps>(), {
  disabled: false,
  animation: 200
})

// emit
const emit = defineEmits(["move", "change", "clone", "start", "end"])

const onChange = (e:StateProps):void => {
  if(e?.moved) emit("change", e.moved, e.moved.oldIndex, e.moved.newIndex)
  if(e?.removed) emit("change", e.removed, e.removed.oldIndex)
  if(e?.added) emit("change", e.added, e.added.newIndex)
}

const onMove = (e:any):void => {
  emit("move", e.draggedContext.index)
}

const onClone = (value: unknown):void => {
  emit("clone", value)
}

const onStart = (e: Event, dragEvent: DragEvent):void => {
  emit("start", e, dragEvent.ctrlKey) // ctrl키 눌림 여부 emit
}

const onEnd = ():void => {
  emit("end")
}
</script>

<style lang="scss">

</style>