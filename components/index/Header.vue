<template>
  <header class="c-header">
    <div class="c-header__content">
      <a href="https://raspberrypi.org"><img src="~/static/images/pi.svg" /></a>
    </div>
  </header>
</template>

<script>
  export default {

  };
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-header {
    background: $pi-grey;

    &__content {
      max-width: 1280px;
      margin: 0 auto;
      padding: 8px spacing(5);
    }
  }

  @include media-breakpoint-max(sm) {
    .c-header {
      &__content {
        padding: 8px spacing(3);
      }
    }
  }
</style>
