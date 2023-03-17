import { fecthUserInfo, fetchList, fetchCommentItem } from "@/api";
import { Module} from "vuex"
import { StoreState, RootState } from "@/types";

const storeModule: Module<StoreState, RootState> = {
  state : {
    user: {},
    item: {},
    list: []
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_ITEM(state, item) {
      state.item = item
    },
    SET_LIST(state, list) {
      state.list = list
    }
  },
  actions: {
    async FETCH_USER({commit}, name) {
      const response = await fecthUserInfo(name)
      commit('SET_USER',response.data)
      return response
    },
    async FETCH_ITEM({commit}, id) {
      const response = await fetchCommentItem(id)
      commit('SET_ITEM', response.data)
      return response
    },
    async FETCH_LIST({commit}, pageName) {
      const response = await fetchList(pageName)
      commit('SET_LIST', response.data)
      return response
    }
  }
}

export default storeModule