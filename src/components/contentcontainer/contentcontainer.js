import EVENTS from 'constants/events'
import ANIMATIONS from 'constants/animations'
import {
  scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset
} from 'utils/scroll'

const COMPONENT_NAME = `content-container`
const CLASS_NAME = `content`

export default {
  name: COMPONENT_NAME,
  props: [`title`, `date`, `anchor`],
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
          title: this.title,
          anchor: this.anchor,
          target: CLASS_NAME
        }
      ])
    }, ANIMATIONS.bookmarkCloseDelay)
  },
  beforeDestroy() {
    this.$emit(EVENTS.dismissBookmark, [this.anchor])
  }
}

export {
  CLASS_NAME
}
