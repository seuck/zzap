import Scanissue from 'components/scanissue/scanissue.vue'
import Diaries from 'components/content/diaries/diaries.vue'
import ZzapDiary from 'components/content/diaries/zzap.vue'

/*
 * For semantic reasons, please localise routes
 * according to content language
 */
const routes = [
  {
    name: 'numero',
    path: '/numero/:issueId',
    components: {
      issue: Scanissue
    },
    props: { default: false, issue: true }
  },
  {
    name: 'diari',
    path: '/diari',
    components: {
      content: Diaries
    }
  },
  {
    name: 'diari-zzap',
    path: '/diari/zzap',
    components: {
      content: ZzapDiary
    }
  }
]

export {
  routes
}
