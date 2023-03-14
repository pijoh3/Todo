import {createStore} from "vuex";
import storeModule from "@/store/store"

export const store = createStore({
  modules : { storeModule }
})