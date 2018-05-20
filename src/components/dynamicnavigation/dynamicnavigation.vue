<template>
  <nav
    v-if="sections.length > 0"
    class="dynamicnavigation">
    <ol class="dynamicnavigation__container">
      <li
        v-for="(section, index) in sections"
        :class="getBookmarkClass(section.anchor)"
        :key="index"
        @click="closeBookmark(section.anchor)">
        <scroll-link
          :anchor="section.anchor"
          :target="section.target"
          :is-scroll-only="true">{{ section.title }}</scroll-link>
      </li>
    </ol>
  </nav>
</template>

<script src="./dynamicnavigation.js"></script>
