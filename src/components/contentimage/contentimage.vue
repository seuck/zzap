<template>
  <figure :class="fullStyle">
    <a v-if="linkUrl" :href="linkUrl">
      <img :src="imagePath">
    </a>
    <a v-else-if="readerData" @click="openReader">
      <img :src="imagePath">
    </a>
    <img v-else :src="imagePath">
    <figcaption v-if="caption">{{caption}}</figcaption>
  </figure>
</template>

<script src="./contentimage.js"></script>