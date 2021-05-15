import Vue from "vue";
import Home from "./views/Home.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/styles/site.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Home)
}).$mount("#app");
