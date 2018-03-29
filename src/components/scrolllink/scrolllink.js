import { scrollToClassWithDefaultOffset } from 'utils/scroll'
import { CLASS_NAME as contentContainerClass } from 'components/contentcontainer/contentcontainer'

export default {
  data() {
    return {
      linkTarget: contentContainerClass
    }
  },
  methods: {
    scrollToAnchor() {
      if (typeof this.anchor !== `undefined`) {
        scrollToClassWithDefaultOffset(`${this.linkTarget}__${this.anchor}`)
      } else {
        scrollToClassWithDefaultOffset(`${this.linkTarget}`)
      }
    }
  },
  mounted() {
    if (typeof this.target !== `undefined`) {
      this.linkTarget = this.target
    }
  },
  name: `scroll-link`,
  props: {
    anchor: {
      required: false,
      type: String
    },
    isScrollOnly: {
      default: false,
      required: false,
      type: Boolean
    },
    target: {
      required: false,
      type: String
    }
  }
}
