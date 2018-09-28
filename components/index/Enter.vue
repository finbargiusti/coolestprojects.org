<template>
  <section class="c-enter">
    <div class="c-enter__content">
      <div class="c-enter__content-content">
        <h1>Enter Projects For Jan 2019</h1>
        <p>Coolest Projects wants to recognize the effort and creativity of young people who have had an idea and worked to make it a reality using whatever skills and materials they have. All projects from beginner to advanced level are accepted. Join us and share your Scratch animation, website, game, robot, or any other project you’ve built that uses code.</p>
        <a href="#">Enter a project</a>
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
      width: calc(50% + 80px);
      background: $purple;
      padding: 40px 160px 40px 60px;
      clip-path: polygon(0 0, 100% 0, calc(100% - 160px) 100%, 0 100%);
      display: flex;
      justify-content: flex-end;

      &-content {
        max-width: 570px;
      }

      h1 {
        font-family: 'League Gothic Italic';
        font-weight: 400;
        color: $white;
        transform: rotate(-4deg);
        font-size: 58px;
        text-transform: uppercase;
        margin: 40px 0;
      }

      p {
        font-size: 18px;
        color: $white;
        margin: 40px 0;
      }

      a {
        font-family: 'League Gothic Italic';
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
      background: url(../../static/enter/photo.jpg);
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
</style>
