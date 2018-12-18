<template>
  <section class="c-links" :class="{'c-links--open' : open}">
    <div class="c-links__mobile__cover" :style="{ 'display:block !important!' : open }">
      <img src="~/static/images/logo-orange.svg" alt="" class="c-links__mobile__cover__logo">
    </div>
    <div class="c-links__desktop">
      <ul class="c-links__desktop__list">
        <li v-for="link in links" :key="link.text" class="c-links__desktop__link">
          <a :href="link.url">{{ link.text }}</a>
        </li>
      </ul>
    </div>
    <div class="c-links__mobile">
      <div class="c-links__mobile__burger">
        <img @click="toggleOpen()" src="~/static/images/bars.svg" alt="" class="c-links__mobile__burger__icon">
      </div>
      <ul class="c-links__mobile__list">
        <li class="c-links__mobile__cancel">
          <a @click="toggleOpen()">✕</a>
        </li>
        <li v-for="link in links" :key="link.text" class="c-links__mobile__link">
          <a :href="link.url">{{ link.text }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {
            text: 'Participate',
            url: '#',
          },
          {
            text: 'Sponsor',
            url: '#',
          },
          {
            text: 'Be Inspired',
            url: '#',
          },
        ],
        open: false,
      }
    },
    methods: {
      toggleOpen() {
        this.open = !this.open
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-links {
    margin-top: 20px;
    position: absolute;
    z-index: 1;
    right: 40px;

    &__desktop {
      &__list {
        list-style: none;
        margin: 0;
      }

      &__link {
        display: inline-block;
        margin-left: 20px;

        &>a {
          text-decoration: none;
          color: $black;
          font-weight: bold;
          padding: 7px 10px;
          box-sizing: border-box;
          background-color: $white;
        }
      }
    }

    &__mobile {
      display: none;

      &__burger {
        display: block;
        

        &__icon {
          width: 35px;
          float:right;
          cursor: pointer;
        }
      }

      &__link {
        margin-bottom: 30px;
        margin-top: 10px;
        box-sizing: border-box;
        position: relative;
        z-index: 2;


        &>a {
          text-decoration: none;
          color: $black;
          font-weight: bold;
          font-size: 23px;
          padding: 7px 10px;
          background-color: $white;
          cursor: pointer;
        }
      }

      &__cancel {
        margin-bottom: 30px;
        margin-top: 10px;
        box-sizing: border-box;
        position: relative;
        z-index: 2;


        &>a {
          text-decoration: none;
          color: $white;
          font-weight: bold;
          font-size: 35px;
          padding: 7px 10px;
          cursor: pointer;
        }
      }

      &__list {
        list-style: none;
        display: none;
        text-align: right;
        height: 100%;
        padding: 0;

      }

      &__cover {
        background-color: $purple;
        display: none;
        position: fixed;
        z-index: 1;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        padding: 0;

        &__logo {
          width: 50%;
          margin: 10px 10px 0 0;
        }
      }

    }
  }

  .c-links--open {
    .c-links__mobile__list { display:block; }
    .c-links__mobile__cover { display:block; }
    .c-links__mobile__burger { display:none; }
  }

  @include media-breakpoint-max(sm) {
    .c-links__desktop {display:none}
    .c-links__mobile {display:block} 
  }
</style>
