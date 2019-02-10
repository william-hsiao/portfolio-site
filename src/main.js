import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import store from './store/index'

Vue.use(VueAnalytics, {
  id: 'UA-130037056-1',
  router
})

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  render: h => h(App),
  store,

  mounted() {
    const loadScreen = document.getElementById('load-screen');
    loadScreen.style.opacity = '0';
    loadScreen.style.pointerEvents = 'none';
    // loadScreen.style.display = 'none';
  }
}).$mount('#app')
