<template>
  <light-bulb-section type="is-dark">
    <job-search-desktop v-if="$mq !== 'mobile'"></job-search-desktop>
    <div class="hero-body is-relative">
      <div class="hero-body__content p-6-tablet">
        <div class="container is-fluid">
          <div v-if="$mq == 'mobile'" class="level is-mobile">
            <div class="level-left">
              <div class="level-item">
                <b-icon type="is-yellow" icon="xml" class="job-search__icon icon-2"></b-icon>Kevin Kössl
              </div>
            </div>
          </div>
          <text-slide :animated-text="mainHeroText" />
        </div>
      </div>
      <div v-if="$mq === 'mobile'" class="job-search-mobile">
        <job-search-carousel></job-search-carousel>
      </div>
    </div>
  </light-bulb-section>
</template>
<script>
import LightBulbSection from '../LightBulbSection.vue';
import JobSearchCarousel from './JobSearchCarousel.vue';
import JobSearchDesktop from './JobSearchDesktop.vue';
import TextSlide from '../TextSlide.vue';

export default {
  name: 'JobSearchHero',
  components: { LightBulbSection, JobSearchCarousel, TextSlide, JobSearchDesktop },
  computed: {
    mainHeroText() {
      return [
        {
          class: 'title is-size-4-mobile is-3 has-text-yellow',
          text: 'Der <strong class="has-text-weight-bold">beste</strong>',
        },
        {
          class: 'title is-size-5-mobile is-2 mt-2 is-retro has-text-primary has-text-weight-bold',
          text: 'Full-Stack-Developer',
        },
        {
          class: 'title is-size-6-mobile is-3 mt-2  has-text-yellow has-text-weight-normal',
          text: 'der <strong class="has-text-weight-bold">Welt</strong> ist auf',
        },
        {
          class: `title is-size-5-mobile is-2 mt-2 has-text-dark-desktop has-text-weight-bold is-inline-block is-relative${
            this.$mq !== 'mobile' ? ' has-underline has-text-dark' : ' has-text-primary'
          }`,
          text: 'Jobsuche!',
        },
      ];
    },
  },
};
</script>
<style lang="scss">
.job-search-mobile {
  position: absolute;
  left: -10px;
  right: 0;
  top: 550px;
}
</style>
