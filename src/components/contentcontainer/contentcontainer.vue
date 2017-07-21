<template>
  <section :class="componentClass">
    <h2>{{ title }}</h2>
    <div class="content__container">
      <slot></slot>
    </div>
  </section>
</template>

<script src="./contentcontainer.js"></script>