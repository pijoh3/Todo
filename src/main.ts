import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import {store} from "@/store"
import eventBus from "@/utils/bus";

const vuetify = createVuetify({
  components,
  directives,
  ssr:true,
  defaults: {
    global: {
      /**
       * 클릭 시 번짐 효과 제거
       * @refer https://vuetifyjs.com/en/features/global-configuration/
       */
      ripple: false,
    },
  },
});

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .provide('$bus',eventBus)
  .mount("#app");
