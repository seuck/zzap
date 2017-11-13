<template>
  <section :class="componentClass">
    <span class="content__date" v-if="date">{{date}}</span>
    <h2>{{ title }}</h2>
    <div class="content__container">
      <slot></slot>
    </div>
  </section>
</template>

<script src="./contentcontainer.js"></script>