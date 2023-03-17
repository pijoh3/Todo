import UserView from "@/views/store/UserView.vue"
import ItemView from "@/views/store/ItemView.vue"
import withListView from "@/views/store/hoc/withListView"
import eventBus from "@/utils/bus"
import { store } from "@/store"

// List 데이터 호출
const dispatchList = (to:any, from:any, next:any) => {
  const bus = eventBus 
  bus.emit('start:spinner')
  // Spinner 확인을 위해 시간 지연
  setTimeout(() => {
    store.dispatch('FETCH_LIST', to.name)
    .then(() => {
      console.log('fetched')
      next()
    })
    .catch(error => console.log(error))
  }, 3000)
}

export default [
  {path: "ask", name:"ask", component: withListView('NewsView'), beforeEnter: dispatchList, meta: {title: "askView"}},
  {path: "jobs", name:"jobs", component: withListView('JobsView'), beforeEnter: dispatchList, meta: {title: "jobsView"}},
  {path: "news", name:"news", component: withListView('NewsView'), beforeEnter: dispatchList, meta: {title: "newsView"}},
  {path: "user/:id", name:"user", component: UserView, meta: {title: "userView"}},
  {path: "item/:id", name:"item", component: ItemView, meta: {title: "itemView"}}
]
