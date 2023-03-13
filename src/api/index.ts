import axios from 'axios'
import {News} from "@/types"

// HTTP Request & Response와 관련된 기본 설정
const config = {
  // headers: {
  //   'Access-Control-Allow-Origin': "*",
  //   'Content-Type': 'application/json; charset = utf-8'
  // },
  baseUrl: 'https://api.hnpwa.com/v0/'
}

const fetchNewsList = () => {
  console.log("주소 : ")
  console.log(process.env)
  return axios.get(`${process.env.HNPWA_URL}/news/1.json`)
}

export {
  fetchNewsList
}