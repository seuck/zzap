export default {
  name: `reader-image`,
  props: {
    path: ``,
    label: ``,
    labelPrefix: ``
  },
  data() {
    return {
      defaultLabelPrefix: `Pagina`,
      navigationHint: `Premi per sfogliare`
    }
  },
  computed: {
    decoratedLabel() {
      let label

      if (typeof this.label !== `undefined`) {
        if (typeof this.labelPrefix !== `undefined`) {
          label = `${this.labelPrefix}: ${this.label}`
        } else {
          label = `${this.defaultLabelPrefix}: ${this.label}`
        }
      }

      return label
    },
    labelWithNavigationHint() {
      let labelWithNavigationHint = ``

      if (typeof this.label !== `undefined`) {
        labelWithNavigationHint = `${this.decoratedLabel} - ${this.navigationHint}`
      }

      return labelWithNavigationHint
    }
  }
}
