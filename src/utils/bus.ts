import mitt from "mitt"
import { EventBusType } from "@/types"

const eventBus:EventBusType = mitt()

export default eventBus