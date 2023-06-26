<template>
  <div class="has-background-white">
    <section class="hero is-medium has-gridlines">
      <div class="hero-body is-relative">
        <div>
          <div class="columns is-multiline is-gapless">
            <div id="sc-valley__img-1-start-trigger"></div>
            <div class="column is-full is-half-desktop pt-6">
              <mq-layout :mq="['mobile', 'tablet', 'desktop', 'widescreen']">
                <div v-if="['tablet'].includes($mq)" class="section-two"></div>
                <div class="title is-6 has-text-right-desktop">
                  Während er sein Glück vermutlich im
                  <span class="has-text-primary is-family-secondary">Silicon Valley</span> versucht...
                </div>
              </mq-layout>
              <mq-layout :mq="['fullhd']"><text-slide :animated-text="heroText1" /></mq-layout>
            </div>
            <div class="column is-full is-half-desktop">
              <div
                :class="{
                  'px-6': ['desktop', 'widescreen', 'fullhd'].includes($mq),
                  'py-6': ['mobile', 'tablet'].includes($mq),
                }"
              >
                <div
                  :style="`${!['mobile', 'tablet', 'desktop', 'widescreen'].includes($mq) && 'width: 80%'}`"
                  class="is-retro is-primary"
                  id="sc-valley__img-1"
                >
                  <b-image :src="require('@/assets/img/silicon-valley.png')" ratio="is4by3"></b-image>
                </div>
              </div>
            </div>
            <div id="sc-valley__img-1-end-trigger"></div>
          </div>
        </div>
      </div>
    </section>
    <div v-if="['widescreen', 'fullhd'].includes($mq)" class="section-two"></div>
    <section class="hero is-white has-gridlines" :class="['fullhd'].includes($mq) ? 'is-large' : 'is-small'">
      <div class="hero-body">
        <div id="sc-valley__img-2-start-trigger"></div>
        <div class="columns is-multiline">
          <mq-layout :mq="['mobile', 'tablet']" class="column is-full">
            <div :class="{ 'px-6': ['tablet'].includes($mq) }">
              <div v-if="['tablet', 'desktop'].includes($mq)" class="section-two"></div>
              <div class="title is-6 has-text-right-mobile has-text-right-tablet">
                ...fühle ich mich im <span class="has-text-primary is-family-secondary">Pott</span> bestens aufgehoben.
              </div>
            </div>
          </mq-layout>

          <div class="column is-one-third-desktop is-relative is-offset-2-desktop">
            <mq-layout :mq="['desktop']" class="py-6 my-6"></mq-layout>

            <div
              class="is-flex is-justify-content-flex-end is-relative"
              :class="{
                'px-6': ['tablet'].includes($mq),
                'px-4': ['desktop', 'widescreen', 'fullhd'].includes($mq),
                'py-4': ['mobile', 'tablet'].includes($mq),
              }"
            >
              <canvas-3-d
                v-if="['desktop', 'widescreen', 'fullhd'].includes($mq)"
                class="offset-canvas is-absolute"
                style="width: 800px; height: 800px"
              ></canvas-3-d>

              <div :style="`width: ${!['mobile', 'tablet', 'desktop'].includes($mq) ? '400px' : '100%'}`">
                <div class="is-retro has-background-light px-4" id="sc-valley__img-2">
                  <b-image :src="require('@/assets/img/kevin-cutout.png')" ratio="is5by7" />
                </div>
              </div>
            </div>
            <template v-if="['mobile', 'tablet'].includes($mq)">
              <div class="section-two"></div>
              <canvas-3-d></canvas-3-d>
            </template>
          </div>
          <mq-layout :mq="['desktop', 'widescreen']" class="column is-half is-flex-desktop is-align-items-center">
            <div class="title is-6">
              ...fühle ich mich im <span class="has-text-primary is-family-secondary">Pott</span> bestens aufgehoben.
            </div>
          </mq-layout>
          <mq-layout :mq="['fullhd']" class="column is-half">
            <text-slide :animated-text="heroText2" />
            <div v-if="$mq === 'tablet'" class="section-two"></div>
          </mq-layout>
        </div>
        <div id="sc-valley__img-2-end-trigger"></div>
      </div>
    </section>
    <div class="section-five"></div>
  </div>
