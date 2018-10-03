<template>
  <section class="c-quotes">
    <div class="c-quotes__left">
      <div class="c-quotes__quote">
        <div class="c-quotes__quote-image">
          <img src="https://placeimg.com/269/278/people" />
        </div>
        <div class="c-quotes__quote-text">
          <p>“I love to see the different projects and the people from all over the world, who come to show the things that inside are very similar but in practice are very different and have many different uses.” - Raul, Madrid</p>
        </div>
      </div>
      <div class="c-quotes__quote">
        <div class="c-quotes__quote-image">
          <img src="https://placeimg.com/269/278/people" />
        </div>
        <div class="c-quotes__quote-text">
          <p>“I think it's a really good way to see other people’s projects and Ii think it has really helped me get a view of how much there is involved in building technology." - George, UK</p>
        </div>
      </div>
    </div>
    <div class="c-quotes__right">
      <div class="c-quotes__quote">
        <div class="c-quotes__quote-image">
          <img src="https://placeimg.com/507/382/people" />
        </div>
        <div class="c-quotes__quote-text">
          <p>"To any kids that are looking to enter a project in Coolest Projects, I would definitely encourage them to go in with an open mind. I had no expectations going in and loved being immersed in the environment that exuded innovation and ingenuity." - Kavi, USA</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-quotes {
    display: flex;
    max-width: 1320px;
    margin: 0 auto;

    &__left {
      flex: 7;
      margin: 0 spacing(3) 0 spacing(5);
    }

    &__right {
      flex: 5;
      margin: 0 spacing(5) 0 spacing(3);

      .c-quotes__quote {
        flex-direction: column;
        padding-bottom: 40px;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - #{spacing(3)}));

        &-image {
          flex: none;
        }

        &-text {
          flex: none;
        }
      }
    }

    &__quote {
      background: $teal;
      color: $white;
      display: flex;
      margin: spacing(5) 0;

      &-image {
        flex: 3;
        min-height: 300px;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }

      &-text {
        flex: 5;
        padding: 40px spacing(3);
        font-size: 18px;
        line-height: 1.35;
      }

      &-attribution {
        margin-top: 40px;
        font-weight: bold;
      }
    }
  }

  @include media-breakpoint-max(md) {
    .c-quotes {
      &__left {
        margin: 0 spacing(2) 0 spacing(3);
      }

      &__right {
        margin: 0 spacing(3) 0 spacing(2);
      }

      &__quote {
        margin: spacing(3) 0;

        &-text {
          padding: 20px spacing(3);
          font-size: 16px;
        }
      }
    }
  }

  @include media-breakpoint-max(sm) {
    .c-quotes {
      flex-direction: column;

        &__left {
          margin: 0 spacing(3);
        }

        &__right {
          margin: -(spacing(3)) spacing(3) 0 spacing(3);
        }

      &__quote {
        flex-direction: column;

        &-image {
          img {
            height: 175px;
            width: 100%;
          }
        }
      }
    }
  }
</style>
