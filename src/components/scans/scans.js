import axios from 'axios';

export default {
  name: 'scans',
  props: ['magazineId'],
  data() {
    return {
      magazine: {},
      issue: {},
      errors: []
    };
  },
  computed: {
    magazineName() {
      return this.magazine.name.replace(/[^a-z0-9]/gi, '').toLowerCase();
    },
    issues() {
      if (typeof this.magazine !== 'undefined') {
        return this.magazine.issues;
      }
      return [];
    },
    paddingIssues() {
      if (typeof this.issues !== 'undefined') {
        return Array(this.issues[0].month - 1);
      }
      return []
    },
    isIssueSelected() {
      return typeof this.issue.id !== 'undefined';
    }
  },
  methods: {
    getMagazine() {
      axios.get(`api/v1/magazine/${this.magazineId}`)
      .then((response) => {
        this.magazine = response.data;
      })
      .catch(e => this.errors.push(e));
    },
    getIssue(issueId) {
      axios.get(`api/v1/magazine/${this.magazineId}/issue/${issueId}`)
      .then((response) => {
        this.issue = response.data;
      })
      .catch(e => this.errors.push(e));
    },
    buildThumbnailPath(issue) {
      return `/img/issue_selector/${this.magazineName}/${issue.sequence}.jpg`;
    },
    issueSelected(issueId) {
      this.issue = this.getIssue(issueId);
    },
    buildContributorLink(contributorId) {
      return `/contributor/${contributorId}`;
    }
  },
  mounted() {
    this.getMagazine();
  }
};
