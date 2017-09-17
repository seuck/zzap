import ReaderImage from 'components/reader/reader-image.vue'
import EVENTS from 'constants/events'
import { scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset } from 'utils/scroll'

/*
 * Scroll down for example data
 */

const COMPONENT_NAME = `reader`
const KEY_EVENT = `keydown`
const KEY_CODES = {
  esc: 27,
  left: 37,
  right: 39
}

export default {
  name: COMPONENT_NAME,
  props: [`pages`, `startPage`, `title`],
  components: {
    ReaderImage
  },
  data() {
    return {
      actualPage: ``,
      keyupEventListenerAtteched: false
    }
  },
  computed: {
    hasContent() {
      return this.pages && this.pages.length > 0
    }
  },
  methods: {
    doesPageExist(pageNumber) {
      return typeof this.pages[pageNumber] !== `undefined`
    },
    nextPage() {
      const nextPage = +this.actualPage + 1

      if (this.doesPageExist(nextPage)) {
        this.actualPage = nextPage
      }
    },
    previousPage() {
      const previousPage = +this.actualPage - 1

      if (this.doesPageExist(previousPage)) {
        this.actualPage = previousPage
      }
    },
    keyboardEventHandler(event) {
      switch (event.which) {
        case KEY_CODES.esc:
          this.close()
          event.preventDefault()
          break
        case KEY_CODES.left:
          this.previousPage()
          event.preventDefault()
          break
        case KEY_CODES.right:
          this.nextPage()
          event.preventDefault()
          break
        default:
      }
    },
    initActualPage(pageNumber) {
      if (this.actualPage === `` && typeof pageNumber !== `undefined`) {
        if (this.doesPageExist(pageNumber)) {
          this.actualPage = +pageNumber
        } else {
          this.actualPage = 0
        }
        if (!this.keyupEventListenerAtteched) {
          window.document.addEventListener(KEY_EVENT, this.keyboardEventHandler)
          this.keyupEventListenerAtteched = true
        }
      }
    },
    close() {
      window.document.removeEventListener(KEY_EVENT, this.keyboardEventHandler)
      this.keyupEventListenerAtteched = false
      this.$emit(EVENTS.closeReader)
      this.actualPage = ``
      _scrollToClassWithDefaultOffset(`scanissue`)
    },
    hasPage(pageName) {
      return this.doesPageExist(this.actualPage) &&
        typeof this.pages[this.actualPage][pageName] !== `undefined`
    }
  },
  beforeMount() {
    this.initActualPage(this.startPage)
  },
  beforeUpdate() {
    this.initActualPage(this.startPage)
  }
}

/*

Example data for pages prop:
[
  {
    first: {
      path: '/img/thumbs/zzap/1/01.jpg'
    }
  },
  {
    first: {
      path: '/img/thumbs/zzap/1/02.jpg'
    },
    last: {
      path: '/img/thumbs/zzap/1/03.jpg'
    }
  },
  {
    first: {
      path: '/img/thumbs/zzap/1/04.jpg'
    },
    last: {
      path: '/img/thumbs/zzap/1/05.jpg'
    }
  }
]

*/
