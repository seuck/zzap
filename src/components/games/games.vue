<template>
  <section class="games game__games">
    <h2>Giochi</h2>

    <p>Cerca tra tutti i giochi recensiti e pubblicizzati sulla rivista.</p>

    <form class="games__search">
      <input
        v-model="gameQuery"
        class="games__searchfield"
        placeholder="Cerca un titolo">
    </form>

    <ul
      v-if="hasResults"
      class="games__results">
      <li
        v-for="game in apiResponse.games"
        :key="game.id"
        class="games__resultsitem">
        <a @click="goToGame(game.id)">{{ game.name }}</a><span
          v-if="game.publisher"
          class="games__publisher">{{ game.publisher.name }}</span>
      </li>
    </ul>
    <p v-if="noResults">Non abbiamo trovato niente!</p>
    <button
      v-if="moreToLoad"
      class="games__more"
      @click="loadMoreResults">Mostra più risultati</button>
    <p v-if="tooManyResults">Ti abbiamo mostrato solo i primi risultati, prova a cercare qualcosa di piú specifico.</p>
  </section>
</template>

<script src="./games.js"></script>
