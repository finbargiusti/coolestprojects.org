<template>
  <div>
    <c-header />
    <links />
    <hero />
    <events />
    <mission />
    <enter />
    <quotes />
    <section class="subfooter">
      <faqs />
      <section class="flex">
        <mailing-list />
        <resources />
      </section>
    </section>
    <c-footer />
  </div>
</template>

<script>
  import Header from '~/components/index/Header';
  import Links from '~/components/index/Links';
  import Hero from '~/components/index/Hero';
  import Events from '~/components/index/Events';
  import Mission from '~/components/index/Mission';
  import Enter from '~/components/index/Enter';
  import Quotes from '~/components/index/Quotes';
  import FAQs from '~/components/index/FAQs';
  import MailingList from '~/components/index/MailingList';
  import Resources from '~/components/index/Resources';
  import Footer from '~/components/index/Footer';

  export default {
    components: {
      'c-header': Header,
      Links,
      Hero,
      Events,
      Mission,
      Enter,
      Quotes,
      faqs: FAQs,
      MailingList,
      Resources,
      'c-footer': Footer,
    },
  };
</script>

<style lang="scss" scoped>
  @import '~/assets/_variables.scss';

  .subfooter {
    background-color: #E7EDF3;
    background-image: url('../static/images/footer-image-grad.jpg');
    background-position: bottom center;
    background-repeat: no-repeat;
    padding-bottom: 560px;
  }

  .flex {
    display: flex;
    max-width: 1030px;
    margin: 0 auto;

    > * {
      flex: 1;
      margin: 0 30px;
    }
  }

  @include media-breakpoint-max(md) {
    .flex {
      > * {
        margin: 0 15px;
      }
    }
  }

  @include media-breakpoint-max(sm) {
    .subfooter {
      padding-bottom: 200px;
      background-size: auto 260px;
    }

    .flex {
      flex-direction: column;

      > * {
        margin: 15px;
      }
    }
  }
</style>
