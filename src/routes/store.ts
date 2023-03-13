import AskView from "@/views/store/AskView.vue"
import JobsView from "@/views/store/JobsView.vue"
import NewsView from "@/views/store/NewsView.vue"


export default [
  {path: "ask", component: AskView, meta: {title: "askView"}},
  {path: "jobs", component: JobsView, meta: {title: "jobsView"}},
  {path: "news", component: NewsView, meta: {title: "newsView"}},
]