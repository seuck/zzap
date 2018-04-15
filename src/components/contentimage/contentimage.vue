<template>
  <figure :class="fullStyle">
    <a v-if="linkUrl" :href="linkUrl">
      <img :src="imagePath" :srcset="srcset" :alt="captionOrAlt">
    </a>
    <a v-else-if="readerData || readeDataMagazineId" @click="openReader">
      <img :src="imagePath" :srcset="srcset" :alt="captionOrAlt">
    </a>
    <img v-else :src="imagePath" :srcset="srcset" :alt="captionOrAlt">
    <figcaption v-if="caption">{{caption}}</figcaption>
  </figure>
</template>

<script src="./contentimage.js"></script>