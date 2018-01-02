import Zzap from 'components/content/zzap/zzap.vue'

/*
 * For semantic reasons, please localise both names and routes
 * according to content language.
 */
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
