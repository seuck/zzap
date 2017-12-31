import Mappe from 'components/content/mappe/mappe.vue'

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
