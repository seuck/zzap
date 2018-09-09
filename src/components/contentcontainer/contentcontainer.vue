<template>
  <section
    :class="componentClass"
    :data-content-name="title"
    data-track-content>
    <span
      v-if="date"
      class="content__date">{{ date }}</span>
    <h2>{{ title }}<span
      v-if="author"
      class="content__author">di {{ author }}</span></h2>
    <div class="content__container">
      <slot/>
    </div>
  </section>
</template>

<script src="./contentcontainer.js"></script>
