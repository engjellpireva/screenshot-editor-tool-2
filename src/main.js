import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCookies from "vue-cookies";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import panZoom from "vue-panzoom";

Vue.use(BootstrapVue);
Vue.use(panZoom);
Vue.use(VueCookies);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
