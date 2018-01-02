<template>
  <section class="games game__games">
    <h2>Giochi</h2>

    <form class="games__search">
      <input class="games__searchfield" v-model="gameQuery" placeholder="Cerca un titolo">
    </form>

    <ul class="games__results" v-if="results.length > 0">
      <li class="games__resultsitem" v-for="game in results">
        <a @click="goToGame(game.id)">{{game.name}}</a><span class="games__publisher" v-if="game.publisher">{{game.publisher.name}}</span>
      </li>
    </ul>
  </section>
</template>

<script src="./games.js"></script>