import EVENTS from 'constants/events'
import ANIMATIONS from 'constants/animations'
import {
  scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset
} from 'utils/scroll'

const COMPONENT_NAME = `content-container`
const CLASS_NAME = `content`

export default {
  beforeDestroy() {
    this.$emit(EVENTS.dismissBookmark, [this.anchor])
  },
  data() {
    return {
      componentClass: `${CLASS_NAME} ${CLASS_NAME}__${this.anchor}`
    }
  },
  mounted() {
    _scrollToClassWithDefaultOffset(`${CLASS_NAME}__${this.anchor}`)

    // Gives time to destroyed pages to close their bookmarks
    window.setTimeout(() => {
      this.$emit(EVENTS.announceBookmark, [
        {
          anchor: this.anchor,
          target: CLASS_NAME,
          title: this.title
        }
      ])
    }, ANIMATIONS.bookmarkCloseDelay)
  },
  name: COMPONENT_NAME,
  props: {
    anchor: {
      required: true,
      type: String
    },
    author: {
      required: false,
      type: String
    },
    date: {
      required: false,
      type: String
    },
    title: {
      required: true,
      type: String
    }
  }
}

export {
  CLASS_NAME
}
