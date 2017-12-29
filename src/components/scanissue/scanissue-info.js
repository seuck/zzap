const COMPONENT_NAME = `scanissue-info`

export default {
  name: COMPONENT_NAME,
  props: [
    `issueNumber`,
    `issueMonth`,
    `issueYear`,
    `issueEditor`,
    `contributors`,
    `pdf`],
  methods: {
    buildContributorPath(contributorId) {
      return `redazione/${contributorId}`
    }
  }
}
