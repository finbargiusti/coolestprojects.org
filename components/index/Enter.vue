<template>
  <section class="c-enter">
    <div class="c-enter__content">
      <div class="c-enter__content-content">
        <h1>Project registration opens January 2019</h1>
        <p>Coolest Projects recognises the effort and creativity of young people who take an idea and make it a reality. All projects are welcome, from beginner to advanced. Join us and share your Scratch animation, website, game, robot, or anything else you’ve built with technology. Sign up for a reminder to enter your project when registration opens for the International, UK, and USA events in January 2019.</p>
        <a href="#newsletter">Sign up for news</a>
      </div>
    </div>
    <div class="c-enter__image"></div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-enter {
    display: flex;
    justify-content: flex-start;

    &__content {
      height: 100%;
      width: calc(50% + 160px);
      background: $purple;
      padding: 40px 160px 40px 30px;
      clip-path: polygon(0 0, 100% 0, calc(100% - 160px) 100%, 0 100%);
      display: flex;
      justify-content: flex-end;

      &-content {
        max-width: 590px;
      }

      h1 {
        color: $white;
        transform: rotate(-4deg);
        font-size: 58px;
        margin: 40px 0;
      }

      p {
        font-size: 18px;
        color: $white;
        margin: 40px 0;
        line-height: 1.35;
      }

      a {
        font-family: 'League Gothic';
        font-style: italic;
        text-transform: uppercase;
        font-size: 28px;
        margin: 40px 0;
        background: $white;
        padding: 15px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        color: $purple;
      }
    }

    &__image {
      flex: 1;
      margin-left: -160px;
      background: url(../../static/images/enter/photo.jpg);
      background-position: top right;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  @include media-breakpoint-max(md) {
    .c-enter {
      &__content {
        padding: 40px 130px 40px 30px;
      }
    }
  }

  @include media-breakpoint-max(sm) {
    .c-enter {
      &__content {
        clip-path: none;
        width: 100%;
        padding: 30px;
      }

      h1 {
        font-size: 38px;
      }

      p {
        font-size: 16px;
      }

      &__image {
        display: none;
      }
    }
  }
</style>
