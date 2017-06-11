import $ from 'jquery';

(() => {
  function initScroll(window, document) {
    const logo = document.querySelector('.header__logo')
    const headerClass = 'header'
    const headerFlavorCompactClass = `${headerClass}--compact`
    const header = document.querySelector(`.${headerClass}`)
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
            header.className = `${headerClass} ${headerFlavorCompactClass}`
            logo.style.transform = `scale(${minScale})`
          } else {
            const speed = limitedWindowWidth / verticalThresholdMax
            const scale = Math.max(minScale, 1 - ((distanceY / 100.0) / speed))
            logo.style.transform = `scale(${scale})`

            header.className = headerClass
          }
        } else {
          logo.style.transform = 'scale(1)'
        }

        requestAnimationFrame(refreshHeader)
      }
    }

    refreshHeader()
  }

  $(document).ready(() => {
    initScroll(window, document)
  })
})()
