import EVENTS from 'constants/events'
import extend from 'extend'
import basecontent from 'components/content/basecontent'
import { addLeftPadding } from 'utils/text.js'

export default extend(true, {}, basecontent, {
  methods: {
    generateReaderPages(basePath, extension, length) {
      const pages = []

      pages.push({
        last: {
          label: `1`,
          path: `${basePath}${addLeftPadding(1, `0`, 2)}${extension}`
        }
      })

      if (length > 2) {
        for (let i = 2; i <= length - 2; i += 2) {
          pages.push({
            first: {
              label: `${i}`,
              path: `${basePath}${addLeftPadding(i, `0`, 2)}${extension}`
            },
            last: {
              label: `${i + 1}`,
              path: `${basePath}${addLeftPadding(i + 1, `0`, 2)}${extension}`
            }
          })
        }
      }

      if (length > 1) {
        pages.push({
          first: {
            label: length,
            path: `${basePath}${addLeftPadding(length, `0`, 2)}${extension}`
          }
        })
      }

      return pages
    },
    getBovaByte2ReaderData(issue) {
      return {
        pages: [
          {
            first: {
              label: `Fronte`,
              path: `assets/content/speciali/bovabyte/bv2/bovabyte2-${issue}-1.jpg`
            },
            last: {
              label: `Retro`,
              path: `assets/content/speciali/bovabyte/bv2/bovabyte2-${issue}-2.jpg`
            }
          }
        ],
        returnBookmark: `content__speciali-bovabyte`,
        startPage: 0,
        title: `BovaByte 2 - Numero ${issue}`
      }
    },
    getReaderData() {
      return {
        pages: this.generateReaderPages(`assets/content/speciali/bovabyte/bva/`, `.jpg`, 36),
        returnBookmark: `content__speciali-bovabyte`,
        startPage: 0,
        title: `Antologia di BovaByte`
      }
    },
    openReader(readerData) {
      this.$emit(EVENTS.openReader, readerData)
    }
  }
})
