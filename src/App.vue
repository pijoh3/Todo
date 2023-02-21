<template>
  <div id="app">
    <TodoHeader/>
    <TodoInput @addTodoITem="addOneItem"/>
    <TodoList :todoItems="state.todoItems" @removeItem="removeOneItem" @toggleItem="toggleOneItem"/>
    <TodoFooter @clearAll="clearAllItems"/>
  </div>
</template>

<script setup lang="ts">
import {reactive, PropType } from "vue"
import TodoHeader from "./components/TodoHeader.vue"
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
import TodoFooter from "./components/TodoFooter.vue"

export interface todoItem {
  completed: boolean
  item: string | number
}

export interface appState {
  todoItems : todoItem[]
}

const state = reactive<appState>({
  todoItems: []
})

if(localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) && localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          state.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
}

const addOneItem = (todoItem:string) => {
   let obj: todoItem = {completed: false, item: todoItem}
   localStorage.setItem(todoItem,JSON.stringify(obj))
   state.todoItems.push(obj)
}

const removeOneItem = (todoItem, index) => {
  localStorage.removeItem(todoItem.item)
  state.todoItems.splice(index,1)
}

const toggleOneItem = (todoItem, index) => {
  state.todoItems[index].completed = !state.todoItems[index].completed
  localStorage.removeItem(todoItem.item)
  localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
}

const clearAllItems = () => {
  localStorage.clear()
  state.todoItems = []
}
</script>

<style>
body {
  text-align: center;
  background-color:#F6F6F6;
}
input {
  border-style: groove;
  width : 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>
