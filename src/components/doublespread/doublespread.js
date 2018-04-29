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
      return Number(this.startPage) + 1
    }
  },
  methods: {
    openReader(readerData) {
      this.$emit(EVENTS.openReader, readerData)
    }
  },
  name: COMPONENT_NAME,
  props: {
    altText: {
      required: false,
      type: String
    },
    issueID: {
      required: false,
      type: Number
    },
    magazineID: {
      required: false,
      type: Number
    },
    returnBookmark: {
      required: false,
      type: String
    },
    startPage: {
      required: false,
      type: Number
    }
  }
}
