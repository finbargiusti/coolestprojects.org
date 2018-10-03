<template>
  <section class="c-mailing-list">
    <a name="newsletter"></a>
    <h1 class="text-center">Stay in touch</h1>
    <form action="https://raspberrypi.us9.list-manage.com/subscribe/post?u=54fbc2c9ac9d9dd634725107a&amp;id=1ec0029928" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <label>Email address</label>
      <input type="email" name="EMAIL" />
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_54fbc2c9ac9d9dd634725107a_1ec0029928" tabindex="-1" value=""></div>
      <input type="submit" name="subscribe" value="Sign up" />
    </form>
    <p>We'll be in touch whenever there's news you need to hear, and more frequently as the events approach.</p>
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
    padding: 0 spacing(5);

    label {
      display: block;
      margin: spacing(3) 0 spacing(1) 0;
      font-size: 18px;
      font-weight: bold;
    }

    input {
      display: block;
      width: 100%;
      line-height: 50px;
    }

    input[type=email] {
      margin: spacing(1) 0 spacing(2) 0;
      font-size: 26px;
      border: 1px solid $grey-light;
    }

    input[type="submit"] {
      text-transform: uppercase;
      margin: spacing(1) 0;
      font-size: 35px;
      color: $white;
      background-color: $orange;
      font-family: 'League Gothic';
      font-style: italic;
      padding: 4px;
      margin-bottom: spacing(1);
      border: none;
    }

    p {
      margin: spacing(2) 0 spacing(3) 0;
      color: $grey-dark;
      font-size: 14px;
      line-height: 1.3;
    }
  }

  @include media-breakpoint-max(md) {
    .c-mailing-list {
      padding: 0 spacing(3);
    }
  }

  @include media-breakpoint-max(sm) {
    .c-mailing-list {
      padding: 0 spacing(2);

      input[type="submit"] {
        margin-bottom: spacing(2);
      }
    }
  }
</style>
