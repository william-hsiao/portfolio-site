import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import axios from 'axios'

Vue.use(VueAnalytics, {
  id: 'UA-130037056-1',
  router
})

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.prototype.$http = axios
Vue.directive('fade-in', {
  bind(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 1.25s ease';
    const fadeIn = () => {
      if (el.getBoundingClientRect().y < window.innerHeight*2/3) {
        el.style.opacity = '';
        el.style.transform = '';
        window.removeEventListener('scroll', fadeIn);
      }
    }
    window.addEventListener('scroll', fadeIn);
  }
})

new Vue({
  router,
  render: h => h(App),

  mounted() {
    const loadScreen = document.getElementById('load-screen');
    loadScreen.style.opacity = '0';
    loadScreen.style.pointerEvents = 'none';
    // loadScreen.style.display = 'none';
  }
}).$mount('#app')
