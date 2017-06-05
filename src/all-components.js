/* eslint-disable no-new */
/* eslint-disable no-unused-vars */

import Vue from 'vue';
import Home from './components/home/home.vue';

const vueZzap = new Vue({
  el: '.vueroot',
  render: h => h(Home)
});

// include all *.js files in the "components" folder but exclude .test files
const components = require.context('./components', true, /^((?!test).)*\.js$/);
components.keys().forEach(components);
