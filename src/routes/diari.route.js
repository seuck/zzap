import Diari from 'components/content/diari/diari.vue'

export default [
  {
    name: `diari`,
    path: `diari`,
    components: {
      content: Diari
    }
  },
  {
    name: `diari-zzap`,
    path: `diari/zzap`,
    components: {
      content: Diari,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/content/diari/pages/zzap.vue`], resolve)
      }
    }
  }
]
