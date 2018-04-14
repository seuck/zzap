import axios from 'axios'
import EVENTS from 'constants/events'
import ANIMATIONS from 'constants/animations'
import { ZZAPI_RESOURCES } from 'api/zzapi'
import {
  scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset
} from 'utils/scroll'

const COMPONENT_NAME = `games`
const INITIAL_RESULTS_NUMBER = 15

export default {
  beforeDestroy() {
    this.$emit(EVENTS.dismissBookmark, [COMPONENT_NAME])
  },
  computed: {
    hasResults() {
      return typeof this.apiResponse.totalEntries !== `undefined` &&
        this.apiResponse.totalEntries > 0
    },
    moreToLoad() {
      return typeof this.apiResponse.totalEntries !== `undefined` &&
        this.apiResponse.games.length <= INITIAL_RESULTS_NUMBER &&
        this.apiResponse.games.length < this.apiResponse.totalEntries
    },
    noResults() {
      return typeof this.apiResponse.totalEntries !== `undefined` &&
        this.apiResponse.totalEntries === 0
    },
    tooManyResults() {
      return typeof this.apiResponse.totalEntries !== `undefined` &&
        this.apiResponse.totalEntries > this.apiResponse.games.length && !this.moreToLoad
    }
  },
  data() {
    return {
      apiResponse: {},
      errors: [],
      gameQuery: ``
    }
  },
  methods: {
    goToGame(gameId) {
      this.$root.$router.push({
        name: `gioco`,
        params: { gameId }
      },
      _scrollToClassWithDefaultOffset(`game`)
      )
    },
    loadMoreResults() {
      axios.get(ZZAPI_RESOURCES.gameFinderMore(this.gameQuery))
        .then((response) => {
          this.apiResponse.games = this.apiResponse.games.concat(response.data.games)
        })
        .catch(e => this.errors.push(e))
    },
    searchGames(query) {
      if (typeof query !== `undefined` && query.length >= 2) {
        axios.get(ZZAPI_RESOURCES.gameFinder(query))
          .then((response) => {
            this.apiResponse = response.data
          })
          .catch(e => this.errors.push(e))
      }
    }
  },
  mounted() {
    _scrollToClassWithDefaultOffset(COMPONENT_NAME)

    window.setTimeout(() => {
      this.$emit(EVENTS.announceBookmark, [
        {
          anchor: COMPONENT_NAME,
          target: `game`,
          title: `Giochi`
        }
      ])
    }, ANIMATIONS.bookmarkCloseDelay)
  },
  name: COMPONENT_NAME,
  watch: {
    // Can't use arrow functions here. See: https://vuejs.org/v2/api/#watch
    // eslint-disable-next-line object-shorthand
    gameQuery: function (val) {
      this.apiResponse = {}
      this.searchGames(val)
    }
  }
}
