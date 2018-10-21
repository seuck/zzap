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
        buildScanDatabasePath(this.magazineId, this.issueId, this.startPage)
      )
    },
    secondImagePath() {
      return buildScanPathForContent(
        buildScanDatabasePath(
          this.magazineId, this.issueId, this.secondPage
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
    issueId: {
      required: false,
      type: Number
    },
    magazineId: {
      required: false,
      type: Number
    },
    startPage: {
      required: false,
      type: Number
    }
  }
}
