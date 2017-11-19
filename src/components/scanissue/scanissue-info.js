const COMPONENT_NAME = `scanissue-info`

export default {
  name: COMPONENT_NAME,
  props: [
    `issueNumber`,
    `issueMonth`,
    `issueYear`,
    `issueEditor`,
    `contributors`],
  methods: {
    buildContributorPath(contributorId) {
      return `/redazione/${contributorId}`
    }
  }
}
