import EVENTS from 'constants/events'
import extend from 'extend'
import basecontent from 'components/content/basecontent'
import { addLeftPadding } from 'utils/text.js'

export default extend(true, {}, basecontent, {
  methods: {
    generatePages() {
      const pages = []

      pages.push({
        last: {
          label: `1`,
          path: `/assets/content/speciali/bovabyte/bva/01.jpg`
        }
      })

      for (let i = 2; i <= 34; i += 2) {
        pages.push({
          first: {
            label: `${i}`,
            path: `/assets/content/speciali/bovabyte/bva/${addLeftPadding(i, `0`, 2)}.jpg`
          },
          last: {
            label: `${i + 1}`,
            path: `/assets/content/speciali/bovabyte/bva/${addLeftPadding(i + 1, `0`, 2)}.jpg`
          }
        })
      }

      pages.push({
        first: {
          label: `36`,
          path: `/assets/content/speciali/bovabyte/bva/36.jpg`
        }
      })

      return pages
    },
    getReaderData() {
      return {
        title: `Antologia di Bovabyte`,
        startPage: 0,
        pages: this.generatePages()
      }
    },
    openReader(readerData) {
      this.$emit(EVENTS.openReader, readerData)
    }
  }
})
