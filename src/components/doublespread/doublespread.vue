<template>
  <div class="doublespread">
    <content-image
      :alt-text="altText"
      :image-path="firstImagePath"
      :reader-data-magazine-id="magazineId"
      :reader-data-issue-id="issueId"
      :reader-data-start-page="startPage"
      @openReader="openReader($event)"
    />
    <content-image
      :alt-text="altText"
      :image-path="secondImagePath"
      :reader-data-magazine-id="magazineId"
      :reader-data-issue-id="issueId"
      :reader-data-start-page="secondPage"
      @openReader="openReader($event)"
    />
  </div>
</template>

<script src="./doublespread.js"></script>
