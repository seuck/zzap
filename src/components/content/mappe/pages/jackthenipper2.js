import extend from 'extend'
import basecontent from 'components/content/basecontent'

export default extend(true, {}, basecontent, {
  methods: {
    getReaderData() {
      return {
        infoPath: `assets/content/mappe/jackthenipper2/info.png`,
        pages: [
          {
            first: {
              label: `Map of Jack the Nipper 2 - In cononut capers`,
              path: `assets/content/mappe/jackthenipper2/jack_the_nipper_2_map.gif`
            }
          }
        ],
        returnBookmark: `content__mappe-jackthenipper2`,
        startPage: 0,
        title: `Jack the Nipper 2 - In cononut capers`
      }
    }
  }
})

