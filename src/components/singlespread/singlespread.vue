<template>
  <content-image
    :align="align"
    :alt-text="altText"
    :caption="caption"
    :image-path="imagePath"
    :reader-data-magazine-id="magazineId"
    :reader-data-issue-id="issueId"
    :reader-data-start-page="startPage"
    :reader-data-return-bookmark="returnBookmark"
    :rotation="rotation"
    @openReader="openReader($event)"
  />
</template>

<script src="./singlespread.js"></script>
