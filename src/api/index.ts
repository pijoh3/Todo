import axios from 'axios'
import {Response, UserInfo} from "@/types/store"

// HTTP Request & Response와 관련된 기본 설정
const config = {
  baseURL : process.env.VUE_APP_HNPWA_URL
}

const fetchList = async (pageName : string): Promise<Response> => {
  try{
    return await axios.get(`${config.baseURL}${pageName}/1.json`)
  } catch(error) {
    console.log(error)
    return Promise.reject()
  }
}

const fecthUserInfo = async (userName : string) : Promise<Response> => {
  try {
    return await axios.get(`${config.baseURL}user/${userName}.json`)
  } catch(error) {
    console.log(error)
    return Promise.reject()
  }
}

const fetchCommentItem = async (id : number) : Promise<Response> => {
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