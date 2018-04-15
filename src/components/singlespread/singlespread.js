import EVENTS from 'constants/events'
import ContentImage from 'components/contentimage/contentimage.vue'
import {
  buildScanDatabasePath,
  buildScanPathForContent
} from 'utils/image'

const COMPONENT_NAME = `singlespread`

export default {
  components: {
    ContentImage
  },
  computed: {
    imagePath() {
      return buildScanPathForContent(
        buildScanDatabasePath(this.magazineID, this.issueID, this.startPage)
      )
    }
  },
  methods: {
    openReader(readerData) {
      this.$emit(EVENTS.openReader, readerData)
    }
  },
  name: COMPONENT_NAME,
  props: [
    `align`,
    `altText`,
    `caption`,
    `magazineID`,
    `issueID`,
    `returnBookmark`,
    `rotation`,
    `startPage`
  ]
}
