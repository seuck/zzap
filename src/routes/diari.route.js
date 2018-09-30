import Diari from 'components/content/diari/diari.vue'

/*
 * For semantic reasons, please localise both names and routes
 * according to content language.
 */
export default [
  {
    components: {
      content: Diari
    },
    name: `diari`,
    path: `diari`
  },
  {
    components: {
      content: Diari,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/content/diari/pages/zzap.vue`], resolve)
      }
    },
    name: `diari-zzap`,
    path: `diari/zzap`
  },
  {
    components: {
      content: Diari,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/content/diari/pages/john-parker-retrospecs.vue`], resolve)
      }
    },
    name: `diari-johnparkerretrospecs`,
    path: `diari/john-parker-retrospecs`
  },
  {
    components: {
      content: Diari,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/content/diari/pages/simone-bevilacqua-retream.vue`], resolve)
      }
    },
    name: `diari-simonebevilacquaretream`,
    path: `diari/simone-bevilacqua-retream`
  }
]
