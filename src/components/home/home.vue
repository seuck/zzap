<template>
  <div :class="homeClass">
    <loader payload=""/>
    <reader
      :pages="readerData.pages"
      :start-page="readerData.startPage"
      :title="readerData.title"
      :return-bookmark="readerData.returnBookmark"
      :info-path="readerData.infoPath"
      :label-prefix="readerData.labelPrefix"
      @closeReader="resetReader"
    />

    <zzap-header/>
    <cover/>
    <index/>
    <scanindex :magazine-id="1"/>

    <dynamic-navigation :sections="dynamicNavSections"/>

    <router-view
      :magazine-id="1"
      name="issue"
      @openReader="initReader($event)"
      @announceBookmark="addDynamicNavSection($event)"
      @dismissBookmark="removeDynamicNavSection($event)"
    />
    <router-view
      name="content"
      @openReader="initReader($event)"
      @announceBookmark="addDynamicNavSection($event)"
      @dismissBookmark="removeDynamicNavSection($event)"
    />
    <router-view
      name="followup"
      @openReader="initReader($event)"
      @announceBookmark="addDynamicNavSection($event)"
      @dismissBookmark="removeDynamicNavSection($event)"
    />

    <zzap-footer/>
  </div>
</template>

<script src="./home.js"></script>
