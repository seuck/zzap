import Home from 'components/home/home.vue'
import Scanissue from 'components/scanissue/scanissue.vue'
import Diaries from 'components/content/diaries/diaries.vue'
import ZzapDiary from 'components/content/diaries/zzap.vue'
import Speciali from 'components/content/speciali/speciali.vue'
import SpecialiLeabbiamovistetutte from 'components/content/speciali/pages/leabbiamovistetutte.vue'
import SpecialiKonixmultisystem from 'components/content/speciali/pages/konixmultisystem.vue'
import NotFoundComponent from 'components/notfoundcomponent/notfoundcomponent.vue'

/*
 * For semantic reasons, please localise both names and routes
 * according to content language.
 */
const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        name: 'numero',
        path: '/numero/:issueId',
        components: {
          issue: Scanissue
        },
        props: {
          issue: true
        }
      },
      {
        name: 'diari',
        path: 'diari',
        components: {
          content: Diaries
        }
      },
      {
        path: 'diari/zzap',
        name: 'diari-zzap',
        components: {
          content: Diaries,
          followup: ZzapDiary
        }
      },
      {
        name: 'speciali',
        path: 'speciali',
        components: {
          content: Speciali
        }
      },
      {
        path: 'speciali/leabbiamovistetutte',
        name: 'speciali-leabbiamovistetutte',
        components: {
          content: Speciali,
          followup: SpecialiLeabbiamovistetutte
        }
      },
      {
        path: 'speciali/konixmultisystem',
        name: 'speciali-konixmultisystem',
        components: {
          content: Speciali,
          followup: SpecialiKonixmultisystem
        }
      }
    ]
  },
  {
    path: '*',
    component: NotFoundComponent
  }
]

export {
  routes
}
