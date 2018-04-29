import ScrollLink from 'components/scrolllink/scrolllink.vue'
import { pathAssets } from 'constants/paths'

const COMPONENT_NAME = `zzap-footer` // A component can't be named as an HTML tag

export default {
  components: {
    ScrollLink
  },
  methods: {
    resolveAssetPath(pathSegment) {
      return `${pathAssets}${pathSegment}`
    }
  },
  name: COMPONENT_NAME
}
