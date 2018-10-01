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
    margin-top: -16px;
    background: $grey-x-dark;
    background-image: url(../../static/mission-bg.svg);
    background-position: center;
    background-repeat: no-repeat;
    color: $white;
    padding: 65px 60px 80px 60px;
    clip-path: polygon(0 16px, 33% 0, 66% 0, 100% 16px, 100% 100%, 0 100%);

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
      padding-left: 30px;
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
      padding: 65px 30px 80px 30px;

      &__text {
        font-size: 20px;
      }
    }
  }

  @include media-breakpoint-max(sm) {
    .c-mission {
      padding: 35px 30px 30px 30px;
      clip-path: polygon(0 0, 100% 16px, 100% 100%, 0 100%);

      &__content {
        flex-direction: column;
      }

      &__section {
        width: 100%;
      }

      &__text {
        padding-left: 0;
        padding-top: 30px;
      }
    }
  }
</style>
