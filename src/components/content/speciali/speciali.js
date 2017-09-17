import EVENTS from 'constants/events'

import ContentContainer from 'components/contentcontainer/contentcontainer.vue'
import ContentSection from 'components/contentsection/contentsection.vue'
import ScrollLink from 'components/scrolllink/scrolllink.vue'

export default {
  components: {
    ContentContainer,
    ContentSection,
    ScrollLink
  },
  methods: {
    announceBookmark(payload) {
      this.$emit(EVENTS.announceBookmark, payload)
    }
  }
}
