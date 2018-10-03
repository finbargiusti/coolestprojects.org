<template>
  <section class="c-faqs">
    <h1 class="text-center">FAQs</h1>
    <div class="c-faqs__entry" :class="{'c-faqs__entry--expanded': q1 }">
      <h2 @click="toggleEntry('q1')">Who can enter?</h2>
      <p>For any Coolest Projects event, if you’re up to 18 years of age and you have made a cool project, you can join in. You can work as an individual or as part of a team of up to five. All projects are welcome, beginner or expert, in any programming language or using whatever hardware available.</p>
      <p>Coolest Projects events are open to all levels of ability; the focus is on creativity, participation, and most of all on having fun!</p>
    </div>
    <div class="c-faqs__entry" :class="{'c-faqs__entry--expanded': q2 }">
      <h2 @click="toggleEntry('q2')">What can I enter?</h2>
      <p>Your project should fit into one of six <a href="https://coolestprojects.zendesk.com/hc/en-us/articles/360016590271-What-are-the-project-categories-for-Coolest-Projects-">categories</a>, covering everything from Scratch to hardware projects. If you’ve made something with tech, or you have a project idea, it will probably fit into one of them! Don’t worry if your project is not 100% complete — prototypes and works-in-progress are welcome, so bring what you have developed so far. Coolest Projects is all about the experience and about learning from participating and showcasing what you’ve created. Once you pick your project, you need to register and apply for your space at the event.</p>
    </div>
    <div class="c-faqs__entry" :class="{'c-faqs__entry--expanded': q3 }">
      <h2 @click="toggleEntry('q3')">Where can I learn more about getting involved in Coolest Projects?</h2>
      <p>You can see more frequently asked questions and information <a href="https://coolestprojects.zendesk.com/hc/en-us">here</a>.</p>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        q1: false,
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
