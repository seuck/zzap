<template>
  <section class="scanissue" v-if="isIssueId">
    <div class="scanissue__cover">
      <div class="scanissue__infocontainer">
        <div class="scanissue__info">
          <h2 class="scanissue__numberline">Numero <span class="scanissue__number">{{issue.sequence}}</span></h2>
          <p class="scanissue__dateline">
            <img class="scanissue__icon" src="assets/icons/calendar.svg" alt="calendario"><span class="scanissue__month">{{getMonth(issue.month)}}</span> <span class="scanissue__year">{{issue.year}}</span>
          </p>
          <p class="scanissue__editorline">
            <img class="scanissue__icon" src="assets/icons/edit.svg" alt="matita"><span class="scanissue__editor">{{issue.editor.name}}</span>
            </p>
          <p class="scanissue__contributorlabel">
            <img class="scanissue__icon" src="assets/icons/scanner.svg" alt="scanner">Scansioni di:
            <ul class="scanissue__contributorlist">
              <li v-for="contributor in issue.volumes[0].scan_authors" class="scanissue__contributor"><a :href="buildContributorPath(contributor.id)">{{contributor.name}}</a></li>
            </ul>
          </p>
        </div>
      </div>
      <a class="scanissue__detaillink" @click="openReader(issue.volumes[0].pages[0].label)">
        <img class="scanissue__page thumb" v-lazy="buildPageThumbPath(issue.volumes[0].pages[0].label)">
      </a>
    </div>

    <div class="scanissue__content">
      <div class="scanissue__doublepage" v-for="page in doublePages">
        <a class="scanissue__detaillink" @click="openReader(issue.volumes[0].pages[page].label)">
          <img class="scanissue__page thumb" v-lazy="buildPageThumbPath(issue.volumes[0].pages[page].label)">
          <img class="scanissue__page thumb" v-lazy="buildPageThumbPath(issue.volumes[0].pages[page + 1].label)">
        </a>
      </div>
      <div class="scanissue__doublepage">
        <a class="scanissue__detaillink" @click="openReader(issue.volumes[0].pages[issue.volumes[0].pages.length - 1].label)">
          <img class="scanissue__page thumb" v-lazy="buildPageThumbPath(issue.volumes[0].pages[issue.volumes[0].pages.length - 1].label)">
        </a>
      </div>
    </div>
  </section>
</template>

<script src="./scanissue"></script>