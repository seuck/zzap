<template>
  <div class="doublespread">
    <content-image
      :alt="altText"
      @openReader="openReader($event)"
      :imagePath="firstImagePath"
      :readeDataMagazineId="magazineID"
      :readeDataIssueId="issueID"
      :readeDataStartPage="startPage"
      :readeDataReturnBookmark="returnBookmark"
    ></content-image>
    <content-image
      :alt="altText"
      @openReader="openReader($event)"
      :imagePath="secondImagePath"
      :readeDataMagazineId="magazineID"
      :readeDataIssueId="issueID"
      :readeDataStartPage="secondPage"
      :readeDataReturnBookmark="returnBookmark"
    ></content-image>
  </div>
</template>

<script src="./doublespread.js"></script>