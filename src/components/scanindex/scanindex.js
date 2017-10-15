import axios from 'axios'
import { ENTITIES as ZZAPI } from 'api/zzapi'
import {
  scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset
} from 'utils/scroll'
import { getRetinaPath } from 'utils/image'

const COMPONENT_NAME = `scanindex`

export default {
  name: COMPONENT_NAME,
  props: [`magazineId`],
  data() {
    return {
      magazine: {},
      errors: []
    }
  },
  computed: {
    magazineName() {
      return this.magazine.name.replace(/[^a-z0-9]/gi, ``).toLowerCase()
    },
    issues() {
      if (typeof this.magazine !== `undefined`) {
        return this.magazine.issues
      }

      return []
    },
    paddingIssues() {
      if (typeof this.issues !== `undefined`) {
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
      this.$root.$router.push({ name: `numero`, params: { issueId } })
      _scrollToClassWithDefaultOffset(`scanissue`)
    },
    buildCoverThumbPath(issue) {
      return `/img/issue_selector/${this.magazineName}/${issue.sequence}.jpg`
    },
    buildRetinaCoverThumbPath(issue) {
      return getRetinaPath(this.buildCoverThumbPath(issue))
    }
  },
  mounted() {
    this.loadMagazine()
  }
}
