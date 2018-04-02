import extend from 'extend'
import basecontent from 'components/content/basecontent'

export default extend(true, {}, basecontent, {
  methods: {
    getReaderData() {
      return {
        infoPath: `assets/content/mappe/citadel/info.png`,
        labelPrefix: `Citadel, livello`,
        pages: [
          {
            last: {
              label: `1: Alien`,
              path: `assets/content/mappe/citadel/1-Alien.gif`
            }
          },
          {
            last: {
              label: `2: Armour`,
              path: `assets/content/mappe/citadel/2-Armour.gif`
            }
          },
          {
            last: {
              label: `3: Brass`,
              path: `assets/content/mappe/citadel/3-Brass.gif`
            }
          },
          {
            last: {
              label: `4: Chamber`,
              path: `assets/content/mappe/citadel/4-Chamber.gif`
            }
          },
          {
            last: {
              label: `5: Arena`,
              path: `assets/content/mappe/citadel/5-Arena.gif`
            }
          },
          {
            last: {
              label: `6: Void`,
              path: `assets/content/mappe/citadel/6-Void.gif`
            }
          },
          {
            last: {
              label: `7: Hazard`,
              path: `assets/content/mappe/citadel/7-Hazard.gif`
            }
          },
          {
            last: {
              label: `8: Gothic`,
              path: `assets/content/mappe/citadel/8-Gothic.gif`
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
