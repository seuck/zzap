import {
  scrollToClassWithDefaultOffset as _scrollToClassWithDefaultOffset
} from 'utils/scroll'

export default {
  name: 'content-container',
  props: ['title'],
  mounted() {
    _scrollToClassWithDefaultOffset('content')
  }
}
