import axios from 'axios'
import ContentImage from 'components/contentimage/contentimage.vue'
import EVENTS from 'constants/events'
import ANIMATIONS from 'constants/animations'
import { ZZAPI_RESOURCES } from 'api/zzapi'
import {
  pathScans,
  pathThumbsScan
} from 'constants/paths'
import {
  scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset
} from 'utils/scroll'

const COMPONENT_NAME = `game`

export default {
  beforeDestroy() {
    this.dismissBookmarks()
  },
  components: {
    ContentImage
  },
  data() {
    return {
      errors: [],
      game: {}
    }
  },
  methods: {
    advImageDescription() {
      return `Publicità di ${this.game.name}`
    },
    announceBookmarks() {
      // Gives time to destroyed pages to close their bookmarks
      window.setTimeout(() => {
        this.$emit(EVENTS.announceBookmark, [
          {
            anchor: COMPONENT_NAME,
            target: `game`,
            title: this.game.name
          }
        ])
      }, ANIMATIONS.bookmarkCloseDelay)
    },
    buildPageScanPath(imagePath) {
      return `${pathScans}${imagePath}`
    },
    buildPageThumbPath(imagePath, xFactor = ``) {
      return `${pathThumbsScan}${imagePath} ${xFactor}`
    },
    dismissBookmarks() {
      this.$emit(EVENTS.dismissBookmark, [COMPONENT_NAME])
    },
    getAdvData() {
      return {
        pages: [
          {
            first: {
              label: `Publicità`,
              path: this.buildPageScanPath(this.game.adverts[0].page.scan.path)
            }
          }
        ],
        returnBookmark: `${COMPONENT_NAME}__game`,
        startPage: 0,
        title: `Publicità - ${this.game.name}`
      }
    },
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
    openReader(readerData) {
      this.$emit(EVENTS.openReader, readerData)
    },
    reviewImageDescription() {
      return `Recensione di ${this.game.name}`
    }
  },
  mounted() {
    this.loadGame(this.gameId)
    _scrollToClassWithDefaultOffset(COMPONENT_NAME)
  },
  name: COMPONENT_NAME,
  props: [`gameId`],
  watch: {
    // Can't use arrow functions here. See: https://vuejs.org/v2/api/#watch
    // eslint-disable-next-line object-shorthand
    gameId: function (val) {
      this.loadGame(val)
    }
  }
}
