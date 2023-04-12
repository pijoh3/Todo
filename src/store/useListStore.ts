import { fecthUserInfo, fetchList, fetchCommentItem } from "@/api";
import { ResponseData } from "@/types";
import { defineStore } from "pinia";
import { Ref, ref } from "vue";

const useListStore = defineStore("list", () => {
  const user: Ref<ResponseData> = ref([]);
  const item: Ref<ResponseData> = ref([]);
  const list: Ref<ResponseData> = ref([]);

  const setUser = async (name: string | string[]) => {
    const response = await fecthUserInfo(name);
    user.value = response.data;
  };
  
  const setItem = async (id : string | string[]) => {
    const response = await fetchCommentItem(id);
    item.value = response.data;
  }
  
  const setList = async (pageName : string | string[]) => {
    const response = await fetchList(pageName);
    list.value = response.data;
  }

  return {user, item, list, setUser, setItem, setList}
});

export default useListStore;
