// FETCH API 기본 인터페이스 구조
export interface GeneralInfo {
  comments_count?: number
  domain?: string
  id?: number
  points?: number
  time?: number
  time_ago?: string
  title?: string
  type?: string
  url?: string
  user?: string
}

export interface ResponseGeneralInfo {
  data: Array<GeneralInfo>
}

// Store State 관리 interface
export interface StoreState {
  news: Array<GeneralInfo>
  jobs: Array<GeneralInfo>
  ask: Array<GeneralInfo>
}

export interface RootState {
  StoreState : StoreState
}