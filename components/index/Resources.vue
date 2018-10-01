<template>
  <section class="c-resources">
    <h1>Resources</h1>
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
    padding: 0 60px 30px 60px;

    h1 {
      font-family: 'League Gothic Italic';
      font-size: 50px;
      text-align: center;
      text-transform: uppercase;
      margin: 26px 0 13px 0;
    }

    &__resource {
      display: block;
      background-image: url(../../static/resource-icon.svg);
      background-repeat: no-repeat;
      background-position: left 16px center;
      padding: 10px 10px 10px 48px;
      border-bottom: 1px solid grey;
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
      padding: 0 30px 30px 30px;
    }
  }

  @include media-breakpoint-max(sm) {
    .c-resources {
      padding: 0 15px 30px 15px;
    }
  }
</style>
