import Scanissue from 'components/scanissue/scanissue.vue'

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
