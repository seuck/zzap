<template>
  <section v-if="hasContent"class="reader">
    <div class="reader__navigator">
      <span class="reader__info">{{title}}</span>
      <a class="reader__close" title="Chiudi (Esc)"><img src="/img/icons/24-zoom-out.png"/></a>
    </div>
    <div class="reader__content">
      <a v-if="pages[actualPage].first" @click="this.actualPage = this.actualPage - 1"><img class="reader__left" :src="pages[actualPage].first.path"/></a>
      <a v-if="pages[actualPage].second" @click="this.actualPage = this.actualPage + 1"><img class="reader__right" :src="pages[actualPage].second.path"/></a>
    </div>
  </section>
</template>

<script src="./reader.js"></script>
