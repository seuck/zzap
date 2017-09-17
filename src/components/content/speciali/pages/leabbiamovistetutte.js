import EVENTS from 'constants/events'

import ContentContainer from 'components/contentcontainer/contentcontainer.vue'
import ContentSection from 'components/contentsection/contentsection.vue'
import ContentImage from 'components/contentimage/contentimage.vue'

export default {
  components: {
    ContentContainer,
    ContentSection,
    ContentImage
  },
  methods: {
    announceBookmark(payload) {
      this.$emit(EVENTS.announceBookmark, payload)
    }
  }
}
