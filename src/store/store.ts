import { fecthUserInfo, fetchAskList, fetchJobsList, fetchNewsList, fetchCommentItem } from "@/api";
import { Module} from "vuex"
import { StoreState, RootState } from "@/types";

const storeModule: Module<StoreState, RootState> = {
  state : {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: {}
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs
    },
    SET_ASK(state, ask) {
      state.ask = ask
    },
    SET_USER(state, user) {
      state.user = user
    },
    SET_ITEM(state, item) {
      state.item = item
    }
  },
  actions: {
    FETCH_NEWS({commit}) {
      fetchNewsList()
        .then(({data}) => commit('SET_NEWS', data))
        .catch(error => console.log(error))
    },
    FETCH_JOBS({commit}) {
      fetchJobsList()
        .then(({data}) => commit('SET_JOBS', data))
        .catch(error => console.log(error))
    },
    FETCH_ASK({commit}) {
      fetchAskList()
        .then(({data}) => commit('SET_ASK', data))
        .catch(error => console.log(error))
    },
    FETCH_USER({commit}, name) {
      fecthUserInfo(name)
        .then(({data}) => commit('SET_USER', data))
        .catch(error => console.log(error))
    },
    FETCH_ITEM({commit}, id) {
      fetchCommentItem(id)
        .then(({data}) => commit('SET_ITEM',data))
        .catch(error => console.log(error))
    }
  }
}

export default storeModule