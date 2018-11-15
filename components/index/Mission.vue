<template>
  <section class="c-mission">
    <div class="c-mission__content">
      <div class="c-mission__section">
        <div class="c-mission__video">
          <iframe src="https://www.youtube.com/embed/8Tvw4SVR3Kc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
      <div class="c-mission__section c-mission__text">
        <p class="c-mission__text-main">
          Coolest Projects gives young people the chance to showcase the great ideas they have created. It inspires and rewards innovation, creativity, entrepreneurship, and technology skills.
        </p>
        <p class="c-mission__text-sub">
          At Coolest Projects, young makers share their projects with fellow creators and the public, and they explore each others' work. Outstanding entries can win awards in different categories. All Coolest Projects events are free to enter and free to attend, giving more people the opportunity to become inspired to create with technology.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-mission {
    margin-top: -(spacing(2));
    background: $grey-x-dark;
    background-image: url(../../static/images/mission-bg.svg);
    background-position: center;
    background-repeat: no-repeat;
    color: $white;
    padding: 65px spacing(5) 80px spacing(5);
    clip-path: polygon(0 spacing(2), 33% 0, 66% 0, 100% spacing(2), 100% 100%, 0 100%);

    &__content {
      display: flex;
      align-items: center;
      max-width: 1180px;
      margin: 0 auto;
    }

    &__section {
      flex: 1;
      width: 50%;
    }

    &__text {
      padding-left: spacing(3);
      margin: spacing(3) 0;

      &-main {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: spacing(3);
      }
    }

    &__video {
      position: relative;
      padding-bottom: 56.25%;

      iframe {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  @include media-breakpoint-max(lg) {
    .c-mission {
      &__content {
        flex-direction: column;
      }

      &__section {
        width: 100%;
      }

      &__text {
        padding-left: 0;
        padding-top: spacing(1);
      }
    }
  }

  @include media-breakpoint-max(md) {
    .c-mission {
      padding: 65px spacing(3) 80px spacing(3);

      &__text {
        font-size: 20px;
      }
    }
  }

  @include media-breakpoint-max(sm) {
    .c-mission {
      padding: 35px spacing(3) spacing(3) spacing(3);
      clip-path: polygon(0 0, 100% spacing(2), 100% 100%, 0 100%);

      &__text {
        &-main {
          font-size: 18px;
        }

        &-sub {
          font-size: 16px;
        }
      }
    }
  }
</style>
