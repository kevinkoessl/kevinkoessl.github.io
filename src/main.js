import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Buefy from 'buefy';
import VueMq from 'vue-mq';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { BREAKPOINTS } from './consts/break-points';
import moment from 'moment';
import vueMoment from 'vue-moment';

gsap.registerPlugin(ScrollTrigger);

Vue.config.productionTip = false;
Vue.use(Buefy);

Vue.use(VueMq, {
  breakpoints: BREAKPOINTS,
});

Vue.use(vueMoment, {
  moment,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
