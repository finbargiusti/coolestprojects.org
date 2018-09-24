<template>
  <section class="c-events">
    <div class="event">
      <span>United Kingdom</span>
      <span>Manchester</span>
      <span>2 March 2019</span>
    </div>
    <div class="event">
      <span>North America</span>
      <span>Santa Ana, CA</span>
      <span>23 March 2019</span>
    </div>
    <div class="event">
      <span>International</span>
      <span>Dublin</span>
      <span>5 May 2019</span>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .c-events {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: 64px 0;
  }

  .event {
    background: white;
    font-family: Lato;
    padding: 16px 64px;
    clip-path: polygon(16px 0, 100% 0, 100% 100%, 0 100%);
  }

  .event span {
    display: block;
    font-size: 24px;
  }

  .event span:first-child {
    font-weight: bold;
  }
</style>
