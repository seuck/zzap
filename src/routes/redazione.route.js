import Redazione from 'components/content/redazione/redazione.vue'

/*
 * For semantic reasons, please localise both names and routes
 * according to content language.
 */
export default [
  {
    components: {
      content: Redazione
    },
    name: `redazione`,
    path: `redazione`
  },
  {
    components: {
      content: Redazione,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/content/redazione/pages/maghidelloscanner.vue`], resolve)
      }
    },
    name: `redazione-maghidelloscanner`,
    path: `redazione/maghidelloscanner`
  },
  {
    components: {
      content: Redazione,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/content/redazione/pages/ringraziamenti.vue`], resolve)
      }
    },
    name: `redazione-ringraziamenti`,
    path: `redazione/ringraziamenti`
  },
  {
    components: {
      content: Redazione,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/content/redazione/pages/seuck.vue`], resolve)
      }
    },
    name: `redazione-seuck`,
    path: `redazione/seuck`
  },
  {
    components: {
      content: Redazione,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/content/redazione/pages/darkj.vue`], resolve)
      }
    },
    name: `redazione-darkj`,
    path: `redazione/darkj`
  }
]
