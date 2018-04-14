<template>
  <header class="header">
    <h1>Zzap.it</h1>
    <div class="header__container">
      <a @click="scrollToCover()" title="Homepage"><img class="header__logo" :src="resolveAssetPath(`cover/zzap-logo.svg`)" alt="Logo di Zzap!"></a>
      <nav class="header__navigation">
        <ul class="header__navigationlist">
          <li class="header__navigationelement">
            <a class="header__navigationlink" @click="scrollToClassWithDefaultOffset('index')">Sommario</a>
          </li>
          <li class="header__navigationelement">
            <a class="header__navigationlink" @click="scrollToClassWithDefaultOffset('scanindex')">Scansioni</a>
          </li>
          <li class="header__navigationelement">
            <router-link
              class="header__navigationlink"
              :to="{ name: `giochi` }"
              @click.native="scrollToClassWithDefaultOffset('games')">Giochi</router-link>
            </li>
        </ul>
        <ul class="header__sociallist">
          <li class="header__socialelement">
            <a class="header__sociallink" href="https://www.facebook.com/ProgettoZzapItalia">
              <img class="header__socialimage" :src="resolveAssetPath(`icons/social/facebook-logo.svg`)" alt="Logo di Facebook">
            </a>
          </li>
          <li class="header__socialelement">
            <a class="header__sociallink" href="https://twitter.com/ZzapItalia">
              <img class="header__socialimage" :src="resolveAssetPath(`icons/social/twitter-logo.svg`)" alt="Logo di Twitter">
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script src="./zzapheader"></script>