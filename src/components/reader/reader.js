export default {
  name: 'reader',
  props: ['pages', 'startPage', 'title'],
  data() {
    return {
      actualPage: '',
      _pages: []
    }
  },
  computed: {
    hasContent() {
      return this._pages && this._pages.length > 0
    }
  },
  methods: {
    doesPageExist(pageNumber) {
      return typeof this._pages[pageNumber] !== 'undefined'
    },
    nextPage() {
      const nextPage = this.actualPage + 1
      if (this.doesPageExist(nextPage)) {
        this.actualPage = nextPage
      }
    },
    previousPage() {
      // eslint-disable-next-line no-console
      console.log(this.actualPage)
      const previousPage = this.actualPage - 1
      // eslint-disable-next-line no-console
      console.log(`${previousPage} -> ${this.doesPageExist(previousPage)}`)
      if (this.doesPageExist(previousPage)) {
        this.actualPage = previousPage
      }
      // eslint-disable-next-line no-console
      console.log(this.actualPage)
    },
    initActualPage(pageNumber) {
      if (this.doesPageExist(pageNumber)) {
        this.actualPage = pageNumber
      } else {
        this.actualPage = 0
      }
    },
    close() {
      this._pages.length = 0
      // eslint-disable-next-line no-console
      console.log('closed')
    }
  },
  beforeMount() {
    // eslint-disable-next-line no-console
    console.log('mounted')
    this._pages = this.pages
    this.initActualPage(this.startPage)
  },
  beforeUpdate() {

  }
}
