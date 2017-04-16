import $ from 'jquery';

(() => {
  function initScroll(window, document) {
    const logo = document.querySelector('.header__logo');
    const navigation = document.querySelector('.header__navigation');
    const minScale = 0.3;
    const windowWidthMaxLogoSize = 900;
    const speedFactor = 250;

    function refreshHeader() {
      const distanceY = window.pageYOffset || document.documentElement.scrollTop;
      const windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      const speed = Math.min(windowWidth, windowWidthMaxLogoSize) / speedFactor;

      if (distanceY >= 0) {
        const scale = Math.max(minScale, 1 - ((distanceY / 100.0) / speed));
        logo.style.transform = `scale(${scale})`;

        if (distanceY > 250) {
          navigation.className = 'header__navigation visible';
        } else {
          navigation.className = 'header__navigation';
        }
      }
    }

    window.addEventListener('scroll', () => {
      refreshHeader();
    });
    refreshHeader();
  }

  $(document).ready(() => {
    initScroll(window, document);
  });
})();
