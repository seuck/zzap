<template>
  <content-image
    :alt="altText"
    @openReader="openReader($event)"
    :imagePath="imagePath"
    :readeDataMagazineId="magazineID"
    :readeDataIssueId="issueID"
    :readeDataStartPage="startPage"
    :readeDataReturnBookmark="returnBookmark"
  ></content-image>
</template>

<script src="./singlespread.js"></script>