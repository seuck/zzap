import Vue from 'vue'
import Home from 'components/home/home.vue'
import SmoothscrollPolyfill from 'smoothscroll-polyfill'

// Init Polyfills
SmoothscrollPolyfill.polyfill()

// Init Vue
// eslint-disable-next-line no-unused-vars
const vueZzap = new Vue({
  el: '.vueroot',
  render: h => h(Home)
})
Vue.config.productionTip = false

// Include all *.js files in the "components" folder but exclude .test files
const components = require.context('./components', true, /^((?!test).)*\.js$/)
components.keys().forEach(components)
