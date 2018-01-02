import Speciali from 'components/content/speciali/speciali.vue'

/*
 * For semantic reasons, please localise both names and routes
 * according to content language.
 */
export default [
  {
    name: `speciali`,
    path: `speciali`,
    components: {
      content: Speciali
    }
  },
  {
    name: `speciali-leabbiamovistetutte`,
    path: `speciali/leabbiamovistetutte`,
    components: {
      content: Speciali,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/content/speciali/pages/leabbiamovistetutte.vue`], resolve)
      }
    }
  },
  {
    name: `speciali-konixmultisystem`,
    path: `speciali/konixmultisystem`,
    components: {
      content: Speciali,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/content/speciali/pages/konixmultisystem.vue`], resolve)
      }
    }
  },
  {
    name: `speciali-elitesystems`,
    path: `speciali/elitesystems`,
    components: {
      content: Speciali,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/content/speciali/pages/elitesystems.vue`], resolve)
      }
    }
  },
  {
    name: `speciali-bovabyte`,
    path: `speciali/bovabyte`,
    components: {
      content: Speciali,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/content/speciali/pages/bovabyte.vue`], resolve)
      }
    }
  }
]
