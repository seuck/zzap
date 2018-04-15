import Vue from 'vue'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'
import SmoothscrollPolyfill from 'smoothscroll-polyfill'
import Basepage from 'components/basepage/basepage.vue'
import { routes } from 'routes/routes'

// Init Polyfills
SmoothscrollPolyfill.polyfill()

// Init Vue routes
const router = new VueRouter({
  mode: `history`,
  routes
})

// Init Vue
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueLazyload)
// eslint-disable-next-line no-unused-vars
const vueZzap = new Vue({
  el: `.vueroot`,
  render: h => h(Basepage),
  router
})
