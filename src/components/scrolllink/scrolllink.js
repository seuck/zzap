import { scrollToClassWithDefaultOffset } from 'utils/scroll'
import { CLASS_NAME as contentContainer } from 'components/contentcontainer/contentcontainer'

export default {
  name: `scroll-link`,
  props: {
    anchor: {
      type: String,
      required: true
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
      linkTarget: contentContainer
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
