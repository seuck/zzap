import axios from 'axios';

export default {
  name: 'scans',
  props: ['magazineId'],
  data() {
    return {
      magazine: {},
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
    getThumbnailPath(issue) {
      return `/img/issue_selector/${this.magazineName}/${issue.sequence}.jpg`;
    }
  },
  mounted() {
    this.getMagazine();
  }
};
