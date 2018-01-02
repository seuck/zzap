/*
 * For semantic reasons, please localise both names and routes
 * according to content language.
 */
export default [
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
