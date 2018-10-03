<template>
  <section class="c-hero">
    <div class="c-hero__content">
      <div class="c-hero__content-content">
        <div class="c-hero__logo">
          <img src="~/static/logo-orange.svg" />
          <h1>The world’s leading technology fair for young people</h1>
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
      padding: 50px 175px 70px 60px;
      position: relative;

      img {
        width: 100%;
        margin-bottom: 20px;
      }

      h1 {
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

  @include media-breakpoint-max(sm) {
    .c-hero {
      display: block;
      background :red;

      &__content {
        margin-right: 0;
        margin-bottom: -(spacing(3));
        clip-path: polygon(0 0, 100% 0, 100% 100%, 48% calc(100% - #{spacing(3)}), 53% 100%, 0 calc(100% - #{spacing(2)}));

        &-content {
          max-width: 710px
        }
      }

      &__logo {
        padding: spacing(3) spacing(3) spacing(4) spacing(3);
      }

      &__image {
        height: 200px;
      }
    }
  }
</style>
