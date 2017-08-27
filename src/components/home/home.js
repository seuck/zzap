import ZzapHeader from 'components/zzapheader/zzapheader.vue'
import Cover from 'components/cover/cover.vue'
import Index from 'components/index/index.vue'
import Scanindex from 'components/scanindex/scanindex.vue'
import Scanissue from 'components/scanissue/scanissue.vue'
import Reader from 'components/reader/reader.vue'
import Loader from 'components/loader/loader.vue'
import ZzapFooter from 'components/zzapfooter/zzapfooter.vue'

import { CLASSES as GLOBALCLASSES } from 'constants/classes'

const COMPONENT_NAME = `home`

export default {
  name: COMPONENT_NAME,
  components: {
    Cover,
    ZzapFooter,
    Index,
    Loader,
    Reader,
    Scanindex,
    Scanissue,
    ZzapHeader
  },
  data() {
    return {
      readerData: {},
      homeClass: COMPONENT_NAME,
      issueId: ``,
      contentComponent: ``
    }
  },
  methods: {
    initReader(readerData) {
      this.readerData = readerData
      this.homeClass = `${COMPONENT_NAME} ${GLOBALCLASSES.overlay}`
    },
    resetReader() {
      this.readerData = {}
      this.homeClass = COMPONENT_NAME
    },
    initIssue(issueId) {
      this.issueId = issueId
    }
  }
}
