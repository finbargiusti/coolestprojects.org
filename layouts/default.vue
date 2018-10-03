<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
  @import '~/assets/_variables.scss';

  @font-face {
      font-family: 'League Gothic';
      src: url('../static/fonts/leaguegothic-italic-webfont.eot');
      src: url('../static/fonts/leaguegothic-italic-webfont.eot?#iefix') format('embedded-opentype'),
          url('../static/fonts/leaguegothic-italic-webfont.woff') format('woff'),
          url('../static/fonts/leaguegothic-italic-webfont.ttf') format('truetype'),
          url('../static/fonts/leaguegothic-italic-webfont.svg#league_gothic_italicregular') format('svg');
      font-weight: normal;
      font-style: italic;
  }

  html {
    font-family: Lato, Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background: #fff;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  h1, h2, h3 {
    color: $grey-x-dark;
  }

  h1 {
    margin: 26px 0 13px 0;
    font-family: 'League Gothic';
    font-style: italic;
    font-size: 45px;
    font-weight: normal;
    line-height: 1.1;
    text-transform: uppercase;
  }

  .text-center {
    text-align: center;
  }
</style>
