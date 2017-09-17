<template>
  <nav v-if="sections.length > 0" class="dynamicnavigation">
    <ol class="dynamicnavigation__container">
      <li class="dynamicnavigation__bookmark" v-for="section in sections">
        <scroll-link
          :anchor="section.anchor"
          :is-scroll-only="true">{{section.title}}</scroll-link>
      </li>
    </ol>
  </nav>
</template>

<script src="./dynamicnavigation.js"></script>