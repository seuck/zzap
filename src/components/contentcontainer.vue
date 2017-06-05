<template>
  <section class="content">
    <h2>{{ title }}</h2>
    <div class="content__container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'content-container',
    props: ['title']  
  }
</script>