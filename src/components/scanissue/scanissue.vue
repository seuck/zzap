<template>
  <section class="scanissue"
    v-if="isIssueId"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <div class="scanissue__content">
      <div class="scanissue__doublepage">
        <div class="scanissue__detaillink scanissue__detaillink--intro">
          <scanissue-info
            :issueNumber="issue.sequence"
            :issueMonth="getMonth(issue.month)"
            :issueYear="issue.year"
            :issueEditor="issue.editor.name"
            :contributors="issue.volumes[0].scan_authors"
            :pdf="issue.volumes[0].pdf">
          </scanissue-info>
          <a class="scanissue__detaillink" @click="openReader(issue.volumes[0].pages[0].sequence)">
            <img
              class="scanissue__page scanissue__cover scanissue__1"
              v-lazy="buildPageThumbPath(issue.volumes[0].pages[0].scan.path)">
          </a>
        </div>
      </div>
      <div class="scanissue__doublepage" v-for="page in doublePages">
        <a class="scanissue__detaillink" @click="openReader(issue.volumes[0].pages[page].sequence)">
          <img
            :class="getContentClass(issue.volumes[0].pages[page])"
            v-lazy="buildPageThumbPath(issue.volumes[0].pages[page].scan.path)">
          {{issue.volumes[0].pages[page].id}}
          <img
            :class="getContentClass(issue.volumes[0].pages[page + 1])"
            v-lazy="buildPageThumbPath(issue.volumes[0].pages[page + 1].scan.path)">
          {{issue.volumes[0].pages[page+1].id}}
        </a>
      </div>
      <div class="scanissue__doublepage">
        <a
          class="scanissue__detaillink"
          @click="openReader(issue.volumes[0].pages[issue.volumes[0].pages.length - 1].sequence)">
          <img
            :class="getContentClass(issue.volumes[0].pages[issue.volumes[0].pages.length - 1])"
            class="scanissue__page scanissue__backcover"
            v-lazy="buildPageThumbPath(issue.volumes[0].pages[issue.volumes[0].pages.length - 1].scan.path)">
        </a>
      </div>
    </div>
  </section>
</template>

<script src="./scanissue"></script>