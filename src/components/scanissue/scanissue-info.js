import { pathAssets } from 'constants/paths'

const COMPONENT_NAME = `scanissue-info`

export default {
  methods: {
    buildContributorPath(contributorId) {
      return `redazione/${contributorId}`
    },
    resolveAssetPath(pathSegment) {
      return `${pathAssets}${pathSegment}`
    }
  },
  name: COMPONENT_NAME,
  props: [
    `issueNumber`,
    `issueMonth`,
    `issueYear`,
    `issueEditor`,
    `contributors`,
    `pdf`]
}
