import 'babel-polyfill'; // check if it's needed
import Dog from '../shared/dog';

const browserToby = new Dog('Browser Toby');

document.querySelector('.app').innerText = browserToby.bark();

function init() {
  window.addEventListener('scroll', () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const logo = document.querySelector('.logo');
    if (distanceY > 0) {
      const scale = Math.max(0.3, 1 - (distanceY / 100.0));
      logo.style.transform = `scale(${scale})`;
    }
  });
}
window.onload = init();
