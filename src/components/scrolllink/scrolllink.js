import { scrollToClassWithDefaultOffset } from 'utils/scroll'
import { CLASS_NAME as contentContainerClass } from 'components/contentcontainer/contentcontainer'

export default {
  name: `scroll-link`,
  props: {
    anchor: {
      type: String,
      required: false
    },
    target: {
      type: String,
      required: false
    },
    isScrollOnly: {
      type: Boolean,
      required: false,
      default: false
    }
  },
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
  }
}
