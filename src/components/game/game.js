import axios from 'axios'
import { ZZAPI_RESOURCES } from 'api/zzapi'
import {
  // scanBasePath,
  thumbBasePath
} from 'constants/paths'
import {
  scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset
} from 'utils/scroll'

const COMPONENT_NAME = `game`

export default {
  name: COMPONENT_NAME,
  props: [`gameId`],
  data() {
    return {
      game: {},
      errors: []
    }
  },
  watch: {
    // Can't use arrow functions here. See: https://vuejs.org/v2/api/#watch
    // eslint-disable-next-line object-shorthand
    gameId: function (val) {
      this.loadGame(val)
    }
  },
  methods: {
    loadGame(gameId) {
      if (gameId !== ``) {
        axios.get(ZZAPI_RESOURCES.game(this.gameId))
          .then((response) => {
            this.game = response.data
          })
          .catch(e => this.errors.push(e))
      }
    },
    buildPageThumbPath(imagePath, xFactor = ``) {
      return `${thumbBasePath}${imagePath} ${xFactor}`
    }
  },
  mounted() {
    this.loadGame(this.gameId)
    _scrollToClassWithDefaultOffset(COMPONENT_NAME)
  }
}
