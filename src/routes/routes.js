import Demo from 'routes/demo.route'
import Diari from 'routes/diari.route'
import Mappe from 'routes/mappe.route'
import Numero from 'routes/numero.route'
import Speciali from 'routes/speciali.route'
import Zzap from 'routes/zzap.route'

import Home from 'components/home/home.vue'

import NotFoundComponent from 'components/notfoundcomponent/notfoundcomponent.vue'

/*
function buildAsyncCallback(componentSectionName, componentName) {
  // const contentPath = 'components/content'
  const pagesPath = 'pages'

  let componentPath

  if (typeof componentName !== 'undefined') {
    componentPath = `${componentSectionName}/${pagesPath}/${componentName}`
  } else {
    componentPath = `${componentSectionName}/${componentSectionName}`
  }

  return (resolve) => {
    // eslint-disable-next-line import/no-dynamic-require
    require([`components/content/${componentPath}.vue`], resolve)
  }
}
*/

const innerRoutes = [].concat(Diari, Mappe, Numero, Speciali, Zzap, Demo)

/*
 * For semantic reasons, please localise both names and routes
 * according to content language.
 */
const routes = [
  {
    path: `/`,
    component: Home,
    children: innerRoutes
  },
  {
    path: `*`,
    component: NotFoundComponent
  }
]

export {
  routes
}
