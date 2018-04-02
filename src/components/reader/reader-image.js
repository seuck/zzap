export default {
  computed: {
    decoratedLabel() {
      let label

      if (typeof this.label !== `undefined`) {
        if (typeof this.labelPrefix !== `undefined`) {
          label = `${this.labelPrefix} ${this.label}`
        } else {
          label = `${this.label}`
        }
      }

      return label
    },
    labelWithNavigationHint() {
      let labelWithNavigationHint = ``

      if (typeof this.label !== `undefined`) {
        labelWithNavigationHint = `${this.decoratedLabel}`

        if (this.multi) {
          labelWithNavigationHint = `${labelWithNavigationHint} - ${this.navigationHint}`
        }
      }

      return labelWithNavigationHint
    }
  },
  data() {
    return {
      navigationHint: `Premi per sfogliare`
    }
  },
  name: `reader-image`,
  props: {
    label: ``,
    labelPrefix: ``,
    multi: false,
    path: ``
  }
}
