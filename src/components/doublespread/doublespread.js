import EVENTS from 'constants/events'
import ContentImage from 'components/contentimage/contentimage.vue'
import {
  buildScanDatabasePath,
  buildScanPathForContent
} from 'utils/image'

const COMPONENT_NAME = `doublespread`

export default {
  components: {
    ContentImage
  },
  computed: {
    firstImagePath() {
      return buildScanPathForContent(
        buildScanDatabasePath(this.magazineID, this.issueID, this.startPage)
      )
    },
    secondImagePath() {
      return buildScanPathForContent(
        buildScanDatabasePath(
          this.magazineID, this.issueID, this.secondPage
        )
      )
    },
    secondPage() {
      return String(Number(this.startPage) + 1)
    }
  },
  methods: {
    openReader(readerData) {
      this.$emit(EVENTS.openReader, readerData)
    }
  },
  name: COMPONENT_NAME,
  props: [
    `altText`,
    `magazineID`,
    `issueID`,
    `returnBookmark`,
    `startPage`
  ]
}
