import { EVENTS } from 'constants/events'

/*
 * Scroll down for example data
 */

export default {
  name: 'reader',
  props: ['pages', 'startPage', 'title'],
  data() {
    return {
      actualPage: ''
    }
  },
  computed: {
    hasContent() {
      return this.pages && this.pages.length > 0
    }
  },
  methods: {
    doesPageExist(pageNumber) {
      return typeof this.pages[pageNumber] !== 'undefined'
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
    initActualPage(pageNumber) {
      if (this.actualPage === '' && typeof pageNumber !== 'undefined') {
        if (this.doesPageExist(pageNumber)) {
          this.actualPage = +pageNumber
        } else {
          this.actualPage = 0
        }
      }
    },
    close() {
      this.$emit(EVENTS.closeReader)
      this.actualPage = ''
    },
    hasPage(pageName) {
      return this.doesPageExist(this.actualPage) &&
        typeof this.pages[this.actualPage][pageName] !== 'undefined'
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
