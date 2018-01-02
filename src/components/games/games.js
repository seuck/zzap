import axios from 'axios'
import { ZZAPI_RESOURCES } from 'api/zzapi'
import {
  scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset
} from 'utils/scroll'

const COMPONENT_NAME = `games`

export default {
  name: COMPONENT_NAME,
  data() {
    return {
      gameQuery: ``,
      results: []
    }
  },
  methods: {
    searchGames(query) {
      if (typeof query !== `undefined` && query.length >= 2) {
        this.results = []
        axios.get(ZZAPI_RESOURCES.gameFinder(query))
          .then((response) => {
            this.results = response.data
          })
          .catch(e => this.errors.push(e))
      }
    },
    goToGame(gameId) {
      this.$root.$router.push({
        name: `gioco`,
        params: { gameId }
      },
      _scrollToClassWithDefaultOffset(`game`)
      )
    }
  },
  watch: {
    // Can't use arrow functions here. See: https://vuejs.org/v2/api/#watch
    // eslint-disable-next-line object-shorthand
    gameQuery: function (val) {
      return this.searchGames(val)
    }
  },
  mounted() {
    _scrollToClassWithDefaultOffset(COMPONENT_NAME)
  }
}
