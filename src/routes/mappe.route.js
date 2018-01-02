import Mappe from 'components/content/mappe/mappe.vue'

/*
 * For semantic reasons, please localise both names and routes
 * according to content language.
 */
export default [
  {
    name: `mappe`,
    path: `mappe`,
    components: {
      content: Mappe
    }
  },
  {
    name: `mappe-citadel`,
    path: `mappe/citadel`,
    components: {
      content: Mappe,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/content/mappe/pages/citadel.vue`], resolve)
      }
    }
  },
  {
    name: `mappe-jackthenipper2`,
    path: `mappe/jackthenipper2`,
    components: {
      content: Mappe,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/content/mappe/pages/jackthenipper2.vue`], resolve)
      }
    }
  }
]
