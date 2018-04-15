<template>
  <content-image
    @openReader="openReader($event)"
    :align="align"
    :alt="altText"
    :caption="caption"
    :imagePath="imagePath"
    :readeDataMagazineId="magazineID"
    :readeDataIssueId="issueID"
    :readeDataStartPage="startPage"
    :readeDataReturnBookmark="returnBookmark"
    :rotation="rotation"
  ></content-image>
</template>

<script src="./singlespread.js"></script>