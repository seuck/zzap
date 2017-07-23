import axios from 'axios'
import { EVENTS } from 'constants/events'
import { isEmptyObject } from 'utils/object'
import { ENTITIES as ZZAPI } from 'api/zzapi'
import * as localeDate from 'locales/localedate'
import { scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset } from 'utils/scroll'

const COMPONENT_NAME = 'scanissue'

export default {
  name: COMPONENT_NAME,
  props: ['magazineId', 'issueId'],
  data() {
    return {
      issue: {},
      readerData: {},
      doublePagesCache: [],
      errors: []
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
      if (issueId !== '') {
        axios.get(ZZAPI.issue(this.magazineId, this.issueId))
        .then((response) => {
          this.issue = response.data
        })
        .catch(e => this.errors.push(e))
      }
    },
    buildPageThumbPath(pageNumber) {
      const normalisedNumber = this.addLeftPadding(pageNumber, '0', 2)
      return `/img/thumbs/zzap/${this.issue.id}/${normalisedNumber}.jpg`
    },
    buildScanPath(pageNumber) {
      const normalisedNumber = this.addLeftPadding(pageNumber, '0', 2)
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
      return localeDate.MONTHS.it[monthNumber]
    },
    getReaderData(startPage) {
      if (isEmptyObject(this.readerData)) {
        const data = {}
        data.title = `${this.issue.magazine.name} numero ${this.issue.sequence} - ${this.getMonth(this.issue.month)} ${this.issue.year}`
        // eslint-disable-next-line no-console
        console.log(startPage)
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
        // eslint-disable-next-line no-console
        console.log(data)
      }
      this.readerData.startPage = Math.floor(+startPage / 2)
      return this.readerData
    },
    buildDoublePageForReader(first, last) {
      const doublePage = {}
      if (typeof first !== 'undefined') {
        doublePage.first = {
          label: first,
          path: this.buildScanPath(first)
        }
      }
      if (typeof last !== 'undefined') {
        doublePage.last = {
          label: last,
          path: this.buildScanPath(last)
        }
      }
      return doublePage
    },
    openReader(startPage) {
      this.$emit(EVENTS.openReader, this.getReaderData(startPage))
    }
  },
  updated() {
    _scrollToClassWithDefaultOffset(COMPONENT_NAME)
  },
  mounted() {
    this.loadIssue(this.issueId)
    _scrollToClassWithDefaultOffset(COMPONENT_NAME)
  }
}
