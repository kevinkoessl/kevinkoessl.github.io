<template>
  <light-bulb-section type="is-dark">
    <job-search-desktop v-if="['desktop', 'widescreen', 'fullhd'].includes($mq)"></job-search-desktop>
    <div class="hero-body is-relative">
      <div class="hero-body__content" :class="{ 'p-6': ['desktop', 'widescreen', 'fullhd'].includes($mq) }">
        <div :class="{ 'container is-fluid': ['widescreen', 'fullhd'].includes($mq) }">
          <div v-if="!['desktop', 'widescreen', 'fullhd'].includes($mq)" class="level is-mobile">
            <div class="level-left">
              <div class="level-item">
                <b-icon type="is-yellow" icon="xml" class="job-search__icon icon-2"></b-icon>Kevin Kössl
              </div>
            </div>
          </div>
          <text-slide :animated-text="mainHeroText" class="mb-6" />
          <div v-if="!['desktop', 'widescreen', 'fullhd'].includes($mq)" class="job-search-mobile">
            <job-search-carousel></job-search-carousel>
          </div>
        </div>
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
            ['desktop', 'widescreen', 'fullhd'].includes(this.$mq)
              ? ' has-underline has-text-dark slide-left'
              : ' has-text-primary'
          }`,
          text: 'Jobsuche!',
        },
      ];
    },
  },
};
</script>
<style lang="scss"></style>
