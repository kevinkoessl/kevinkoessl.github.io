import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Buefy from 'buefy';
import { gsap } from 'gsap';
gsap.install(window); // This will make everythng global.

Vue.config.productionTip = false;
Vue.use(Buefy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
