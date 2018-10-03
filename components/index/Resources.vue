<template>
  <section class="c-resources">
    <h1 class="text-center">Resources</h1>
    <a href="https://help.coolestprojects.org/hc/en-us/articles/360016446372" class="c-resources__resource">How to make a project - workbook</a>
    <a href="https://help.coolestprojects.org/hc/en-us/articles/360016446952" class="c-resources__resource">How to make a project - poster</a>
    <a href="https://projects.raspberrypi.org/" class="c-resources__resource">Guided projects for inspiration</a>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-resources {
    background: $white;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,0.2);
    padding: 0 spacing(5) spacing(3) spacing(5);

    &__resource {
      display: block;
      background-image: url(../../static/images/resource-icon.svg);
      background-repeat: no-repeat;
      background-position: left center;
      padding: spacing(2) spacing(1) spacing(2) spacing(3);
      border-bottom: 1px solid $grey-light;
      font-size: 18px;
      color: $black;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @include media-breakpoint-max(md) {
    .c-resources {
      padding: 0 spacing(3) spacing(3) spacing(3);
    }
  }

  @include media-breakpoint-max(sm) {
    .c-resources {
      padding: 0 spacing(2) spacing(3) spacing(2);
    }
  }
</style>
