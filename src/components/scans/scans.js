import axios from 'axios';

export default {
  name: 'scans',
  data() {
    return {
      magazine: {},
      errors: []
    };
  },
  methods: {
    getMagazine() {
      axios.get('api/v1/magazine/1')
      .then((response) => {
        this.magazine = response.data;
      })
      .catch(e => this.errors.push(e));
    }
  },
  mounted() {
    this.getMagazine();
  }
};
