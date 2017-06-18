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
  beforeUpdate() {
    this.actualPage = this.startPage
  }
}
