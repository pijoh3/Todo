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