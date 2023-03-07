import {createRouter, createWebHistory} from 'vue-router'
import TodoView from '@/views/TodoView.vue'
import MainView from "@/views/MainView.vue"

const routes = [
  {path:"/", name:"home",component: MainView, meta: {title: "앱"}},
  {path:"/todo", name:"todo",component: TodoView, meta: {title: "todo"}}
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

// router 가드
router.beforeEach((to, from, next) => {
  console.log("beforeEach", to),
  console.log("beforeEach", from)
  next()
})

export default router