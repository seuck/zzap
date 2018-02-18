import EVENTS from 'constants/events'
import { getRetinaPath } from 'utils/image'
import {
  getIssueReaderDataAndOpenReader
} from 'utils/reader'

/**
 * align: left | right
 * rotation: cw, cc
 */

export default {
  name: `content__image`,
  props: [
    `align`,
    `alt`,
    `caption`,
    `extraClass`,
    `imagePath`,
    `linkUrl`,
    `namespace`,
    `noShadow`,
    `noSrcset`,
    `readerData`,
    `readeDataMagazineId`,
    `readeDataIssueId`,
    `readeDataReturnBookmark`,
    `readeDataStartPage`,
    `rotation`
  ],
  computed: {
    fullStyle() {
      const styles = []
      const baseStyle = (typeof this.namespace !== `undefined`)
        ? `${this.namespace}__image` : `content__image`
      const noShadowModifier = `no-shadow`

      styles.push(baseStyle)

      if (typeof this.extraClass !== `undefined`) {
        styles.push(this.extraClass)
      }
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
      if (typeof this.readeDataMagazineId !== `undefined`) {
        getIssueReaderDataAndOpenReader(
          this.readeDataMagazineId,
          this.readeDataIssueId,
          this.readeDataReturnBookmark,
          this.readeDataStartPage
        )
      } else {
        this.$emit(EVENTS.openReader, this.readerData)
      }
    }
  }
}
