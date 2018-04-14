import extend from 'extend'
import basecontent from 'components/content/basecontent'

export default extend(true, {}, basecontent, {
  methods: {
    getReaderData() {
      return {
        infoPath: this.resolveAssetPath(`mappe/citadel/info.png`),
        labelPrefix: `Citadel, livello`,
        pages: [
          {
            last: {
              label: `1: Alien`,
              path: this.resolveAssetPath(`mappe/citadel/1-Alien.gif`)
            }
          },
          {
            last: {
              label: `2: Armour`,
              path: this.resolveAssetPath(`mappe/citadel/2-Armour.gif`)
            }
          },
          {
            last: {
              label: `3: Brass`,
              path: this.resolveAssetPath(`mappe/citadel/3-Brass.gif`)
            }
          },
          {
            last: {
              label: `4: Chamber`,
              path: this.resolveAssetPath(`mappe/citadel/4-Chamber.gif`)
            }
          },
          {
            last: {
              label: `5: Arena`,
              path: this.resolveAssetPath(`mappe/citadel/5-Arena.gif`)
            }
          },
          {
            last: {
              label: `6: Void`,
              path: this.resolveAssetPath(`mappe/citadel/6-Void.gif`)
            }
          },
          {
            last: {
              label: `7: Hazard`,
              path: this.resolveAssetPath(`mappe/citadel/7-Hazard.gif`)
            }
          },
          {
            last: {
              label: `8: Gothic`,
              path: this.resolveAssetPath(`mappe/citadel/8-Gothic.gif`)
            }
          }
        ],
        returnBookmark: `content__mappe-citadel`,
        startPage: 0,
        title: `Citadel`
      }
    }
  }
})
