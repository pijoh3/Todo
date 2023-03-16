import UserView from "@/views/store/UserView.vue"
import ItemView from "@/views/store/ItemView.vue"
import withListView from "@/views/store/hoc/withListView"

export default [
  {path: "ask", name:"ask", component: withListView('NewsView'), meta: {title: "askView"}},
  {path: "jobs", name:"jobs", component: withListView('JobsView'), meta: {title: "jobsView"}},
  {path: "news", name:"news", component: withListView('NewsView'), meta: {title: "newsView"}},
  {path: "user/:id", name:"user", component: UserView, meta: {title: "userView"}},
  {path: "item/:id", name:"item", component: ItemView, meta: {title: "itemView"}}
]