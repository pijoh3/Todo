import AskView from "@/views/store/AskView.vue"
import JobsView from "@/views/store/JobsView.vue"
import NewsView from "@/views/store/NewsView.vue"
import UserView from "@/views/store/UserView.vue"
import ItemView from "@/views/store/ItemView.vue"

export default [
  {path: "ask", component: AskView, meta: {title: "askView"}},
  {path: "jobs", component: JobsView, meta: {title: "jobsView"}},
  {path: "news", component: NewsView, meta: {title: "newsView"}},
  {path: "user/:id", component: UserView, meta: {title: "userView"}},
  {path: "item/:id", component: ItemView, meta: {title: "itemView"}}
]