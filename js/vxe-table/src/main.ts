import Vue from "vue";
import App from "./App.vue";

// vxe-table
import "xe-utils"
import './plugins/table'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
