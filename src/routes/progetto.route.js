import Progetto from 'components/content/progetto/progetto.vue'

/*
 * For semantic reasons, please localise both names and routes
 * according to content language.
 */
export default [
  {
    components: {
      content: Progetto
    },
    name: `progetto`,
    path: `progetto`
  },
  {
    components: {
      content: Progetto,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/content/progetto/pages/notelegali.vue`], resolve)
      }
    },
    name: `progetto-notelegali`,
    path: `progetto/note-legali`
  }
]
