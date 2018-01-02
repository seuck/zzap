<template>
  <section class="game game__game">
    <h2>{{game.name}}</h2>
    <div class="game__content">
      <div class="game__details">
        <p v-if="game.publisher"><span class="game__property">Publisher</span>{{game.publisher.name}}</p>
        <p v-if="game.genres && game.genres.length > 0">
          <span class="game__property">Genere</span><ul class="game__genre">
            <li class="game__genreitem" v-for="genre in game.genres">{{genre.name}}</li>
          </ul>
        </p>
        <p v-if="game.perspective"><span class="game__property">Prospettiva</span>{{game.perspective.name}}</p>
        <p v-if="game.setting"><span class="game__property">Ambientazione</span>{{game.setting.name}}</p>
      </div>
      <img class="game__thumbimage" v-if="game.adverts && game.adverts.length > 0"
        :src="buildPageThumbPath(game.adverts[0].page.scan.path)"
        :srcset="buildPageThumbPath(game.adverts[0].page.scan.path, `2x`)">
    </div>
    <h3>Versioni</h3>
    <ul class="game__versions">
      <li class="game_versionsitem" v-for="version in game.versions">
        <h4>{{version.year}}</h4>
      </li>
    </ul>
  </section>
</template>

<script src="./game.js"></script>