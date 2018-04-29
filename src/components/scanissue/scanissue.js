import axios from 'axios'
import EVENTS from 'constants/events'
import ANIMATIONS from 'constants/animations'
import ScanissueInfo from 'components/scanissue/scanissue-info.vue'
import { CONTENT_TYPES, TEXTS } from 'locales/localedate'
import { isEmptyObject } from 'utils/object'
import { ZZAPI_RESOURCES } from 'api/zzapi'
import { scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset } from 'utils/scroll'
import {
  buildPageThumbPath,
  buildScanPath
} from 'utils/image'
import {
  doublePages,
  buildIssueReaderData
} from 'utils/reader'
import {
  getMonthNameFromNumber
} from 'utils/text'

const COMPONENT_NAME = `scanissue`
const backcoverClass = `backcover`

export default {
  beforeDestroy() {
    this.dismissBookmarks()
  },
  components: {
    ScanissueInfo
  },
  computed: {
    anchors() {
      return this.bookmarks.map(bookmark => bookmark.anchor)
    },
    isIssueId() {
      return !isEmptyObject(this.issue)
    }
  },
  data() {
    return {
      bookmarks: [],
      errors: [],
      issue: {},
      specialBookmarks: {
        backcover: backcoverClass,
        cover: `cover`
      }
    }
  },
  methods: {
    announceBookmarks() {
      // Gives time to destroyed pages to close their bookmarks
      window.setTimeout(() => {
        this.$emit(EVENTS.announceBookmark, this.bookmarks)
      }, ANIMATIONS.bookmarkCloseDelay)
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
    buildPageThumbPath(imagePath) {
      return buildPageThumbPath(imagePath)
    },
    buildScanPath(imagePath) {
      return buildScanPath(imagePath)
    },
    dismissBookmarks() {
      this.$emit(EVENTS.dismissBookmark, this.anchors)
    },
    getBackcoverAltText(issueNumber) {
      return `${TEXTS.it.backcoverOfZzapIssue} ${issueNumber}`
    },
    getBookmarks() {
      const bookmarks = [{
        anchor: this.specialBookmarks.cover,
        target: COMPONENT_NAME,
        title: CONTENT_TYPES.it[0]
      }]

      this.issue.volumes[0].pages.forEach((page) => {
        page.content.forEach((content) => {
          bookmarks.push({
            anchor: `content-type-${content.content_type_id}`,
            target: COMPONENT_NAME,
            title: CONTENT_TYPES.it[content.content_type_id]
          })
        })
      })

      bookmarks.push({
        anchor: this.specialBookmarks.backcover,
        target: COMPONENT_NAME,
        title: CONTENT_TYPES.it[CONTENT_TYPES.it.length - 1]
      })

      return bookmarks
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
    getCoverAltText(issueNumber) {
      return `${TEXTS.it.coverOfZzapIssue} ${issueNumber}`
    },
    getDoublePages() {
      return doublePages(this.issue)
    },
    getMonthNameFromNumber(monthNumber) {
      return getMonthNameFromNumber(monthNumber)
    },
    getPageAltText(issueNumber, page) {
      return `Pagina ${page} del numero ${issueNumber} di Zzap!`
    },
    getReaderData(startPage) {
      const readerData = buildIssueReaderData(
        this.issue, startPage, `${COMPONENT_NAME}__${startPage}`
      )

      return readerData
    },
    loadIssue(issueId) {
      if (issueId !== ``) {
        axios.get(ZZAPI_RESOURCES.issue(this.magazineId, this.issueId))
          .then((response) => {
            this.resetLoadedIssue()
            this.issue = response.data
            this.bookmarks = this.getBookmarks()
            this.announceBookmarks()

            if (typeof this.pageId !== `undefined`) {
              this.openReader(this.pageId)
            }
          })
          .catch(e => this.errors.push(e))
      }
    },
    openReader(startPage) {
      this.$emit(EVENTS.openReader, this.getReaderData(startPage))
    },
    resetLoadedIssue() {
      this.dismissBookmarks()
    }
  },
  mounted() {
    this.loadIssue(this.issueId)
    _scrollToClassWithDefaultOffset(COMPONENT_NAME)
  },
  name: COMPONENT_NAME,
  props: {
    issueId: {
      required: true,
      type: Number
    },
    magazineId: {
      required: true,
      type: String
    },
    pageId: {
      required: false,
      type: String
    }
  },
  updated() {
    _scrollToClassWithDefaultOffset(COMPONENT_NAME)
  },
  watch: {
    // Can't use arrow functions here. See: https://vuejs.org/v2/api/#watch
    // eslint-disable-next-line object-shorthand
    issueId: function (val) {
      this.loadIssue(val)
    }
  }
}
