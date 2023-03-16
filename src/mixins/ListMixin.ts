/**
 * 실제 사용하지는 않는 코드
 * HOC와 mixin 비교를 위한 파일
 */
import { inject } from 'vue'
import { useStore } from "vuex";
import { useRoute } from 'vue-router';
import { EventBusType } from "@/types"

export default {
  // 재사용할 컴포넌트 옵션
  setup() {
    const store = useStore()
    const route = useRoute()
    const $bus = inject('$bus') as EventBusType
    
    $bus.emit('start:spinner')
    
    // Spinner 확인을 위해 시간 지연
    setTimeout(() => {
      store.dispatch('FETCH_LIST', route.name)
      .then(() => {
        console.log('fetched')
        $bus.emit('end:spinner')
      })
    }, 3000)
  }
}