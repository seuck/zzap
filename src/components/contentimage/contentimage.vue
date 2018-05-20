<template>
  <figure :class="fullStyle">
    <a
      v-if="linkUrl"
      :href="linkUrl">
      <img
        :class="contentImageClass"
        :src="imagePath"
        :srcset="srcset"
        :alt="captionOrAlt">
    </a>
    <a
      v-else-if="readerData || readerDataMagazineId"
      @click="openReader">
      <img
        :class="contentImageClass"
        :src="imagePath"
        :srcset="srcset"
        :alt="captionOrAlt">
    </a>
    <img
      v-else
      :class="contentImageClass"
      :src="imagePath"
      :srcset="srcset"
      :alt="captionOrAlt">
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script src="./contentimage.js"></script>
