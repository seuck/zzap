import ScrollLink from 'components/scrolllink/scrolllink.vue'

const COMPONENT_NAME = `dynamic-navigation`

export default {
  components: {
    ScrollLink
  },
  data() {
    return {
      closedBookmark: ``
    }
  },
  methods: {
    closeBookmark(anchor) {
      this.closedBookmark = anchor
    },
    getBookmarkClass(anchor) {
      let closedClass = ``

      if (anchor === this.closeBookmark) {
        closedClass = `dynamicnavigation__bookmark--closed`
      }

      return `dynamicnavigation__bookmark ${closedClass}`
    }
  },
  name: COMPONENT_NAME,
  props: [`sections`]
}
