import Cover from 'components/cover/cover.vue'
import DynamicNavigation from 'components/dynamicnavigation/dynamicnavigation.vue'
import Index from 'components/index/index.vue'
import Loader from 'components/loader/loader.vue'
import Reader from 'components/reader/reader.vue'
import Scanindex from 'components/scanindex/scanindex.vue'
import ZzapHeader from 'components/zzapheader/zzapheader.vue'
import ZzapFooter from 'components/zzapfooter/zzapfooter.vue'

import { CLASSES as GLOBALCLASSES } from 'constants/classes'

const COMPONENT_NAME = `home`

export default {
  components: {
    Cover,
    DynamicNavigation,
    Index,
    Loader,
    Reader,
    Scanindex,
    ZzapFooter,
    ZzapHeader
  },
  data() {
    return {
      dynamicNavSections: [],
      homeClass: COMPONENT_NAME,
      readerData: {}
    }
  },
  methods: {
    addDynamicNavSection(sections) {
      sections.forEach((section) => {
        this.dynamicNavSections.push(section)
      })
    },
    initReader(readerData) {
      this.readerData = readerData
      document.querySelector(`body`).classList.add(GLOBALCLASSES.overlay)
    },
    removeDynamicNavSection(sections) {
      for (let i = this.dynamicNavSections.length - 1; i >= 0; i--) {
        if (sections.indexOf(this.dynamicNavSections[i].anchor) !== -1) {
          this.dynamicNavSections.splice(i, 1)
        }
      }
    },
    resetReader() {
      document.querySelector(`body`).classList.remove(GLOBALCLASSES.overlay)
      this.readerData = {}
    }
  },
  name: COMPONENT_NAME
}
