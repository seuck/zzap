import ReaderImage from 'components/reader/reader-image.vue'
import EVENTS from 'constants/events'

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
  beforeMount() {
    this.initActualPage(this.startPage)
  },
  beforeUpdate() {
    this.initActualPage(this.startPage)
  },
  components: {
    ReaderImage
  },
  computed: {
    hasContent() {
      return this.pages && this.pages.length > 0
    }
  },
  data() {
    return {
      actualPage: ``,
      keyupEventListenerAtteched: false
    }
  },
  methods: {
    close() {
      window.document.removeEventListener(KEY_EVENT, this.keyboardEventHandler)
      this.keyupEventListenerAtteched = false
      this.$emit(EVENTS.closeReader)
      this.actualPage = ``
    },
    doesPageExist(pageNumber) {
      return typeof this.pages[pageNumber] !== `undefined`
    },
    getComponentClass() {
      const baseClass = `reader`
      const classes = [baseClass]
      const singlePageClass = `singlepage`

      if (this.pages.length === 1) {
        classes.push(`${baseClass}--${singlePageClass}`)
      }

      return classes.join(` `)
    },
    getNavigationClass(index) {
      const classes = []
      const baseClass = `reader__navigation-page`
      const selectedClass = `reader__navigation-page-actual`

      classes.push(baseClass)
      if (index === this.actualPage) {
        classes.push(selectedClass)
      }

      return classes.join(` `)
    },
    hasPage(pageName) {
      return this.doesPageExist(this.actualPage) &&
        typeof this.pages[this.actualPage][pageName] !== `undefined`
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
    }
  },
  name: COMPONENT_NAME,
  props: [`pages`, `startPage`, `title`, `infoPath`]
}

/*

Example data for pages prop:
[
  {
    first: {
      label: '1',
      path: 'img/thumbs/zzap/1/01.jpg'
    }
  },
  {
    first: {
      label: '2',
      path: 'img/thumbs/zzap/1/02.jpg'
    },
    last: {
      label: '3',
      path: 'img/thumbs/zzap/1/03.jpg'
    }
  },
  {
    first: {
      label: '4',
      path: 'img/thumbs/zzap/1/04.jpg'
    },
    last: {
      label: '5',
      path: 'img/thumbs/zzap/1/05.jpg'
    }
  }
]

*/
