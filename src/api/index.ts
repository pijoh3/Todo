import axios from 'axios'
import {Response, UserInfo} from "@/types/store"

// HTTP Request & Response와 관련된 기본 설정
const config = {
  baseURL : process.env.VUE_APP_HNPWA_URL
}

const fetchNewsList = () : Promise<Response> => {
  return axios.get(`${config.baseURL}news/1.json`)
}

const fetchAskList = () : Promise<Response> => {
  return axios.get(`${config.baseURL}ask/1.json`)
}

const fetchJobsList = () : Promise<Response> => {
  return axios.get(`${config.baseURL}jobs/1.json`)
}

const fecthUserInfo = (userName : string) : Promise<Response> => {
  return axios.get(`${config.baseURL}user/${userName}.json`)
}

const fetchCommentItem = (id : number) : Promise<Response> => {
  return axios.get(`${config.baseURL}item/${id}.json`)
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fecthUserInfo,
  fetchCommentItem
}