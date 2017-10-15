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
      <nav class="reader__navigation">
        <ol class="reader__navigation-page-container">
          <li :class="navigationClass(index)" v-for="(doublepage, index) in pages">
            <a @click="actualPage = index">
              <img src="assets/icons/paper-page.svg"/>
            </a>
          </li>
        </ol>
      </nav>
    </header>
    <div class="reader__content">
      <a class="reader__first" v-if="hasPage('first')" @click="previousPage">
        <reader-image
          :path="pages[actualPage].first.path"
          :label="pages[actualPage].first.label"/>
      </a>
      <a class="reader__last" v-if="hasPage('last')" @click="nextPage">
        <reader-image
          :path="pages[actualPage].last.path"
          :label="pages[actualPage].last.label"/>
      </a>
    </div>
  </section>
</template>

<script src="./reader.js"></script>
