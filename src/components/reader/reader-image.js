export default {
  name: `reader-image`,
  props: {
    path: ``,
    label: ``,
    labelPrefix: ``,
    totalPages: ``
  },
  data() {
    return {
      defaultLabelPrefix: `Pagina`,
      navigationHint: `Premi per sfogliare`,
      pageNumberSeparator: `di`
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
      if (typeof this.totalPages !== `undefined`) {
        label = `${label} ${this.pageNumberSeparator} ${this.totalPages}`
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
