<template>
  <footer class="c-footer">
    <div class="c-footer__content">
      <div class="c-footer__links">
        <a href="https://coolestprojects.org/news/">News</a>
        <a href="https://help.coolestprojects.org/hc">Help centre</a>
        <a href="mailto:hello@coolestprojects.org">Contact us</a>
        <div class="c-footer__social">
          <a href="https://www.facebook.com/coolestprojects"><img src="~/static/images/social/facebook.svg" /></a>
          <a href="https://twitter.com/coolestprojects"><img src="~/static/images/social/twitter.svg" /></a>
          <a href="https://www.instagram.com/coolestprojects/"><img src="~/static/images/social/instagram.svg" /></a>
          <a href="https://www.youtube.com/channel/UCwLfAb0zvzwidSNHWs9yg2g"><img src="~/static/images/social/youtube.svg" /></a>
        </div>
      </div>
      <div class="c-footer__logo">
        <img src="~/static/images/logo-white.svg" />
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
          height: 32px;
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
