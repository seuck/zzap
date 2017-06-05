<template>
  <section class="content__section" :class=imageStyle>
    <h3 class="content__title">{{ title }}</h3>
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'content-section',
    props: ['title', 'imageStyle']
  }
</script>