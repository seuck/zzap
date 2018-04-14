const COMPONENT_NAME = `scanissue-info`

export default {
  methods: {
    buildContributorPath(contributorId) {
      return `redazione/${contributorId}`
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
