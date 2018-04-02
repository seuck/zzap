import extend from 'extend'
import basecontent from 'components/content/basecontent'
import axios from 'axios'
import { ZZAPI_RESOURCES } from 'api/zzapi'
import { scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset } from 'utils/scroll'

const COMPONENT_NAME = `maghidelloscanner`

export default extend(true, {}, basecontent, {
  data() {
    return {
      errors: [],
      scanAuthors: {}
    }
  },
  methods: {
    loadScanAuthors(issueId) {
      if (issueId !== ``) {
        axios.get(ZZAPI_RESOURCES.scanauthor())
          .then((response) => {
            this.scanAuthors = response.data
          })
          .catch(e => this.errors.push(e))
      }
    },
    scanItemClosing(scanAuthor) {
      if (scanAuthor) {
        if (scanAuthor.volumes_count > 1) {
          return `volumi scansiti`
        }

        return `volume scansito`
      }

      return ``
    }
  },
  mounted() {
    this.loadScanAuthors(this.issueId)
    _scrollToClassWithDefaultOffset(COMPONENT_NAME)
  }
})
