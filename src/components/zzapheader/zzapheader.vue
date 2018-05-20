<template>
  <header class="header">
    <h1>Zzap.it</h1>
    <div class="header__container">
      <a
        title="Homepage"
        @click="scrollToCover()"><img
          :src="resolveAssetPath(`cover/zzap-logo.svg`)"
          class="header__logo"
          alt="Logo di Zzap!"></a>
      <nav class="header__navigation">
        <ul class="header__navigationlist">
          <li class="header__navigationelement">
            <a
              class="header__navigationlink"
              @click="scrollToClassWithDefaultOffset('index')">Sommario</a>
          </li>
          <li class="header__navigationelement">
            <a
              class="header__navigationlink"
              @click="scrollToClassWithDefaultOffset('scanindex')">Scansioni</a>
          </li>
          <li class="header__navigationelement">
            <router-link
              :to="{ name: `giochi` }"
              class="header__navigationlink"
              @click.native="scrollToClassWithDefaultOffset('games')">Giochi</router-link>
          </li>
        </ul>
        <ul class="header__sociallist">
          <li class="header__socialelement">
            <a
              class="header__sociallink"
              href="https://www.facebook.com/ProgettoZzapItalia">
              <img
                :src="resolveAssetPath(`icons/social/facebook-logo.svg`)"
                class="header__socialimage"
                alt="Logo di Facebook">
            </a>
          </li>
          <li class="header__socialelement">
            <a
              class="header__sociallink"
              href="https://twitter.com/ZzapItalia">
              <img
                :src="resolveAssetPath(`icons/social/twitter-logo.svg`)"
                class="header__socialimage"
                alt="Logo di Twitter">
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script src="./zzapheader"></script>
