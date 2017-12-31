import Zzap from 'components/content/zzap/zzap.vue'

export default [
  {
    name: `zzap`,
    path: `zzap`,
    components: {
      content: Zzap
    }
  },
  {
    name: `zzap-retroedicola`,
    path: `zzap/retroedicola`,
    components: {
      content: Zzap,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/content/zzap/pages/retroedicola.vue`], resolve)
      }
    }
  }
]
