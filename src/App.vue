<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script setup>
import {reactive} from "vue"
import TodoHeader from "./components/TodoHeader.vue"
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
import TodoFooter from "./components/TodoFooter.vue"

const state = reactive({
  todoItems: []
})

if(localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') state.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
}

const addOneItem = todoItem => {
   let obj = {completed: false, item: todoItem}
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
