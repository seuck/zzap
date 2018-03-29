import Scanissue from 'components/scanissue/scanissue.vue'

/*
 * For semantic reasons, please localise both names and routes
 * according to content language.
 */
export default [
  {
    components: {
      issue: Scanissue
    },
    name: `numero`,
    path: `/numero/:issueId`,
    props: {
      issue: true
    }
  }
]
