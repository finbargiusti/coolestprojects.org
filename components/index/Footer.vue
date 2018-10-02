<template>
  <footer class="c-footer">
    <div class="c-footer__content">
      <div class="c-footer__links">
        <a href="#">A link</a>
        <a href="#">Another link</a>
        <a href="#">Contact us</a>
        <div class="c-footer__social">
          <a href="#"><img src="~/static/facebook.svg" /></a>
          <a href="#"><img src="~/static/twitter.svg" /></a>
          <a href="#"><img src="~/static/instagram.svg" /></a>
        </div>
      </div>
      <div class="c-footer__logo">
        <img src="~/static/logo-white.svg" />
      </div>
      <div class="c-footer__rpf"></div>
    </div>
  </footer>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-footer {
    background: $orange;

    &__content {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 spacing(5);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__links {
      flex: 1;

      a {
        color: $white;
        font-size: 20px;
        margin: spacing(2) 0;
        text-decoration: none;
        display: block;
        font-weight: bold;
      }
    }

    &__social {
      a {
        display: inline-block;

        img {
          width: 32px;
        }
      }
    }

    &__logo {
      flex: 1;
      max-width: 320px;
      padding: spacing(3);

      img {
        width: 100%;
      }
    }

    &__rpf {
      flex: 1;
    }
  }

  @include media-breakpoint-max(md) {
    .c-footer {
      &__content {
        padding: 0 spacing(3);
        background-position: bottom right spacing(3);
      }
    }
  }

  @include media-breakpoint-max(sm) {
    .c-footer {
      &__content {
        flex-direction: column-reverse;
      }

      &__logo {
        padding: spacing(2);

        img {
          height: 200px;
        }
      }
    }
  }
</style>
