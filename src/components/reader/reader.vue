<template>
  <section
    v-if="hasContent"
    :class="getComponentClass()"
    :data-content-piece="title"
    data-track-content
    data-content-name="reader">
    <header class="reader__navigator">
      <h2 class="reader__info">{{ title }}</h2>
      <a
        class="reader__close"
        title="Chiudi (Esc)"
        @click="close">
        <img
          :src="resolveAssetPath(`icons/zoom-out.svg`)"
          class="reader__closeicon">
      </a>
      <nav class="reader__navigation">
        <ol class="reader__navigation-page-container">
          <li
            v-for="(doublepage, index) in pages"
            :class="getNavigationClass(index)"
            :key="index">
            <a @click="actualPage = index">
              <img :src="resolveAssetPath(`icons/paper-page.svg`)">
            </a>
          </li>
        </ol>
      </nav>
    </header>
    <div class="reader__content">
      <div
        v-if="infoPath"
        class="reader__side">
        <img :src="infoPath">
      </div>
      <div class="reader__spreads">
        <a
          v-if="hasPage('first')"
          class="reader__first"
          @click="previousPage">
          <reader-image
            :path="pages[actualPage].first.path"
            :label="pages[actualPage].first.label"
            :label-prefix="labelPrefix"
            :multi="pages.length > 1"/>
        </a>
        <a
          v-if="hasPage('last')"
          class="reader__last"
          @click="nextPage">
          <reader-image
            :path="pages[actualPage].last.path"
            :label="pages[actualPage].last.label"
            :label-prefix="labelPrefix"
            :multi="pages.length > 1"/>
        </a>
      </div>
    </div>
  </section>
</template>

<script src="./reader.js"></script>
