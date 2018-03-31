import EVENTS from 'constants/events'

import ContentContainer from 'components/contentcontainer/contentcontainer.vue'
import ContentSection from 'components/contentsection/contentsection.vue'
import ContentImage from 'components/contentimage/contentimage.vue'
import ScrollLink from 'components/scrolllink/scrolllink.vue'
import {
  pathThumbsContent
} from 'constants/paths'

export default {
  components: {
    ContentContainer,
    ContentImage,
    ContentSection,
    ScrollLink
  },
  methods: {
    announceBookmark(payload) {
      this.$emit(EVENTS.announceBookmark, payload)
    },
    dismissBookmark(payload) {
      this.$emit(EVENTS.dismissBookmark, payload)
    },
    getScanPathForContent(imagePath) {
      return `${pathThumbsContent}${imagePath}`
    },
    openReader(readerData) {
      this.$emit(EVENTS.openReader, readerData)
    }
  }
}
