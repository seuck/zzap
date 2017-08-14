<template>
  <a :class="fullStyle" :href="linkUrl">
    <figure>
      <img class="content__image" :src="path">
      <figcaption v-if="caption">{{caption}}</figcaption>
    </figure>
  </a>
</template>

<script src="./contentimage.js"></script>