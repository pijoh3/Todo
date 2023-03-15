import AskView from "@/views/store/AskView.vue"
import JobsView from "@/views/store/JobsView.vue"
import NewsView from "@/views/store/NewsView.vue"
import UserView from "@/views/store/UserView.vue"
import ItemView from "@/views/store/ItemView.vue"

export default [
  {path: "ask", name:"ask", component: AskView, meta: {title: "askView"}},
  {path: "jobs", name:"jobs", component: JobsView, meta: {title: "jobsView"}},
  {path: "news", name:"news", component: NewsView, meta: {title: "newsView"}},
  {path: "user/:id", name:"user", component: UserView, meta: {title: "userView"}},
  {path: "item/:id", name:"item", component: ItemView, meta: {title: "itemView"}}
]