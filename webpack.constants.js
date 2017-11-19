module.exports = {
  'process.env': {
    NODE_ENV: process.env.NODE_ENV ?
      JSON.stringify(process.env.NODE_ENV) :
      JSON.stringify(`development`)
  }
}
