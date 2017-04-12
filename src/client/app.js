function init() {
  const logo = document.querySelector('.header__logo');
  const navigation = document.querySelector('.header__navigation');
  window.addEventListener('scroll', () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    if (distanceY >= 0) {
      const scale = Math.max(0.3, 1 - ((distanceY / 100.0) / 3.5));
      logo.style.transform = `scale(${scale})`;

      if (distanceY > 250) {
        navigation.className = 'header__navigation visible';
      } else {
        navigation.className = 'header__navigation';
      }
    }
  });
}
window.onload = init();
