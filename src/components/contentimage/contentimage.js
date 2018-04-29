import EVENTS from 'constants/events'
import { getRetinaPath } from 'utils/image'
import {
  getIssueReaderDataAndCallCallback
} from 'utils/reader'

export default {
  computed: {
    captionOrAlt() {
      let text = ``

      if (typeof this.altText !== `undefined`) {
        text = this.altText
      }

      if (typeof this.caption !== `undefined`) {
        text = this.caption
      }

      return text
    },
    contentImageClass() {
      // Floating retina images are displayed having double width on Firefox: https://bugzilla.mozilla.org/show_bug.cgi?id=1149357
      if (!this.noSrcset) {
        return `workaround-firefox-retina`
      }

      return ``
    },
    fullStyle() {
      const styles = []
      const baseStyle = (typeof this.namespace !== `undefined`)
        ? `${this.namespace}__image` : `content__image`
      const noShadowModifier = `no-shadow`

      styles.push(baseStyle)

      if (typeof this.extraClass !== `undefined`) {
        styles.push(this.extraClass)
      }
      if (typeof this.linkUrl !== `undefined`) {
        styles.push(`${baseStyle}--link`)
      }
      if (typeof this.readerData !== `undefined` ||
          typeof this.readerDataMagazineId !== `undefined`) {
        styles.push(`${baseStyle}--link-reader`)
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
      if (typeof this.readerDataMagazineId !== `undefined`) {
        getIssueReaderDataAndCallCallback({
          issueId: this.readerDataIssueId,
          magazineId: this.readerDataMagazineId,
          returnBookmark: this.readerDataReturnBookmark,
          startPage: this.readerDataStartPage
        }, (readerData) => {
          this.$emit(EVENTS.openReader, readerData)
        })
      } else {
        this.$emit(EVENTS.openReader, this.readerData)
      }
    }
  },
  name: `content__image`,
  props: {
    align: {
      required: false,
      type: String,
      validator(value) {
        return [`left`, `right`].indexOf(value) !== -1
      }
    },
    altText: {
      required: false,
      type: String
    },
    caption: {
      required: false,
      type: String
    },
    extraClass: {
      required: false,
      type: String
    },
    imagePath: {
      required: true,
      type: String
    },
    linkUrl: {
      required: false,
      type: String
    },
    namespace: {
      required: false,
      type: String
    },
    noShadow: {
      required: false,
      type: Boolean
    },
    noSrcset: {
      required: false,
      type: Boolean
    },
    readerData: {
      required: false,
      type: Object
    },
    readerDataIssueId: {
      required: false,
      type: Number
    },
    readerDataMagazineId: {
      required: false,
      type: Number
    },
    readerDataReturnBookmark: {
      required: false,
      type: String
    },
    readerDataStartPage: {
      required: false,
      type: Number
    },
    rotation: {
      required: false,
      type: String,
      validator(value) {
        return [`cc`, `cw`].indexOf(value) !== -1
      }
    }
  }
}
