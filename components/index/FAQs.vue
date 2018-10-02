<template>
  <section class="c-faqs">
    <h1 class="text-center">FAQs</h1>
    <div class="c-faqs__entry" :class="{'c-faqs__entry--expanded': q1 }">
      <h2 @click="toggleEntry('q1')">What happens if the project is not complete by the day of the event?</h2>
      <p>Don’t worry if your project is not 100% complete – bring what you have developed so far. Coolest Projects is all about the experience and learning gained from participating and showing what you have created.</p>
    </div>
    <div class="c-faqs__entry" :class="{'c-faqs__entry--expanded': q2 }">
      <h2 @click="toggleEntry('q2')">What will I be provided with on the day?</h2>
      <p>Don’t worry if your project is not 100% complete – bring what you have developed so far. Coolest Projects is all about the experience and learning gained from participating and showing what you have created.</p>
    </div>
    <div class="c-faqs__entry" :class="{'c-faqs__entry--expanded': q3 }">
      <h2 @click="toggleEntry('q3')">Can I update my project details after I’ve registered?</h2>
      <p>Don’t worry if your project is not 100% complete – bring what you have developed so far. Coolest Projects is all about the experience and learning gained from participating and showing what you have created.</p>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        q1: true,
        q2: false,
        q3: false,
      };
    },
    methods: {
      toggleEntry(key) {
        this[key] = !this[key];
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-faqs {
    padding: spacing(3) spacing(5);

    &__entry {
      max-width: 840px;
      margin: spacing(3) auto;

      h2 {
        background-color: $purple;
        background-image: url(../../static/chevron-right.svg);
        background-repeat: no-repeat;
        background-position: left 24px center;
        font-size: 18px;
        color: $white;
        padding: spacing(2) spacing(3) spacing(2) spacing(5);
        cursor: pointer;
      }

      p {
        display: none;
        background: $white;
        padding: spacing(2) spacing(3);
      }

      &--expanded {
        h2 {
          background-image: url(../../static/chevron-down.svg);
        }

        p {
          display: block;
        }
      }
    }
  }

  @include media-breakpoint-max(md) {
    .c-faqs {
      padding: spacing(3);
    }
  }

  @include media-breakpoint-max(sm) {
    .c-faqs {
      padding: spacing(3) spacing(2);

      &__entry {
        h2 {
          padding: spacing(2) spacing(2) spacing(2) spacing(4);
          background-position: left spacing(2) center;
        }

        p {
          padding: 16px;
        }
      }
    }
  }
</style>
