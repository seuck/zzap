<template>
  <router-link :to="{ name: anchor }" @click.native="scrollToAnchor"><slot></slot></router-link>
</template>

<script src="./scrolllink.js"></script>