<template>
  <section
    v-if="payload"
    class="scans__loader">
    <img
      class="scans__loader__image"
      src="img/c64_loader.gif" >
  </section>
</template>

<script src="./loader.js"></script>
