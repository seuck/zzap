<template>
  <figure :class="fullStyle">
    <a v-if="linkUrl" :href="linkUrl">
      <img :src="imagePath" :srcset="srcset">
    </a>
    <a v-else-if="readerData" @click="openReader">
      <img :src="imagePath" :srcset="srcset">
    </a>
    <img v-else :src="imagePath" :srcset="srcset">
    <figcaption v-if="caption">{{caption}}</figcaption>
  </figure>
</template>

<script src="./contentimage.js"></script>