import { h, inject } from 'vue'
import { useStore } from "vuex";
import { useRoute } from 'vue-router';
import ListView from "@/views/store/ListView.vue"
import { EventBusType } from "@/types"

const withListView = (name:string) => {

  return {
    // 컴포넌트의 이름
    name,
    // 네비게이션 가드로 데이터 호출 시점 변경
    setup() {
      // const store = useStore()
      // const route = useRoute()
      // const $bus = inject('$bus') as EventBusType
      
      // $bus.emit('start:spinner')
      
      // // Spinner 확인을 위해 시간 지연
      // setTimeout(() => {
      //   store.dispatch('FETCH_LIST', route.name)
      //   .then(() => {
      //     console.log('fetched')
      //     $bus.emit('end:spinner')
      //   })
      //   .catch(error => console.log(error))
      // }, 3000)
    },
    render() {
      return h(ListView)
    }
  }
}

export default withListView