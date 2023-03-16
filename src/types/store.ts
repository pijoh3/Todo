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

export interface Response {
  data: Array<GeneralInfo> | Array<UserInfo>
}

export interface UserInfo {
  about?: string
  created?: string
  created_time?: number
  id?: string
  karma?: number
}

export interface ItemInfo {
  comments?: Array<string>
  comments_count?: number
  content?: HTMLElement | string
  id?: number
  points?: number
  time?: number
  time_ago?: string
  title?: string
  type?: string
  url?: string
  user?: string
}

// Store State 관리 interface
export interface StoreState {
  user: UserInfo
  item: ItemInfo
  list: Array<GeneralInfo>
}

export interface RootState {
  StoreState : StoreState
}