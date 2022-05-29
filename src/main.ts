import Vue from "vue";
import Home from "./views/Home.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/styles/site.scss";
import SmoothScroll from "smooth-scroll";

const smooth = new SmoothScroll("[data-scroll]", {
  easing: "easeInQuad"  });

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Home)
}).$mount("#app");
