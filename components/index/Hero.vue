<template>
  <section class="c-hero">
    <div class="logo">
      <a class="rpi" href="https://raspberrypi.org">
        <img src="~/static/hero/rpi-logo.svg" />
      </a>
      <img src="~/static/logo-white.svg" />
      <h1>The world leading technology fair for young people</h1>
    </div>
    <div class="events">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .c-hero {
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    background-image: url(../../static/hero/crowd.jpg);
    background-size: cover;
    justify-content: space-between;
  }

  .logo {
    background-image: url(../../static/hero/rpi-bg.svg), url(../../static/hero/bg.svg);
    background-position: top left, top right;
    background-repeat: no-repeat;
    background-size: auto, cover;
    padding: 50px 175px 200px 75px;
    max-width: 55%;
    position: relative;
  }

  .rpi {
    position: absolute;
    top: 0;
    left: 0;
    padding: 16px 24px;
  }

  .rpi img {
    width: 32px;
    transition: transform .15s cubic-bezier(.68,-.55,.265,1.55);
  }

  .rpi:hover img {
    transform: rotate(-5deg) scale(1.1);
  }

  img {
    width: 100%;
  }

  h1 {
    color: #fff;
    font-family: 'League Gothic';
    font-style: italic;
    text-transform: uppercase;
    transform: rotate(-4deg);
    font-size: 40px;
  }
</style>
