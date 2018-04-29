<template>
  <content-image
    @openReader="openReader($event)"
    :align="align"
    :altText="altText"
    :caption="caption"
    :imagePath="imagePath"
    :readerDataMagazineId="magazineID"
    :readerDataIssueId="issueID"
    :readerDataStartPage="startPage"
    :readerDataReturnBookmark="returnBookmark"
    :rotation="rotation"
  ></content-image>
</template>

<script src="./singlespread.js"></script>