</template>
<script>
import gsap from 'gsap';

import { BREAKPOINTS } from '@/consts/break-points';

import TextSlide from '../TextSlide.vue';
import Canvas3D from './Canvas3D.vue';

export default {
  name: 'SiliconValleyHero',

  components: {
    TextSlide,
    Canvas3D,
  },

  data() {
    return {
      timeline1: null,
      timeline2: null,
      heroText1: [
        {
          class: 'title is-size-6-mobile is-size-4-tablet is-4 has-text-black has-text-right-fullhd',
          text: 'Während er',
        },
        {
          class: 'title is-size-6-mobile is-size-4-tablet is-4 has-text-black has-text-right-fullhd',
          text: 'sein <span class="has-text-weight-bold has-text-black">Glück</span> vermutlich ',
        },
        {
          class: 'title is-size-6-mobile is-4 has-text-black has-text-right-fullhd is-family-secondary',
          text: 'im  <span class="title is-size-6-mobile is-size-4-tablet is-size-4-fullhd is-3 has-text-weight-bold has-text-primary is-retro"> Silicon Valley</span>',
        },
        {
          class: 'title is-size-6-mobile is-4 has-text-black has-text-right-fullhd',
          text: 'versucht...',
        },
      ],
      heroText2: [
        {
          class: 'title is-size-6-mobile is-4 has-text-black has-text-right has-text-left-fullhd',
          text: '...fühle ich mich',
        },
        {
          class: 'title is-size-6-mobile is-4 has-text-black has-text-right has-text-left-fullhd',
          text: 'im <span class="title  is-size-6-mobile is-4 has-text-weight-bold has-text-primary is-family-secondary is-retro">Pott</span> bestens',
        },
        {
          class: 'title is-size-6-mobile is-4 has-text-black has-text-right has-text-left-fullhd',
          text: 'aufgehoben.',
        },
      ],
    };
  },

  methods: {
    setUpTimeline1() {
      const scrub = 1;

      let mm = gsap.matchMedia();

      mm.add(`(min-width: ${BREAKPOINTS.desktop}px)`, () => {
        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: `#sc-valley__img-1-start-trigger`,
            endTrigger: `#sc-valley__img-1-end-trigger`,
            start: 'top 100%',

            scrub,
            end: 'bottom 0%',
          },
        });

        timeline.fromTo('#sc-valley__img-1', { x: '-50%' }, { x: '0%', ease: 'power4.out' });
      });
    },
    setUpTimeline2() {
      const scrub = 1;

      let mm = gsap.matchMedia();

      mm.add(`(min-width: ${BREAKPOINTS.desktop}px)`, () => {
        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: `#sc-valley__img-2-start-trigger`,
            endTrigger: `#sc-valley__img-2-end-trigger`,
            start: 'top 100%',
            scrub,
            end: 'bottom 0%',
          },
        });

        timeline.fromTo('#sc-valley__img-2', { y: '50%' }, { y: '-10%', ease: 'power4.out' });
      });
    },
  },
  mounted() {
    this.setUpTimeline1();
    this.setUpTimeline2();
  },
};
</script>
<style lang="scss">
.offset-canvas {
  left: -115%;
  top: -70%;
}

@media screen and (min-width: $desktop) {
  .offset-canvas {
    left: -110%;
    top: -110%;
  }
}

@media screen and (min-width: $widescreen) {
  .offset-canvas {
    left: -115%;
    top: -139%;
  }
}

@media screen and (min-width: $fullhd) {
  .offset-canvas {
    left: -467px;
    top: -107%;
  }
}
</style>
