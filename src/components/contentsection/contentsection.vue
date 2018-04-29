<template>
  <section class="content__section">
    <span class="content__date" v-if="date">{{date}}</span>
    <h3 v-if="title" class="content__title">{{ title }}</h3>
    <slot></slot>
  </section>
</template>

<script src="./contentsection.js"></script>