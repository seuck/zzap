const SCROLL_BEHAVIOUR = 'smooth'
const DEFAULT_OFFSET = 55

function scrollToClass(className, offset) {
  const element = document.querySelector(`.${className}`)
  if (typeof offset !== 'undefined') {
    window.scroll({
      top: element.offsetTop - offset,
      left: 0,
      behavior: SCROLL_BEHAVIOUR
    })
  } else {
    element.scrollIntoView({
      behavior: SCROLL_BEHAVIOUR
    })
  }
}

function scrollToClassWithDefaultOffset(className) {
  scrollToClass(className, DEFAULT_OFFSET)
}

export {
  scrollToClass,
  scrollToClassWithDefaultOffset
}
