import Home from 'components/home/home.vue'
import Scanissue from 'components/scanissue/scanissue.vue'
import Diari from 'components/content/diari/diari.vue'
import Speciali from 'components/content/speciali/speciali.vue'
import Zzap from 'components/content/zzap/zzap.vue'
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
      },
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
  },
  {
    path: `*`,
    component: NotFoundComponent
  }
]

export {
  routes
}
