import axios from 'axios'
import { EVENTS } from 'constants/events'
import { isEmptyObject } from 'utils/object'
import * as localeDate from 'locales/localedate'

export default {
  name: 'scans',
  props: ['magazineId'],
  data() {
    return {
      magazine: {},
      issue: {},
      errors: [],
      readerData: {},
      doublePagesCache: []
    }
  },
  computed: {
    magazineName() {
      return this.magazine.name.replace(/[^a-z0-9]/gi, '').toLowerCase()
    },
    issues() {
      if (typeof this.magazine !== 'undefined') {
        return this.magazine.issues
      }
      return []
    },
    paddingIssues() {
      if (typeof this.issues !== 'undefined') {
        return Array(this.issues[0].month - 1)
      }
      return []
    },
    isIssueSelected() {
      return this.issue && !isEmptyObject(this.issue)
    },
    doublePages() {
      if (this.doublePagesCache.length === 0) {
        const doublePageArray = []
        if (this.isIssueSelected) {
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
    loadMagazine() {
      axios.get(`api/v1/magazine/${this.magazineId}`)
      .then((response) => {
        this.magazine = response.data
      })
      .catch(e => this.errors.push(e))
    },
    loadIssue(issueId) {
      axios.get(`api/v1/magazine/${this.magazineId}/issue/${issueId}`)
      .then((response) => {
        this.issue = response.data
      })
      .catch(e => this.errors.push(e))
    },
    selectIssue(issueId) {
      this.issue = this.loadIssue(issueId)
    },
    buildCoverThumbPath(issue) {
      return `/img/issue_selector/${this.magazineName}/${issue.sequence}.jpg`
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
        data.startPage = startPage
        data.pages = []

        data.pages.push(this.buildDoublePageForReader(
          undefined,
          this.issue.volumes[0].pages[0].label))
        this.doublePages.forEach(function (page) {
          data.pages.push(this.buildDoublePageForReader(
            this.issue.volumes[0].pages[Number(page)].label,
            this.issue.volumes[0].pages[Number(page) + 1].label
          ))
        }, this)
        data.pages.push(this.buildDoublePageForReader(
          this.issue.volumes[0].pages[this.issue.volumes[0].pages.length - 1].label,
          undefined
        ))

        this.readerData = data
        // eslint-disable-next-line no-console
        console.log(data)
      }
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
  mounted() {
    this.loadMagazine()
  }
}
