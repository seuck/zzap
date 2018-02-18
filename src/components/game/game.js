import axios from 'axios'
import ContentImage from 'components/contentimage/contentimage.vue'
import EVENTS from 'constants/events'
import ANIMATIONS from 'constants/animations'
import { ZZAPI_RESOURCES } from 'api/zzapi'
import {
  scanBasePath,
  thumbBasePath
} from 'constants/paths'
import {
  scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset
} from 'utils/scroll'

const COMPONENT_NAME = `game`

export default {
  name: COMPONENT_NAME,
  props: [`gameId`],
  components: {
    ContentImage
  },
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
            this.dismissBookmarks()
            this.game = response.data
            this.announceBookmarks()
          })
          .catch(e => this.errors.push(e))
      }
    },
    buildPageScanPath(imagePath) {
      return `${scanBasePath}${imagePath}`
    },
    buildPageThumbPath(imagePath, xFactor = ``) {
      return `${thumbBasePath}${imagePath} ${xFactor}`
    },
    advImageDescription() {
      return `Publicità di ${this.game.name}`
    },
    reviewImageDescription() {
      return `Recensione di ${this.game.name}`
    },
    announceBookmarks() {
      // Gives time to destroyed pages to close their bookmarks
      window.setTimeout(() => {
        this.$emit(EVENTS.announceBookmark, [
          {
            title: this.game.name,
            anchor: COMPONENT_NAME,
            target: `game`
          }
        ])
      }, ANIMATIONS.bookmarkCloseDelay)
    },
    dismissBookmarks() {
      this.$emit(EVENTS.dismissBookmark, [COMPONENT_NAME])
    },
    getAdvData() {
      return {
        title: `Publicità - ${this.game.name}`,
        startPage: 0,
        returnBookmark: `${COMPONENT_NAME}__game`,
        pages: [
          {
            first: {
              label: `Publicità`,
              path: this.buildPageScanPath(this.game.adverts[0].page.scan.path)
            }
          }
        ]
      }
    },
    openReader(readerData) {
      this.$emit(EVENTS.openReader, readerData)
    }
  },
  mounted() {
    this.loadGame(this.gameId)
    _scrollToClassWithDefaultOffset(COMPONENT_NAME)
  },
  beforeDestroy() {
    this.dismissBookmarks()
  }
}
