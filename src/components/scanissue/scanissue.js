import axios from 'axios'
import EVENTS from 'constants/events'
import ANIMATIONS from 'constants/animations'
import ScanissueImage from 'components/scanissue/scanissue-info.vue'
import * as I18N from 'locales/localedate'
import { isEmptyObject } from 'utils/object'
import { ZZAPI_RESOURCES } from 'api/zzapi'
import { scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset } from 'utils/scroll'

const COMPONENT_NAME = `scanissue`
const backcoverClass = `backcover`

export default {
  name: COMPONENT_NAME,
  props: [`magazineId`, `issueId`],
  components: {
    ScanissueImage
  },
  data() {
    return {
      issue: {},
      readerData: {},
      doublePagesCache: [],
      errors: [],
      specialBookmarks: {
        cover: `cover`,
        backcover: backcoverClass
      },
      bookmarks: []
    }
  },
  watch: {
    // Can't use arrow functions here. See: https://vuejs.org/v2/api/#watch
    // eslint-disable-next-line object-shorthand
    issueId: function (val) {
      this.loadIssue(val)
    }
  },
  computed: {
    isIssueId() {
      return !isEmptyObject(this.issue)
    },
    doublePages() {
      if (this.doublePagesCache.length === 0) {
        const doublePageArray = []

        if (this.isIssueId) {
          for (let i = 1; i < this.issue.volumes[0].pages.length - 1; i += 2) {
            doublePageArray.push(i)
          }
        }
        this.doublePagesCache = doublePageArray
      }

      return this.doublePagesCache
    },
    anchors() {
      return this.bookmarks.map(bookmark => bookmark.anchor)
    }
  },
  methods: {
    resetLoadedIssue() {
      this.doublePagesCache = []
      this.readerData = {}
      this.dismissBookmarks()
    },
    loadIssue(issueId) {
      if (issueId !== ``) {
        axios.get(ZZAPI_RESOURCES.issue(this.magazineId, this.issueId))
          .then((response) => {
            this.resetLoadedIssue()
            this.issue = response.data
            this.bookmarks = this.getBookmarks()
            this.announceBookmarks()
          })
          .catch(e => this.errors.push(e))
      }
    },
    buildPageThumbPath(imagePath) {
      return `/img/thumbs/${imagePath}`
    },
    buildScanPath(imagePath) {
      return `/img/scans/${imagePath}`
    },
    getMonth(monthNumber) {
      return I18N.MONTHS.it[monthNumber - 1]
    },
    getReaderData(startPage) {
      if (isEmptyObject(this.readerData)) {
        const data = {}
        const formattedDate = `${this.getMonth(+this.issue.month)} ${this.issue.year}`

        // eslint-disable-next-line max-len
        data.title = `${this.issue.magazine.name} ${I18N.TEXTS.it.issue} ${this.issue.sequence} - ${formattedDate}`
        data.pages = []

        // Cover
        data.pages.push(this.buildDoublePageForReader(
          undefined,
          this.issue.volumes[0].pages[0]
        ))

        // Spreads
        this.doublePages.forEach((page) => {
          data.pages.push(this.buildDoublePageForReader(
            this.issue.volumes[0].pages[+page],
            this.issue.volumes[0].pages[+page + 1]
          ))
        })

        // Back cover
        data.pages.push(this.buildDoublePageForReader(
          this.issue.volumes[0].pages[this.issue.volumes[0].pages.length - 1]
        ))

        this.readerData = data
      }
      this.readerData.startPage = Math.floor(+startPage / 2)
      this.readerData.returnBookmark = `${COMPONENT_NAME}__${startPage}`

      return this.readerData
    },
    buildDoublePageForReader(firstPage, lastPage) {
      const doublePage = {}

      if (typeof firstPage !== `undefined`) {
        doublePage.first = {
          label: firstPage.label,
          path: this.buildScanPath(firstPage.scan.path)
        }
      }
      if (typeof lastPage !== `undefined`) {
        doublePage.last = {
          label: lastPage.label,
          path: this.buildScanPath(lastPage.scan.path)
        }
      }

      return doublePage
    },
    openReader(startPage) {
      this.$emit(EVENTS.openReader, this.getReaderData(startPage))
    },
    getContentClass(pageData) {
      const baseClass = `page`
      const classes = [
        baseClass,
        pageData.sequence
      ]

      if (pageData.content.length > 0) {
        pageData.content.forEach((content) => {
          classes.push(`content-type-${content.content_type_id}`)
        })
      }

      if (pageData.sequence === this.issue.volumes[0].pages) {
        classes.push(backcoverClass)
      }

      return classes.map(cls => `${COMPONENT_NAME}__${cls}`).join(` `)
    },
    getBookmarks() {
      const bookmarks = [{
        title: I18N.CONTENT_TYPES.it[0],
        anchor: this.specialBookmarks.cover,
        target: COMPONENT_NAME
      }]

      this.issue.volumes[0].pages.forEach((page) => {
        page.content.forEach((content) => {
          bookmarks.push({
            title: I18N.CONTENT_TYPES.it[content.content_type_id],
            anchor: `content-type-${content.content_type_id}`,
            target: COMPONENT_NAME
          })
        })
      })

      bookmarks.push({
        title: I18N.CONTENT_TYPES.it[I18N.CONTENT_TYPES.it.length - 1],
        anchor: this.specialBookmarks.backcover,
        target: COMPONENT_NAME
      })

      return bookmarks
    },
    announceBookmarks() {
      // Gives time to destroyed pages to close their bookmarks
      window.setTimeout(() => {
        this.$emit(EVENTS.announceBookmark, this.bookmarks)
      }, ANIMATIONS.bookmarkCloseDelay)
    },
    dismissBookmarks() {
      this.$emit(EVENTS.dismissBookmark, this.anchors)
    }
  },
  mounted() {
    this.loadIssue(this.issueId)
    _scrollToClassWithDefaultOffset(COMPONENT_NAME)
  },
  updated() {
    _scrollToClassWithDefaultOffset(COMPONENT_NAME)
  },
  beforeDestroy() {
    this.dismissBookmarks()
  }
}
