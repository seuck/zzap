/**
 * align: left | right
 * rotation: cw, cc
 */

export default {
  name: `content__image`,
  props: [`imagePath`, `linkUrl`, `caption`, `align`, `rotation`],
  computed: {
    fullStyle() {
      const styles = []
      const baseStyle = `content__image`

      styles.push(baseStyle)

      if (typeof this.linkUrl !== `undefined`) {
        styles.push(`${baseStyle}-link`)
      }
      if (typeof this.align !== `undefined`) {
        styles.push(`${baseStyle}-${this.align}`)
      }

      if (typeof this.rotation !== `undefined`) {
        styles.push(`${baseStyle}-${this.rotation}`)
      }

      return styles.join(` `)
    }
  }
}
