import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
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

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount("#app");
