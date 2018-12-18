<template>
  <section class="c-events">
    <div v-for="event in events" :key="event.name" class="c-events__event">
      <div class="c-events__event-details">
        <span><a :href="event.ticketsUrl">{{ event.name }}</a></span>
        <span>{{ event.location1 }}</span>
        <span>{{ event.location2 }}</span>
        <span>{{ event.date }}</span>
        <a class="c-events__event-link" :href="event.ticketsUrl">Tickets / Register</a>
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
            location1: 'The Sharp Project',
            location2: 'Manchester',
            date: '2 March 2019',
            ticketsUrl: 'https://coolestprojects.org/uk',
          },
          {
            name: 'USA',
            location1: 'Discovery Cube Orange County',
            location2: 'California',
            date: '23 March 2019',
            ticketsUrl: 'https://coolestprojects.org/usa',
          },
          {
            name: 'International',
            location1: 'RDS, Dublin',
            location2: 'Ireland',
            date: '5 May 2019',
            ticketsUrl: 'https://coolestprojects.org/international',
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
        margin-bottom: 7px;

        &:first-child > a {
          font-size: 35px;
          font-family: 'League Gothic';
          font-style: italic;
          font-weight: normal;
          background: $white;
          display: inline-block;
          text-transform: uppercase;
          padding: 4px 12px;
          padding-top: 6px;
          text-decoration: none;
          margin: 24px 0 10px 0;
          line-height: 1;
        }
      }

      &:nth-child(1) {
        background: $red;
        display: flex;
        justify-content: flex-end;

        span:first-child > a {
          color: $red;
        }
      }

      &:nth-child(2) {
        background: $blue;
        max-width: 433px;

        span:first-child > a {
          color: $blue;
        }
      }

      &:nth-child(3) {
        background: $orange;

        span:first-child > a {
          color: $orange;
        }
      }

      &-link {
        background: $black;
        color: $white;
        text-decoration: none;
        font-size: 23px;
        font-family: 'League Gothic';
        font-style: italic;
        display: inline-block;
        text-transform: uppercase;
        padding: 8px 16px;
        padding-top: 10px;
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
