import Scanissue from 'components/scanissue/scanissue.vue'

/*
 * For semantic reasons, please localise both names and routes
 * according to content language.
 */
export default [
  {
    name: `numero`,
    path: `/numero/:issueId`,
    components: {
      issue: Scanissue
    },
    props: {
      issue: true
    }
  }
]
