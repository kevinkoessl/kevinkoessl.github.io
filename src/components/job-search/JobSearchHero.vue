<template>
  <light-bulb-section type="is-black" class="has-gridlines" :has-light="hasLight">
    <job-search-desktop v-if="['desktop', 'widescreen', 'fullhd'].includes($mq)"></job-search-desktop>
    <div class="hero-body is-relative">
      <div
        class="hero-body__content"
        :class="{ 'p-6': ['desktop', 'widescreen', 'fullhd'].includes($mq) }"
        :id="`content_${_uid}`"
      >
        <div :class="{ 'container is-fluid': ['widescreen', 'fullhd'].includes($mq) }">
          <div v-if="!['desktop', 'widescreen', 'fullhd'].includes($mq)" class="level is-mobile">
            <div class="level-left">
              <div class="level-item">
                <!--b-icon type="is-yellow" icon="xml" class="job-search__icon icon-2"></b-icon>Kevin Kö<ssl-->
                <b-switch v-model="hasLight" outlined type="is-white" size="is-small">{{ lightSwitchLabel }} </b-switch>
              </div>
            </div>
          </div>
          <text-slide :animated-text="mainHeroText" class="mb-6" :is-active="false" />
          <div v-if="!['desktop', 'widescreen', 'fullhd'].includes($mq)" class="job-search-mobile">
            <job-search-carousel :has-light="hasLight"></job-search-carousel>
          </div>
          <b-switch
            v-if="['desktop', 'widescreen', 'fullhd'].includes($mq)"
            v-model="hasLight"
            outlined
            type="is-white"
            size="is-small"
            >{{ lightSwitchLabel }}
          </b-switch>
          <div class="scroll-down is-flex is-justify-content-center is-align-items-center">
            <div
              class="scroll-down-button is-flex is-justify-content-center is-align-items-center"
              :class="{ 'is-animated': animated }"
              @click="scrollDown"
              @mouseenter="animated = false"
              @mouseleave="animated = true"
            >
              <b-icon icon="chevron-down" type="is-light" size="is-medium"></b-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </light-bulb-section>
</template>
<script>
import gsap from 'gsap';

import { BREAKPOINTS } from '@/consts/break-points';
import LightBulbSection from '../LightBulbSection.vue';
import JobSearchCarousel from './JobSearchCarousel.vue';
import JobSearchDesktop from './JobSearchDesktop.vue';
import TextSlide from '../TextSlide.vue';

export default {
  name: 'JobSearchHero',
  components: { LightBulbSection, JobSearchCarousel, TextSlide, JobSearchDesktop },

  data() {
    return {
      timeline: null,
      hasLight: false,
      animated: true,
    };
  },

  computed: {
    lightSwitchLabel() {
      return !this.hasLight ? 'Licht' : 'Licht';
    },
    mainHeroText() {
      return [
        {
          class: 'title is-size-6-mobile is-size-5-tablet is-size-4-fullhd is-3 has-text-white',
          text: 'Der <strong class="has-text-weight-bold">beste</strong>',
        },
        {
          class:
            'title is-size-6-mobile is-size-4-tablet is-size-3-fullhd is-2 mt-2 is-retro has-text-primary has-text-weight-bold is-family-secondary',
          text: 'Full-Stack-Developer',
        },
        {
          class:
            'title is-size-6-mobile is-size-5-tablet is-size-4-fullhd is-3 mt-2  has-text-white has-text-weight-normal',
          text: 'der <strong class="has-text-weight-bold">Welt</strong> sucht eine',
        },
        {
          class: `title is-size-6-mobile is-size-4-tablet is-size-3-fullhd is-2 mt-2 has-text-dark-desktop has-text-weight-bold is-inline-block is-relative${
            ['desktop', 'widescreen', 'fullhd'].includes(this.$mq)
              ? ' has-underline has-text-black slide-left'
              : ' has-text-primary'
          }`,
          text: 'Challenge!',
        },
      ];
    },
  },

  methods: {
    scrollDown() {
      window.scrollTo({ top: this.$mq !== 'mobile' ? 1000 : 800, behavior: 'smooth' });
    },
    setUpTimeline() {
      const scrub = true;

      const mm = gsap.matchMedia();

      mm.add(`(min-width: ${BREAKPOINTS.desktop}px)`, () => {
        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: `#text-wall-start-trigger_${this._uid}`,
            scrub,
            start: 'top 0%',
            end: '+=1300',
          },
        });

        timeline.to(`#content_${this._uid}`, {
          y: '-30%',
        });
      });
    },
  },
  mounted() {
    this.setUpTimeline();
  },
};
</script>
<style lang="scss">
@import '~@/styles/main.scss';
.scroll-down-button {
  border: 1px solid $white;
  border-radius: 50%;
  transition: box-shadow 0.15s ease-in-out;
  box-shadow: 0 0 0 0 hsla(0, 0%, 100%, 0.7);
  cursor: pointer;

  margin-top: 100px;

  @media screen and (min-width: $tablet) {
    margin-top: 50px;
  }

  @media screen and (min-width: $widescreen) {
    margin-top: 0;
  }
  &:hover {
    transition: box-shadow 0.7s cubic-bezier(0.31, 0.46, 0.02, 1);
    box-shadow: 0 0 0 30px hsla(0, 0%, 100%, 0.2);
  }

  &.is-animated {
    -webkit-animation: bounce 2s infinite 2s;
    animation: bounce 2s infinite 2s;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    transform: scale(1);
  }
}

@keyframes bounce {
  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  60% {
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}
</style>
