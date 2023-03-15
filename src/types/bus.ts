import {Emitter, EventType} from "mitt"

export type EventBusType = Emitter<Record<EventType, unknown>>