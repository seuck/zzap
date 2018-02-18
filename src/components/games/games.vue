<template>
  <section class="games game__games">
    <h2>Giochi</h2>

    <p>Cerca tra tutti i giochi recensiti e pubblicizzati sulla rivista.</p>

    <form class="games__search">
      <input class="games__searchfield" v-model="gameQuery" placeholder="Cerca un titolo">
    </form>

    <ul class="games__results" v-if="hasResults">
      <li class="games__resultsitem" v-for="game in apiResponse.games">
        <a @click="goToGame(game.id)">{{game.name}}</a><span class="games__publisher" v-if="game.publisher">{{game.publisher.name}}</span>
      </li>
    </ul>
    <p v-if="noResults">Non abbiamo trovato niente!</p>
    <button class="games__more" v-if="moreToLoad" @click="loadMoreResults">Mostra più risultati</button>
    <p v-if="tooManyResults">Ti abbiamo mostrato solo i primi risultati, prova a cercare qualcosa di piú specifico.</p>
  </section>
</template>

<script src="./games.js"></script>