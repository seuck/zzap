<template>
  <div class="doublespread">
    <content-image
      :altText="altText"
      @openReader="openReader($event)"
      :imagePath="firstImagePath"
      :readerDataMagazineId="magazineID"
      :readerDataIssueId="issueID"
      :readerDataStartPage="startPage"
      :readerDataReturnBookmark="returnBookmark"
    ></content-image>
    <content-image
      :altText="altText"
      @openReader="openReader($event)"
      :imagePath="secondImagePath"
      :readerDataMagazineId="magazineID"
      :readerDataIssueId="issueID"
      :readerDataStartPage="secondPage"
      :readerDataReturnBookmark="returnBookmark"
    ></content-image>
  </div>
</template>

<script src="./doublespread.js"></script>