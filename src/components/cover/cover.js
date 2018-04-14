import { pathAssets } from 'constants/paths'

import ScrollLink from 'components/scrolllink/scrolllink.vue'

export default {
  components: {
    ScrollLink
  },
  methods: {
    resolveAssetPath(pathSegment) {
      return `${pathAssets}${pathSegment}`
    }
  }
}
