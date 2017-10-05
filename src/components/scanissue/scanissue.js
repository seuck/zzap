import axios from 'axios'
import EVENTS from 'constants/events'
import ANIMATIONS from 'constants/animations'
import { isEmptyObject } from 'utils/object'
import { ENTITIES as ZZAPI } from 'api/zzapi'
import * as i18n from 'locales/localedate'
import { scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset } from 'utils/scroll'

const COMPONENT_NAME = `scanissue`

export default {
  name: COMPONENT_NAME,
  props: [`magazineId`, `issueId`],
  data() {
    return {
      issue: {},
      readerData: {},
      doublePagesCache: [],
      errors: [],
      specialBookmarks: {
        cover: `cover`,
        backcover: `backcover`
      }
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
    }
  },
  methods: {
    loadIssue(issueId) {
      if (issueId !== ``) {
        axios.get(ZZAPI.issue(this.magazineId, this.issueId))
          .then((response) => {
            this.issue = response.data
            this.announceBookmarks()
          })
          .catch(e => this.errors.push(e))
      }
    },
    buildPageThumbPath(pageNumber) {
      const normalisedNumber = this.addLeftPadding(pageNumber, `0`, 2)

      return `/img/thumbs/zzap/${this.issue.id}/${normalisedNumber}.jpg`
    },
    buildScanPath(pageNumber) {
      const normalisedNumber = this.addLeftPadding(pageNumber, `0`, 2)

      return `/zzap/${this.issue.id}/${normalisedNumber}.jpg`
    },
    buildContributorPath(contributorId) {
      return `/contributor/${contributorId}`
    },
    addLeftPadding(text, paddingChar, maxLength) {
      let paddedText = text.toString()

      while (paddedText.length < maxLength) {
        paddedText = `${paddingChar}${paddedText}`
      }

      return paddedText
    },
    getMonth(monthNumber) {
      return i18n.MONTHS.it[monthNumber]
    },
    getReaderData(startPage) {
      if (isEmptyObject(this.readerData)) {
        const data = {}
        const formattedDate = `${this.getMonth(this.issue.month)} ${this.issue.year}`

        data.title = `${this.issue.magazine.name} numero ${this.issue.sequence} - ${formattedDate}`
        data.pages = []

        // Cover
        data.pages.push(this.buildDoublePageForReader(
          undefined,
          this.issue.volumes[0].pages[0].label)
        )

        // Spreads
        this.doublePages.forEach(function (page) {
          data.pages.push(this.buildDoublePageForReader(
            this.issue.volumes[0].pages[+page].label,
            this.issue.volumes[0].pages[+page + 1].label
          ))
        }, this)

        // Back cover
        data.pages.push(this.buildDoublePageForReader(
          this.issue.volumes[0].pages[this.issue.volumes[0].pages.length - 1].label,
          undefined
        ))

        this.readerData = data
      }
      this.readerData.startPage = Math.floor(+startPage / 2)

      return this.readerData
    },
    buildDoublePageForReader(first, last) {
      const doublePage = {}

      if (typeof first !== `undefined`) {
        doublePage.first = {
          label: first,
          path: this.buildScanPath(first)
        }
      }
      if (typeof last !== `undefined`) {
        doublePage.last = {
          label: last,
          path: this.buildScanPath(last)
        }
      }

      return doublePage
    },
    openReader(startPage) {
      this.$emit(EVENTS.openReader, this.getReaderData(startPage))
    },
    getContentClass(pageData) {
      const baseClass = `page`
      const classes = [baseClass]

      if (pageData.content.length > 0) {
        pageData.content.forEach((content) => {
          classes.push(`content-type-${content.content_type_id}`)
        })
      }

      return classes.map(cls => `${COMPONENT_NAME}__${cls}`).join(` `)
    },
    getBookmarks() {
      const bookmarks = [{
        title: i18n.CONTENT_TYPES.it[0],
        anchor: this.specialBookmarks.cover,
        target: COMPONENT_NAME
      }]

      this.issue.volumes[0].pages.forEach((page) => {
        page.content.forEach((content) => {
          bookmarks.push({
            title: i18n.CONTENT_TYPES.it[content.content_type_id],
            anchor: `content-type-${content.content_type_id}`,
            target: COMPONENT_NAME
          })
        })
      })

      bookmarks.push({
        title: i18n.CONTENT_TYPES.it[i18n.CONTENT_TYPES.it.length - 1],
        anchor: this.specialBookmarks.backcover,
        target: COMPONENT_NAME
      })

      return bookmarks
    },
    announceBookmarks() {
      // Gives time to destroyed pages to close their bookmarks
      window.setTimeout(() => {
        this.$emit(EVENTS.announceBookmark, this.getBookmarks())
      }, ANIMATIONS.bookmarkCloseDelay)
    }
  },
  updated() {
    _scrollToClassWithDefaultOffset(COMPONENT_NAME)
  },
  mounted() {
    this.loadIssue(this.issueId)
    _scrollToClassWithDefaultOffset(COMPONENT_NAME)
  },
  beforeDestroy() {
    this.$emit(EVENTS.dismissBookmark, [
      `cover`,
      `content-type-1`
    ])
  }
}
