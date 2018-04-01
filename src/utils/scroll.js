const SCROLL_BEHAVIOR = `smooth`
const JUMP_BEHAVIOR = `auto`
const CONTENT_OFFSET = 55

/**
 * @param {string} className
 * @param {object} [options]
 * @param {string} [options.behavior] `auto`|`smooth`
 * @param {number} [options.offset]
 */
export function scrollToClassWithOptions(className, options = {}) {
  // eslint-disable-next-line no-console
  console.log(`Scroll to: ${className}`)

  const element = document.querySelector(`.${className}`)

  if (element !== null) {
    if (typeof options.offset !== `undefined`) {
      window.scroll({
        behavior: options.behavior,
        left: 0,
        top: element.offsetTop - options.offset
      })
    } else {
      element.scrollIntoView(options)
    }
  }
}

export function scrollToClassWithDefaultOffset(className) {
  scrollToClassWithOptions(className, {
    behavior: SCROLL_BEHAVIOR,
    offset: CONTENT_OFFSET
  })
}

export function jumpToClass(className) {
  scrollToClassWithOptions(className, {
    behavior: JUMP_BEHAVIOR,
    offset: CONTENT_OFFSET
  })
}
