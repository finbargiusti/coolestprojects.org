<template>
  <section class="c-mission">
    <div class="c-mission__content">
      <div class="c-mission__section">
        <div class="c-mission__video">
          <iframe src="https://www.youtube.com/embed/yMmDtfzGYQA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
      <div class="c-mission__section">
        <p class="c-mission__text">
          Coolest Projects is a global set of events that encourage kids to be creative and apply that creativity to solving problems in the real world, and creates an environment which enables them to push forward and launch their solution.
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
    background-image: url(../../static/mission-bg.svg);
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
      font-size: 24px;
      padding-left: spacing(3);
      line-height: 33px;
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

      &__content {
        flex-direction: column;
      }

      &__section {
        width: 100%;
      }

      &__text {
        padding-left: 0;
        padding-top: spacing(3);
      }
    }
  }
</style>
