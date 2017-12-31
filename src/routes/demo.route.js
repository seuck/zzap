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
