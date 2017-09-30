import ScrollLink from 'components/scrolllink/scrolllink.vue'

const COMPONENT_NAME = `dynamic-navigation`

export default {
  name: COMPONENT_NAME,
  props: [`sections`],
  components: {
    ScrollLink
  },
  data() {
    return {
      closedBookmark: ``
    }
  },
  methods: {
    getBookmarkClass(anchor) {
      let closedClass = ``

      if (anchor === this.closeBookmark) {
        closedClass = `dynamicnavigation__bookmark--closed`
      }

      return `dynamicnavigation__bookmark ${closedClass}`
    },
    closeBookmark(anchor) {
      this.closedBookmark = anchor
    }
  }
}
