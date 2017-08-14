/**
 * style: left | right
 */

export default {
  name: 'content-image',
  props: ['path', 'linkUrl', 'caption', 'style'],
  computed: {
    fullStyle() {
      let fullStyle = ''
      const baseStyle = 'content__imagelink'
      if (typeof this.style !== 'undefined') {
        fullStyle = `${baseStyle} ${baseStyle}-${this.style}`
      } else {
        fullStyle = baseStyle
      }
      return fullStyle
    }
  }
}
