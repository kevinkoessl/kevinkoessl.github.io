import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Buefy from 'buefy';
import VueMq from 'vue-mq';

Vue.config.productionTip = false;
Vue.use(Buefy);

Vue.use(VueMq, {
  breakpoints: {
    mobile: 769,
    tablet: 1025,
    desktop: 1217,
    widescreen: 1409,
    fullhd: Infinity,
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
