<template>
  <section
    v-if="isIssueId"
    :data-content-piece="issue.sequence"
    class="scanissue"
    data-track-content
    data-content-name="scanissue"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <div class="scanissue__content">
      <div class="scanissue__doublepage">
        <div class="scanissue__detaillink scanissue__detaillink--intro">
          <scanissue-info
            :issue-number="issue.sequence"
            :issue-month="getMonthNameFromNumber(issue.month)"
            :issue-year="issue.year"
            :issue-editor="issue.editor.name"
            :contributors="issue.volumes[0].scan_authors"
            :pdf="issue.volumes[0].pdf"/>
          <a
            class="scanissue__detaillink"
            @click="openReader(issue.volumes[0].pages[0].sequence)">
            <img
              v-lazy="buildPageThumbPath(issue.volumes[0].pages[0].scan.path)"
              :alt="getCoverAltText(issue.sequence)"
              class="scanissue__page scanissue__cover scanissue__1">
          </a>
        </div>
      </div>
      <div
        v-for="(page, index) in getDoublePages()"
        :key="index"
        class="scanissue__doublepage">
        <a
          class="scanissue__detaillink"
          @click="openReader(issue.volumes[0].pages[page].sequence)">
          <img
            v-lazy="buildPageThumbPath(issue.volumes[0].pages[page].scan.path)"
            :class="getContentClass(issue.volumes[0].pages[page])"
            :alt="getPageAltText(issue.sequence, page + 1)">
          <img
            v-lazy="buildPageThumbPath(issue.volumes[0].pages[page + 1].scan.path)"
            :class="getContentClass(issue.volumes[0].pages[page + 1])"
            :alt="getPageAltText(issue.sequence, page + 2)">
        </a>
      </div>
      <div class="scanissue__doublepage">
        <a
          class="scanissue__detaillink"
          @click="openReader(issue.volumes[0].pages[issue.volumes[0].pages.length - 1].sequence)">
          <img
            v-lazy="buildPageThumbPath(
              issue.volumes[0].pages[issue.volumes[0].pages.length - 1].scan.path
            )"
            :alt="getBackcoverAltText(issue.sequence)"
            class="scanissue__page scanissue__backcover">
        </a>
      </div>
    </div>
  </section>
</template>

<script src="./scanissue"></script>
