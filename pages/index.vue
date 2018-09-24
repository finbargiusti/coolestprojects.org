<template>
  <div>
    <hero>
      <events />
    </hero>
    <mission />
    <enter />
    <quotes />
    <faqs />
    <section>
      <mailing-list />
      <resources />
    </section>
  </div>
</template>

<script>
  import Hero from '~/components/index/Hero';
  import Events from '~/components/index/Events';
  import Mission from '~/components/index/Mission';
  import Enter from '~/components/index/Enter';
  import Quotes from '~/components/index/Quotes';
  import FAQs from '~/components/index/FAQs';
  import MailingList from '~/components/index/MailingList';
  import Resources from '~/components/index/Resources';

  export default {
    components: {
      Hero,
      Events,
      Mission,
      Enter,
      Quotes,
      faqs: FAQs,
      MailingList,
      Resources,
    },
  };
</script>
