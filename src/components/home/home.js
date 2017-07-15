import Zzapheader from 'components/zzapheader/zzapheader.vue'
import Cover from 'components/cover/cover.vue'
import Index from 'components/index/index.vue'
import Scans from 'components/scans/scans.vue'
import ContentContainer from 'components/contentcontainer.vue'
import ContentSection from 'components/contentsection.vue'
import Reader from 'components/reader/reader.vue'
import Loader from 'components/loader/loader.vue'

import { CLASSES as GLOBALCLASSES } from 'constants/classes'

const MODULE_NAME = 'home'

export default {
  name: MODULE_NAME,
  components: { Loader, Zzapheader, Cover, Index, Scans, ContentContainer, ContentSection, Reader },
  data() {
    return {
      readerData: {},
      homeClass: MODULE_NAME
    }
  },
  methods: {
    initReader(readerData) {
      this.readerData = readerData
      this.homeClass = `${MODULE_NAME} ${GLOBALCLASSES.overlay}`
    },
    resetReader() {
      this.readerData = {}
      this.homeClass = MODULE_NAME
    }
  }
}
