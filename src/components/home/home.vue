<template>
  <div :class="homeClass">
    <loader payload=""></loader>
    <reader
      :pages="readerData.pages"
      :startPage="readerData.startPage"
      :title="readerData.title"
      :open="readerData.open"
      @closeReader="resetReader"
    ></reader>
    
    <zzap-header></zzap-header>
    <cover></cover>
    <index></index>
    <scanindex magazineId="1"></scanindex>

    <dynamic-navigation :sections="dynamicNavSections"></dynamic-navigation>

    <router-view
      name="issue"
      magazineId="1"
      @openReader="initReader($event)"
      @announceBookmark="addDynamicNavSection($event)"
      @dismissBookmark="removeDynamicNavSection($event)"
    ></router-view>
    <router-view
      name="content"
      @announceBookmark="addDynamicNavSection($event)"
      @dismissBookmark="removeDynamicNavSection($event)"
    ></router-view>
    <router-view
      name="followup"
      @announceBookmark="addDynamicNavSection($event)"
      @dismissBookmark="removeDynamicNavSection($event)"
    ></router-view>

    <zzap-footer></zzap-footer>
  </div>
</template>

<script src="./home.js"></script>
