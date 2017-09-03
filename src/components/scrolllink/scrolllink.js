import { scrollToClassWithDefaultOffset } from 'utils/scroll'

export default {
  name: `scroll-link`,
  props: [`anchor`, `target`],
  data() {
    return {
      linkTarget: `content`
    }
  },
  methods: {
    scrollToAnchor() {
      scrollToClassWithDefaultOffset(`${this.linkTarget}__${this.anchor}`)
    }
  },
  mounted() {
    if (typeof this.target !== `undefined`) {
      this.linkTarget = this.target
    }
  }
}
