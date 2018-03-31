import axios from 'axios'
import { ZZAPI_RESOURCES } from 'api/zzapi'
import {
  scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset
} from 'utils/scroll'
import { pathThumbsIssueSelector } from 'constants/paths'
import { getRetinaPath } from 'utils/image'

const COMPONENT_NAME = `scanindex`

export default {
  computed: {
    issues() {
      if (typeof this.magazine !== `undefined`) {
        return this.magazine.issues
      }

      return []
    },
    magazineName() {
      return this.magazine.name.replace(/[^a-z0-9]/gi, ``).toLowerCase()
    },
    paddingIssues() {
      if (typeof this.issues !== `undefined`) {
        return Array(this.issues[0].month - 1)
      }

      return []
    }
  },
  data() {
    return {
      errors: [],
      magazine: {}
    }
  },
  methods: {
    buildCoverThumbPath(issue) {
      return `${pathThumbsIssueSelector}${this.magazineName}/${issue.sequence}.jpg`
    },
    buildRetinaCoverThumbPath(issue) {
      return getRetinaPath(this.buildCoverThumbPath(issue))
    },
    getLinkClass(issueId) {
      const baseClass = `scanindex__link`
      const linkClasses = [baseClass]

      if (+this.$route.params.issueId === issueId) {
        linkClasses.push(`${baseClass}--selected`)
      }

      return linkClasses.join(` `)
    },
    loadMagazine() {
      axios.get(ZZAPI_RESOURCES.magazine(this.magazineId))
        .then((response) => {
          this.magazine = response.data
        })
        .catch(e => this.errors.push(e))
    },
    selectIssue(issueId) {
      this.$root.$router.push({ name: `numero`, params: { issueId } })
      _scrollToClassWithDefaultOffset(`scanissue`)
    }
  },
  mounted() {
    this.loadMagazine()
  },
  name: COMPONENT_NAME,
  props: [`magazineId`]
}
