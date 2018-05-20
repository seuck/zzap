<template>
  <section
    :class="componentClass"
    :data-content-name="title"
    data-track-content>
    <span
      v-if="date"
      class="content__date">{{ date }}</span>
    <h2>{{ title }}</h2>
    <div class="content__container">
      <slot/>
    </div>
  </section>
</template>

<script src="./contentcontainer.js"></script>
