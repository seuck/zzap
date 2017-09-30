import EVENTS from 'constants/events'
import {
  scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset
} from 'utils/scroll'

const COMPONENT_NAME = `content-container`
const CLASS_NAME = `content`

export default {
  name: COMPONENT_NAME,
  props: [`title`, `anchor`],
  data() {
    return {
      componentClass: `${CLASS_NAME} ${CLASS_NAME}__${this.anchor}`
    }
  },
  mounted() {
    _scrollToClassWithDefaultOffset(`${CLASS_NAME}__${this.anchor}`)

    // Gives time to destroyed pages to close their bookmarks
    window.setTimeout(() => {
      this.$emit(EVENTS.announceBookmark, {
        title: this.title,
        anchor: this.anchor
      })
    }, 500)
  },
  beforeDestroy() {
    this.$emit(EVENTS.dismissBookmark, {
      title: this.title,
      anchor: this.anchor
    })
  }
}
