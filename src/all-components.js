import Vue from 'vue'
import VueRouter from 'vue-router'
import SmoothscrollPolyfill from 'smoothscroll-polyfill'
import Home from 'components/home/home.vue'
import { routes } from 'constants/routes'

// Init Polyfills
SmoothscrollPolyfill.polyfill()

// Init Vue routes
const router = new VueRouter({
  routes
})

// Init Vue
Vue.config.productionTip = false
Vue.use(VueRouter)
// eslint-disable-next-line no-unused-vars
const vueZzap = new Vue({
  el: '.vueroot',
  router,
  render: h => h(Home)
})

// Include all *.js files in the "components" folder but exclude .test files
const components = require.context('./components', true, /^((?!test).)*\.js$/)
components.keys().forEach(components)
