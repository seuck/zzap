<template>
  <section class="content__section">
    <span
      v-if="date"
      class="content__date">{{ date }}</span>
    <h3
      v-if="title"
      class="content__title">{{ title }}</h3>
    <slot/>
  </section>
</template>

<script src="./contentsection.js"></script>
