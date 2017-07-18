import axios from 'axios'
import { EVENTS } from 'constants/events'
import { ENTITIES as ZZAPI } from 'api/zzapi'

export default {
  name: 'scan-index',
  props: ['magazineId'],
  data() {
    return {
      magazine: {},
      errors: []
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
    }
  },
  methods: {
    loadMagazine() {
      axios.get(ZZAPI.magazine(this.magazineId))
      .then((response) => {
        this.magazine = response.data
      })
      .catch(e => this.errors.push(e))
    },
    selectIssue(issueId) {
      this.$emit(EVENTS.selectedIssue, issueId)
    },
    buildCoverThumbPath(issue) {
      return `/img/issue_selector/${this.magazineName}/${issue.sequence}.jpg`
    }
  },
  mounted() {
    this.loadMagazine()
  }
}
