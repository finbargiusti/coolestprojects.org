<template>
  <section class="c-hero">
    <div class="c-hero__content">
      <div class="c-hero__content-content">
        <div class="c-hero__logo">
          <img src="~/static/logo-orange.svg" />
          <h1>The world leading technology fair for young people</h1>
        </div>
      </div>
    </div>
    <div class="c-hero__image"></div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-hero {
    display: flex;

    &__content {
      display: flex;
      justify-content: flex-end;
      flex: 1;
      background: $white;
      clip-path: polygon(0 0, 100% 0, calc(100% - 96px) 50%, calc(100% - 32px) 50%, calc(100% - 128px) 100%, 0 100%);
      margin-right: -128px;

      &-content {
        max-width: 710px
      }
    }

    &__logo {
      padding: 50px 175px 80px 60px;
      position: relative;

      img {
        width: 100%;
      }

      h1 {
        font-family: 'League Gothic Italic';
        text-transform: uppercase;
        font-size: 40px;
      }
    }

    &__image {
      background-image: url(../../static/hero/crowd.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      flex: 1;
    }
  }

  @include media-breakpoint-max(md) {
    .c-hero {
      &__logo {
        padding: 50px 145px 80px 30px;
      }
    }
  }
</style>
