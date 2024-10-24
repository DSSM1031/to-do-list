import Vue from "vue";
import App from "./App.vue";
import eruda from "../node_modules/eruda/eruda.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

eruda.init();
