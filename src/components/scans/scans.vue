<template>
  <section class="scans">
      <section class="scans__loader">
        <img class="scans__loader__image" src="/img/c64_loader.gif" />
      </section>
      
      <section id="reader" class="">
        <div id="reader_navigator" class="">
          <span id="reader_info_magazine"></span>
          <a id="reader_close_button" title="Chiudi (Esc)"><img src="/img/icons/24-zoom-out.png" /></a>
          <span id="reader_info_pages"></span>
        </div>
        <div id="reader_content" class="content">
          <img id="reader_left" />
          <img id="reader_right" />
        </div>
      </section>
  
  
      <section class="scans__magazine">
        <h2 class="scans__magazine__info">Scansioni</h2>
        <div id="_issue" class="scans__magazine__issue">
          <a class="scans__magazine__link">
            <div class="scans__magazine__issueinfo">
              <p class="scans__magazine__issueinfo__number"></p>
              <p class="scans__magazine__issueinfo__date"><span class="scans__magazine__issueinfo__month"></span>/<span class="scans__magazine__issueinfo__year"></span></p>
            </div>
            <img class="scans__magazine__image lazy" src="/img/c64_loader.gif" data-original="" />
          </a>
        </div>
        <div id="issues_generated" class="scans__magazine__issues"></div>
      </section>
    
      <section class="scans__issue">
      
        <div id="_double_page" class="scans__issue__cover">
          <div class="scans__issue__infocontainer">
            <div class="scans__issue__info">
              <h2 class="scans__issue__numberline">Numero <span class="scans__issue__number"></span></h2>
              <p class="scans__issue__dateline"><img class="scans__issue__icon" src="assets/icons/calendar.svg" alt="calendario"><span class="scans__issue__month"></span> <span class="scans__issue__year"></span></p>
              <p class="scans__issue__editorline"><img class="scans__issue__icon" src="assets/icons/edit.svg" alt="matita"><span class="scans__issue__editor"></span></p>
              <p class="scans__issue__contributorlabel"><img class="scans__issue__icon" src="assets/icons/scanner.svg" alt="scanner">Scansioni di:
                <ul class="scans__issue__contributorlist">
                  <li id="_scan_author" class="scans__issue__contributor"><a href="#">Seuck</a></li>
                  
                  <span id="scan_authors_generated"></span>
                </ul>
              </p>
            </div>
          </div>
          <a class="scans__issue__detaillink">
            <img class="scans__issue__page lazy thumb" src="/img/c64_loader.gif" data-original="/img/scans/zzap/1/03.jpg">
          </a>
        </div>

        <div id="_double_page" class="scans__issue__doublepage">
          <a class="scans__issue__detaillink">
            <img class="scans__issue__page lazy thumb" src="/img/c64_loader.gif" data-original="/img/scans/zzap/1/02.jpg">
            <img class="scans__issue__page lazy thumb" src="/img/c64_loader.gif" data-original="/img/scans/zzap/1/03.jpg">
          </a>
        </div>

        <div id="double_pages_generated" class="scans__issue__content"></div>

      </section>
  </section>
</template>

<script src="./scans.js"></script>
