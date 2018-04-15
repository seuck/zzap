<template>
  <section
    :class="componentClass"
    data-track-content
    :data-content-name="title">
    <span class="content__date" v-if="date">{{date}}</span>
    <h2>{{ title }}</h2>
    <div class="content__container">
      <slot></slot>
    </div>
  </section>
</template>

<script src="./contentcontainer.js"></script>