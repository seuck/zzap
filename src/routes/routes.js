import Demo from 'routes/demo.route'
import Diari from 'routes/diari.route'
import Giochi from 'routes/giochi.route'
import Mappe from 'routes/mappe.route'
import Numero from 'routes/numero.route'
import Speciali from 'routes/speciali.route'
import Zzap from 'routes/zzap.route'

import Home from 'components/home/home.vue'

import NotFoundComponent from 'components/notfoundcomponent/notfoundcomponent.vue'

const innerRoutes = [].concat(Diari, Giochi, Mappe, Numero, Speciali, Zzap, Demo)

export const routes = [
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
