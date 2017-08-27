import {
  scrollToClass as _scrollToClass,
  scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset
} from 'utils/scroll'

const COMPONENT_NAME = `zzap-header` // A component can't be named as an HTML tag
const COMPONENT_CLASS = `header`

export default {
  name: COMPONENT_NAME,
  methods: {
    scrollToClass(className) {
      _scrollToClass(className)
    },
    scrollToClassWithDefaultOffset(className) {
      _scrollToClassWithDefaultOffset(className)
    },
    initScroll() {
      const logo = document.querySelector(`.${COMPONENT_CLASS}__logo`)
      const headerFlavorCompactClass = `${COMPONENT_CLASS}--compact`
      const header = document.querySelector(`.${COMPONENT_CLASS}`)
      const minScale = 0.3
      const windowWidthMaxSize = 900
      const verticalThresholdMax = 250
      let lastYOffset = -1
      let lastWindowWidth = -1

      function refreshHeader() {
        const windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

        if (lastYOffset === window.pageYOffset && lastWindowWidth === windowWidth) {
          requestAnimationFrame(refreshHeader)
        } else {
          lastYOffset = window.pageYOffset
          lastWindowWidth = windowWidth

          const distanceY = window.pageYOffset || document.documentElement.scrollTop

          if (distanceY >= 0) {
            const limitedWindowWidth = Math.min(windowWidth, windowWidthMaxSize)
            const actualThreshold = (verticalThresholdMax / windowWidthMaxSize) * limitedWindowWidth

            if (distanceY > actualThreshold) {
              header.className = `${COMPONENT_CLASS} ${headerFlavorCompactClass}`
              logo.style.transform = `scale(${minScale})`
            } else {
              const speed = limitedWindowWidth / verticalThresholdMax
              const scale = Math.max(minScale, 1 - ((distanceY / 100.0) / speed))

              logo.style.transform = `scale(${scale})`

              header.className = COMPONENT_CLASS
            }
          } else {
            logo.style.transform = `scale(1)`
          }

          requestAnimationFrame(refreshHeader)
        }
      }

      refreshHeader()
    }
  },
  mounted() {
    this.initScroll()
  }
}
