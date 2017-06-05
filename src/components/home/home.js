import Zzapheader from '../zzapheader/zzapheader.vue';
import Cover from '../cover/cover.vue';
import Index from '../index/index.vue';
import Scans from '../scans/scans.vue';
import ContentContainer from '../contentcontainer.vue';
import ContentSection from '../contentsection.vue';
import Reader from '../reader/reader.vue';
import Loader from '../loader/loader.vue';

export default {
  name: 'home',
  components: { Loader, Zzapheader, Cover, Index, Scans, ContentContainer, ContentSection, Reader }
};
