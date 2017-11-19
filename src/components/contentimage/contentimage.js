import EVENTS from 'constants/events'
import { getRetinaPath } from 'utils/image'

/**
 * align: left | right
 * rotation: cw, cc
 */

export default {
  name: `content__image`,
  props: [
    `imagePath`, `linkUrl`, `caption`, `align`, `rotation`, `readerData`, `noShadow`, `noSrcset`
  ],
  computed: {
    fullStyle() {
      const styles = []
      const baseStyle = `content__image`
      const noShadowModifier = `no-shadow`

      styles.push(baseStyle)

      if (typeof this.linkUrl !== `undefined` ||
        typeof this.readerData !== `undefined`) {
        styles.push(`${baseStyle}--link`)
      }
      if (typeof this.align !== `undefined`) {
        styles.push(`${baseStyle}--${this.align}`)
      }
      if (typeof this.rotation !== `undefined`) {
        styles.push(`${baseStyle}--${this.rotation}`)
      }
      if (typeof this.noShadow !== `undefined`) {
        styles.push(`${baseStyle}--${noShadowModifier}`)
      }

      return styles.join(` `)
    },
    srcset() {
      if (typeof this.noSrcset !== `undefined`) {
        return ``
      }

      return getRetinaPath(this.imagePath)
    }
  },
  methods: {
    openReader() {
      this.$emit(EVENTS.openReader, this.readerData)
    }
  }
}
