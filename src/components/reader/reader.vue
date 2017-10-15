<template>
  <section class="reader" v-if="hasContent">
    <header class="reader__navigator">
      <h2 class="reader__info">{{title}}</h2>
      <a
        class="reader__close"
        title="Chiudi (Esc)"
        @click="close">
        <img class="reader__closeicon" src="assets/icons/zoom-out.svg"/>
      </a>
    </header>
    <div class="reader__content">
      <a class="reader__first" v-if="hasPage('first')" @click="previousPage">
        <reader-image
          :path="pages[actualPage].first.path"
          :label="pages[actualPage].first.label"
          :totalPages="lastPageLabel()"/>
      </a>
      <a class="reader__last" v-if="hasPage('last')" @click="nextPage">
        <reader-image
          :path="pages[actualPage].last.path"
          :label="pages[actualPage].last.label"
          :totalPages="lastPageLabel()"/>
      </a>
    </div>
  </section>
</template>

<script src="./reader.js"></script>
