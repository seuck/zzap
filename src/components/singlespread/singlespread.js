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
        buildScanDatabasePath(this.magazineId, this.issueId, this.startPage)
      )
    }
  },
  methods: {
    openReader(readerData) {
      this.$emit(EVENTS.openReader, readerData)
    }
  },
  name: COMPONENT_NAME,
  props: {
    align: {
      required: false,
      type: String,
      validator(value) {
        return [`left`, `right`].indexOf(value) !== -1
      }
    },
    altText: {
      required: false,
      type: String
    },
    caption: {
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
    rotation: {
      required: false,
      type: String,
      validator(value) {
        return [`cc`, `cw`].indexOf(value) !== -1
      }
    },
    startPage: {
      required: false,
      type: Number
    }
  }
}
