<template>
  <section class="c-quotes">
    <div class="c-quotes__left">
      <div class="c-quotes__quote">
        <div class="c-quotes__quote-image">
          <img src="https://placeimg.com/269/278/people" />
        </div>
        <div class="c-quotes__quote-text">
          <p>“A quote goes here Coolest Projects wants to recognize the effort and creativity of young people who have had an idea and worked to make it a reality using”</p>
        </div>
      </div>
      <div class="c-quotes__quote">
        <div class="c-quotes__quote-image">
          <img src="https://placeimg.com/269/278/people" />
        </div>
        <div class="c-quotes__quote-text">
          <p>“A quote goes here Coolest Projects wants to recognize the effort and creativity of young people who have had an idea and worked to make it a reality using”</p>
        </div>
      </div>
    </div>
    <div class="c-quotes__right">
      <div class="c-quotes__quote">
        <div class="c-quotes__quote-image">
          <img src="https://placeimg.com/507/382/people" />
        </div>
        <div class="c-quotes__quote-text">
          <p>“A must see event, these young people are going to define our future”</p>
          <p class="c-quotes__quote-attribution">A. Person<br />Microsoft</p>
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
