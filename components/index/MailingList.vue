<template>
  <section class="c-mailing-list">
    <h1>Stay in touch</h1>
    <form>
      <label>Email Address</label>
      <input type="email" />
      <input type="submit" value="Sign up" />
    </form>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-mailing-list {
    background: $white;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,0.2);
    padding: 0 60px;

    h1 {
      font-family: 'League Gothic Italic';
      font-size: 50px;
      text-align: center;
      text-transform: uppercase;
      margin: 26px 0 13px 0;
    }

    label {
      display: block;
      margin: 26px 0 10px 0;
      font-size: 18px;
    }

    input {
      display: block;
      width: 100%;
      margin: 10px 0;
      background: #EBF0F5;
      border: none;
      margin: 10px 0 24px 0;
      font-size: 26px;
      line-height: 50px;
    }

    input[type="submit"] {
      text-transform: uppercase;
      margin: 10px 0;
      font-size: 35px;
      color: $white;
      background-color: $orange;
      font-family: 'League Gothic Italic';
      padding: 4px;
      margin-bottom: 32px;
    }
  }

  @include media-breakpoint-max(md) {
    .c-mailing-list {
      padding: 0 30px;
    }
  }
</style>
