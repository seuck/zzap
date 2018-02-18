import axios from 'axios'
import EVENTS from 'constants/events'
import ANIMATIONS from 'constants/animations'
import ScanissueInfo from 'components/scanissue/scanissue-info.vue'
import * as I18N from 'locales/localedate'
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
  name: COMPONENT_NAME,
  props: [`magazineId`, `issueId`],
  components: {
    ScanissueInfo
  },
  data() {
    return {
      issue: {},
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
    anchors() {
      return this.bookmarks.map(bookmark => bookmark.anchor)
    }
  },
  methods: {
    resetLoadedIssue() {
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
    getDoublePages() {
      return doublePages(this.issue)
    },
    buildPageThumbPath(imagePath) {
      return buildPageThumbPath(imagePath)
    },
    buildScanPath(imagePath) {
      return buildScanPath(imagePath)
    },
    getMonthNameFromNumber(monthNumber) {
      return getMonthNameFromNumber(monthNumber)
    },
    getReaderData(startPage) {
      const readerData = buildIssueReaderData(
        this.issue, startPage, `${COMPONENT_NAME}__${startPage}`
      )

      return readerData
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
