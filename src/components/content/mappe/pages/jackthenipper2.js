import extend from 'extend'
import basecontent from 'components/content/basecontent'

export default extend(true, {}, basecontent, {
  methods: {
    getReaderData() {
      return {
        infoPath: this.resolveAssetPath(`mappe/jackthenipper2/info.png`),
        pages: [
          {
            first: {
              label: `Map of Jack the Nipper 2 - In cononut capers`,
              path: this.resolveAssetPath(`mappe/jackthenipper2/jack_the_nipper_2_map.gif`)
            }
          }
        ],
        startPage: 0,
        title: `Jack the Nipper 2 - In cononut capers`
      }
    }
  }
})

