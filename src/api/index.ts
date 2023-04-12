import axios from 'axios'
import {Response} from "@/types/store"

// HTTP Request & Response와 관련된 기본 설정
const config = {
  baseURL : process.env.VUE_APP_HNPWA_URL
}

const fetchList = async (pageName : string | string[]): Promise<Response> => {
  try{
    return await axios.get(`${config.baseURL}${pageName}/1.json`)
  } catch(error) {
    console.log(error)
    return Promise.reject()
  }
}

const fecthUserInfo = async (userName : string | string[]) : Promise<Response> => {
  try {
    return await axios.get(`${config.baseURL}user/${userName}.json`)
  } catch(error) {
    console.log(error)
    return Promise.reject()
  }
}

const fetchCommentItem = async (id : string | string[]) : Promise<Response> => {
  try {
    return await axios.get(`${config.baseURL}item/${id}.json`)
  } catch(error) {
    console.log(error)
    return Promise.reject()
  }
}

export {
  fetchList,
  fecthUserInfo,
  fetchCommentItem
}