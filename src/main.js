import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// =========================================
// IMPORT APPLICATION STYLES
// =========================================
import "bootstrap/dist/css/bootstrap.css";
import "../public/css/app.css";
import "@/shared/assets/scss/app.scss";

// =========================================
// IMPORT APPLICATION PLUGINS
// =========================================
import "@/plugins";

export const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
