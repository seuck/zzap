import EVENTS from 'constants/events'

import ContentContainer from 'components/contentcontainer/contentcontainer.vue'
import ContentSection from 'components/contentsection/contentsection.vue'
import ContentImage from 'components/contentimage/contentimage.vue'
import DoubleSpread from 'components/doublespread/doublespread.vue'
import SingleSpread from 'components/singlespread/singlespread.vue'
import ScrollLink from 'components/scrolllink/scrolllink.vue'
import {
  buildScanPathForContent
} from 'utils/image'
import { pathAssetsContent } from 'constants/paths'

export default {
  components: {
    ContentContainer,
    ContentImage,
    ContentSection,
    DoubleSpread,
    ScrollLink,
    SingleSpread
  },
  methods: {
    announceBookmark(payload) {
      this.$emit(EVENTS.announceBookmark, payload)
    },
    buildScanPathForContent(imagePath) {
      return buildScanPathForContent(imagePath)
    },
    dismissBookmark(payload) {
      this.$emit(EVENTS.dismissBookmark, payload)
    },
    openReader(readerData) {
      this.$emit(EVENTS.openReader, readerData)
    },
    resolveAssetPath(pathSegment) {
      return `${pathAssetsContent}${pathSegment}`
    }
  }
}
