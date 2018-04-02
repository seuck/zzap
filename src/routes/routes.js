import Demo from 'routes/demo.route'
import Diari from 'routes/diari.route'
import Giochi from 'routes/giochi.route'
import Mappe from 'routes/mappe.route'
import Numero from 'routes/numero.route'
import Progetto from 'routes/progetto.route'
import Redazione from 'routes/redazione.route'
import Speciali from 'routes/speciali.route'
import Zzap from 'routes/zzap.route'

import Home from 'components/home/home.vue'

import NotFoundComponent from 'components/notfoundcomponent/notfoundcomponent.vue'

const innerRoutes = [].concat(
  Diari, Giochi, Mappe, Numero, Progetto, Redazione, Speciali, Zzap, Demo
)

export const routes = [
  {
    children: innerRoutes,
    component: Home,
    path: `/`
  },
  {
    component: NotFoundComponent,
    path: `*`
  }
]
