<template>
  <section class="c-events">
    <div v-for="event in events" :key="event.name" class="c-events__event">
      <div class="c-events__event-details">
        <span>{{ event.name }}</span>
        <span>{{ event.location }}</span>
        <span>{{ event.date }}</span>
        <a v-if="event.ticketsUrl" :href="event.ticketsUrl">Buy Tickets</a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        events: [
          {
            name: 'United Kingdom',
            location: 'Manchester',
            date: '2 March 2019',
          },
          {
            name: 'North America',
            location: 'Santa Ana, CA',
            date: '23 March 2019',
          },
          {
            name: 'International',
            location: 'Dublin',
            date: '5 May 2019',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .c-events {
    display: flex;
    height: 100%;

    &__event {
      color: $white;
      font-family: Lato;
      flex: 1;

      &-details {
        padding: 0 spacing(5) spacing(4) spacing(5);
        max-width: 433px;
        width: 100%;
      }

      span {
        display: block;
        font-size: 18px;
        font-weight: bold;

        &:first-child {
          font-size: 35px;
          font-family: 'League Gothic Italic';
          font-weight: normal;
          background: $white;
          display: inline-block;
          text-transform: uppercase;
          padding: 4px 12px;
          margin: 24px 0 10px 0;
        }
      }

      &:nth-child(1) {
        background: $orange;
        display: flex;
        justify-content: flex-end;

        span:first-child {
          color: $orange;
        }
      }

      &:nth-child(2) {
        background: $red;
        max-width: 433px;

        span:first-child {
          color: $red;
        }
      }

      &:nth-child(3) {
        background: $teal;

        span:first-child {
          color: $teal;
        }
      }

      a {
        background: $black;
        color: $white;
        text-decoration: none;
        font-family: 'League Gothic Italic';
        display: inline-block;
        text-transform: uppercase;
        padding: 8px 16px;
      }
    }
  }

  @include media-breakpoint-max(md) {
    .c-events {
      &__event {
        &-details {
          padding: 0 spacing(3) spacing(4) spacing(3);
        }
      }
    }
  }

  @include media-breakpoint-max(sm) {
    .c-events {
      flex-direction: column;

      &__event {
        &-details {
          max-width: 100%;
          padding: 0 spacing(3) spacing(3) spacing(3);
        }

        &:nth-child(2) {
          max-width: 100%;
        }
      }
    }
  }
</style>
