import Home from 'components/home/home.vue'
import Scanissue from 'components/scanissue/scanissue.vue'
import Diaries from 'components/content/diaries/diaries.vue'
import Speciali from 'components/content/speciali/speciali.vue'
import Mappe from 'components/content/mappe/mappe.vue'
import NotFoundComponent from 'components/notfoundcomponent/notfoundcomponent.vue'

/*
function buildAsyncCallback(componentSectionName, componentName) {
  // const contentPath = 'components/content'
  const pagesPath = 'pages'

  let componentPath

  if (typeof componentName !== 'undefined') {
    componentPath = `${componentSectionName}/${pagesPath}/${componentName}`
  } else {
    componentPath = `${componentSectionName}/${componentSectionName}`
  }

  return (resolve) => {
    // eslint-disable-next-line import/no-dynamic-require
    require([`components/content/${componentPath}.vue`], resolve)
  }
}
*/

/*
 * For semantic reasons, please localise both names and routes
 * according to content language.
 */
const routes = [
  {
    path: `/`,
    component: Home,
    children: [
      {
        name: `numero`,
        path: `/numero/:issueId`,
        components: {
          issue: Scanissue
        },
        props: {
          issue: true
        }
      },
      {
        name: `diari`,
        path: `diari`,
        components: {
          content: Diaries
        }
      },
      {
        name: `diari-zzap`,
        path: `diari/zzap`,
        components: {
          content: Diaries,
          followup: (resolve) => {
            // eslint-disable-next-line import/no-dynamic-require
            require([`components/content/diaries/pages/zzap.vue`], resolve)
          }
        }
      },
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
        name: `speciali-zzapretroedicola`,
        path: `speciali/zzapretroedicola`,
        components: {
          content: Speciali,
          followup: (resolve) => {
            // eslint-disable-next-line import/no-dynamic-require
            require([`components/content/speciali/pages/zzapretroedicola.vue`], resolve)
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
      },
      {
        name: `mappe`,
        path: `mappe`,
        components: {
          content: Mappe
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
      },
      {
        name: `demo-content-image`,
        path: `demo/content/image`,
        components: {
          content: (resolve) => {
            // eslint-disable-next-line import/no-dynamic-require
            require([`components/demo/content/image.vue`], resolve)
          }
        }
      }
    ]
  },
  {
    path: `*`,
    component: NotFoundComponent
  }
]

export {
  routes
}
