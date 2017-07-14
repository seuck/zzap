<template>
  <section class="reader" v-if="hasContent">
    <header class="reader__navigator">
      <h2 class="reader__info">{{title}}</h2>
      <a class="reader__close" title="Chiudi (Esc)" @click="close"><img src="/img/icons/24-zoom-out.png"/></a>
    </header>
    <div class="reader__content">
      <a v-if="_pages[actualPage].first" @click="nextPage">
        <img class="reader__left" :src="_pages[actualPage].first.path"/>
      </a>
      <a v-if="_pages[actualPage].last" @click="previousPage">
        <img class="reader__right" :src="_pages[actualPage].last.path"/>
      </a>
    </div>
  </section>
</template>

<script src="./reader.js"></script>
