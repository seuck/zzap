import Cover from 'components/cover/cover.vue'
import DynamicNavigation from 'components/dynamicnavigation/dynamicnavigation.vue'
import Index from 'components/index/index.vue'
import Loader from 'components/loader/loader.vue'
import Reader from 'components/reader/reader.vue'
import Scanindex from 'components/scanindex/scanindex.vue'
import ZzapHeader from 'components/zzapheader/zzapheader.vue'
import ZzapFooter from 'components/zzapfooter/zzapfooter.vue'

import { CLASSES as GLOBALCLASSES } from 'constants/classes'
import { scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset } from 'utils/scroll'

const COMPONENT_NAME = `home`

export default {
  name: COMPONENT_NAME,
  components: {
    Cover,
    DynamicNavigation,
    Index,
    Loader,
    Reader,
    Scanindex,
    ZzapHeader,
    ZzapFooter
  },
  data() {
    return {
      readerData: {},
      homeClass: COMPONENT_NAME,
      dynamicNavSections: []
    }
  },
  methods: {
    initReader(readerData) {
      this.readerData = readerData
      this.homeClass = `${COMPONENT_NAME} ${GLOBALCLASSES.overlay}`
    },
    resetReader() {
      const backToPage = this.readerData.startPage * 2

      this.homeClass = COMPONENT_NAME
      this.readerData = {}

      window.setTimeout(() => {
        _scrollToClassWithDefaultOffset(`scanissue__${backToPage}`)
      }, 500)
    },
    addDynamicNavSection(sections) {
      sections.forEach((section) => {
        this.dynamicNavSections.push(section)
      })
    },
    removeDynamicNavSection(sections) {
      for (let i = this.dynamicNavSections.length - 1; i >= 0; i--) {
        if (sections.indexOf(this.dynamicNavSections[i].anchor) !== -1) {
          this.dynamicNavSections.splice(i, 1)
        }
      }
    }
  }
}
