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
    FETCH_USER({commit}, name) {
      fecthUserInfo(name)
        .then(({data}) => {
          commit('SET_USER', data)
          return data
        })
        .catch(error => console.log(error))
    },
    FETCH_ITEM({commit}, id) {
      fetchCommentItem(id)
        .then(({data}) => {
          commit('SET_ITEM',data)
          return data
        })
        .catch(error => console.log(error))
    },
    FETCH_LIST({commit}, pageName) {
      fetchList(pageName)
        .then(({data}) => {
          commit('SET_LIST', data)
          return data
        })
        .catch(error => console.log(error)) 
    }
  }
}

export default storeModule