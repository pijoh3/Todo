import axios from 'axios'
import {ResponseGeneralInfo} from "@/types/store"

// HTTP Request & Response와 관련된 기본 설정
const config = {
  baseURL : process.env.VUE_APP_HNPWA_URL
}

const fetchNewsList = ():Promise<ResponseGeneralInfo> => {
  return axios.get(`${config.baseURL}news/1.json`)
}

const fetchAskList = ():Promise<ResponseGeneralInfo> => {
  return axios.get(`${config.baseURL}ask/1.json`)
}

const fetchJobsList = ():Promise<ResponseGeneralInfo> => {
  return axios.get(`${config.baseURL}jobs/1.json`)
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList
}