import {App} from "vue"
import {Chart, registerables} from "chart.js"

export default {
  install(app:App) {
    Chart.register(...registerables)
    app.provide('$_Chart',Chart)
  }
}