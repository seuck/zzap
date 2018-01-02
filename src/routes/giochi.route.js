import Games from 'components/games/games.vue'

/*
 * For semantic reasons, please localise both names and routes
 * according to content language.
 */
export default [
  {
    name: `giochi`,
    path: `giochi`,
    components: {
      content: Games
    }
  },
  {
    name: `giochi-query`,
    path: `giochi/:query`,
    components: {
      content: Games
    }
  },
  {
    name: `gioco`,
    path: `gioco/:gameId`,
    components: {
      content: Games,
      followup: (resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require([`components/game/game.vue`], resolve)
      }
    },
    props: {
      followup: true
    }
  }
]
