import ZzapHeader from 'components/zzapheader/zzapheader.vue'
import Cover from 'components/cover/cover.vue'
import Index from 'components/index/index.vue'
import ScanIndex from 'components/scanindex/scanindex.vue'
import ScanIssue from 'components/scanissue/scanissue.vue'
import ContentContainer from 'components/content/contentcontainer/contentcontainer.vue'
import ContentSection from 'components/content/contentsection/contentsection.vue'
import Reader from 'components/reader/reader.vue'
import Loader from 'components/loader/loader.vue'

import { CLASSES as GLOBALCLASSES } from 'constants/classes'

const COMPONENT_NAME = 'home'

export default {
  name: COMPONENT_NAME,
  components: {
    ContentContainer,
    ContentSection,
    Cover,
    Index,
    Loader,
    Reader,
    ScanIndex,
    ScanIssue,
    ZzapHeader
  },
  data() {
    return {
      readerData: {},
      homeClass: COMPONENT_NAME,
      issueId: ''
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
