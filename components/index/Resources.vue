<template>
  <section class="c-resources">
    <h1 class="text-center">Resources</h1>
    <a href="#" class="c-resources__resource">How to make a project workbook</a>
    <a href="#" class="c-resources__resource">How to make a project poster</a>
    <a href="#" class="c-resources__resource">How to make a project poster</a>
    <a href="#" class="c-resources__resource">How to make a project poster</a>
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
      background-image: url(../../static/resource-icon.svg);
      background-repeat: no-repeat;
      background-position: left center;
      padding: spacing(1) spacing(1) spacing(1) spacing(3);
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
