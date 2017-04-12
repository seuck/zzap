function init() {
  const logo = document.querySelector('.header__logo');
  window.addEventListener('scroll', () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    if (distanceY >= 0) {
      const scale = Math.max(0.3, 1 - ((distanceY / 100.0) / 3.5));
      logo.style.transform = `scale(${scale})`;
    }
  });
}
window.onload = init();
