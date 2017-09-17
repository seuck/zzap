import ScrollLink from 'components/scrolllink/scrolllink.vue'

const COMPONENT_NAME = `dynamic-navigation`

export default {
  name: COMPONENT_NAME,
  props: [`sections`],
  components: {
    ScrollLink
  }
}
