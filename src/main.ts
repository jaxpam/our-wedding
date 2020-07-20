import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/styles/site.scss";

import { LayoutPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false;

Vue.use(LayoutPlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
