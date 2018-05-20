<template>
  <div class="doublespread">
    <content-image
      :alt-text="altText"
      :image-path="firstImagePath"
      :reader-data-magazine-id="magazineId"
      :reader-data-issue-id="issueId"
      :reader-data-start-page="startPage"
      :reader-data-return-bookmark="returnBookmark"
      @openReader="openReader($event)"
    />
    <content-image
      :alt-text="altText"
      :image-path="secondImagePath"
      :reader-data-magazine-id="magazineId"
      :reader-data-issue-id="issueId"
      :reader-data-start-page="secondPage"
      :reader-data-return-bookmark="returnBookmark"
      @openReader="openReader($event)"
    />
  </div>
</template>

<script src="./doublespread.js"></script>
