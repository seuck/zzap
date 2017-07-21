import Home from 'components/home/home.vue'
import Scanissue from 'components/scanissue/scanissue.vue'
import Diaries from 'components/content/diaries/diaries.vue'
import ZzapDiary from 'components/content/diaries/zzap.vue'
import NotFoundComponent from 'components/notfoundcomponent/notfoundcomponent.vue'

/*
 * For semantic reasons, please localise routes
 * according to content language
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
