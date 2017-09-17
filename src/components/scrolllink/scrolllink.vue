<template>
  <a v-if="isScrollOnly" @click="scrollToAnchor"><slot></slot></a>
  <router-link v-else :to="{ name: anchor }" @click.native="scrollToAnchor"><slot></slot></router-link>
</template>

<script src="./scrolllink.js"></script>