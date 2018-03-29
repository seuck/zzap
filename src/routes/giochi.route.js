import Games from 'components/games/games.vue'

/*
 * For semantic reasons, please localise both names and routes
 * according to content language.
 */
export default [
  {
    components: {
      content: Games
    },
    name: `giochi`,
    path: `giochi`
  },
  {
    components: {
      content: Games
    },
    name: `giochi-query`,
    path: `giochi/:query`
  },
  {
    components: {
      content: Games,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/game/game.vue`], resolve)
      }
    },
    name: `gioco`,
    path: `gioco/:gameId`,
    props: {
      followup: true
    }
  }
]
