<template>
  <div>
    <section class="hero is-medium is-black has-gridlines">
      <div class="hero-body is-relative">
        <div>
          <div class="columns is-multiline is-gapless">
            <div id="sc-valley__img-1-start-trigger"></div>
            <div class="column is-full is-half-fullhd pt-6">
              <text-slide :animated-text="heroText1" />
            </div>
            <div class="column is-full is-half-fullhd">
              <div
                :class="{
                  'px-6': ['fullhd'].includes($mq),
                  'py-6': ['mobile', 'tablet', 'desktop', 'widescreen'].includes($mq),
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
    <section class="hero is-black has-gridlines" :class="['fullhd'].includes($mq) ? 'is-large' : 'is-small'">
      <div class="hero-body">
        <div id="sc-valley__img-2-start-trigger"></div>
        <div class="columns is-multiline">
          <mq-layout :mq="['mobile', 'tablet', 'desktop', 'widescreen']" class="column is-full">
            <div v-if="['tablet', 'desktop'].includes($mq)" class="section-two"></div>
            <text-slide :animated-text="heroText2" />
          </mq-layout>

          <div
            class="column is-full is-half-tablet is-relative"
            :class="{ 'is-offset-one-third': ['tablet', 'desktop'].includes($mq) }"
          >
            <mq-layout :mq="['tablet', 'desktop']" class="py-6 my-6"></mq-layout>
            <div
              class="is-flex is-justify-content-flex-end is-relative"
              :class="{
                'px-6': ['sidescreen', 'fullhd'].includes($mq),
                'py-6': ['mobile', 'tablet', 'desktop'].includes($mq),
              }"
            >
              <canvas-3-d
                v-if="['tablet', 'desktop', 'widescreen', 'fullhd'].includes($mq)"
                class="offset-canvas is-absolute"
                style="width: 800px; height: 800px"
              ></canvas-3-d>

              <div :style="`width: ${!['mobile', 'tablet', 'desktop'].includes($mq) ? '400px' : '100%'}`">
                <div class="is-retro has-background-light px-4" id="sc-valley__img-2">
                  <b-image :src="require('@/assets/img/kevin-cutout.png')" ratio="is5by7" />
                </div>
              </div>
            </div>
            <template v-if="$mq === 'mobile'">
              <div class="section-two"></div>
              <canvas-3-d></canvas-3-d>
            </template>
          </div>
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
          class: 'title is-size-6-mobile is-size-4-tablet is-4 has-text-white has-text-right-fullhd',
          text: 'Während er',
        },
        {
          class: 'title is-size-6-mobile is-size-4-tablet is-4 has-text-white has-text-right-fullhd',
          text: 'sein <span class="has-text-weight-bold has-text-white">Glück</span> vermutlich ',
        },
        {
          class: 'title is-size-6-mobile is-4 has-text-white has-text-right-fullhd is-family-secondary',
          text: 'im  <span class="title is-size-6-mobile is-size-4-tablet is-size-4-fullhd is-3 has-text-weight-bold has-text-primary is-retro"> Silicon Valley</span>',
        },
        {
          class: 'title is-size-6-mobile is-4 has-text-white has-text-right-fullhd',
          text: 'versucht...',
        },
      ],
      heroText2: [
        {
          class: 'title is-size-6-mobile is-4 has-text-white has-text-right has-text-left-fullhd',
          text: '...fühle ich mich',
        },
        {
          class: 'title is-size-6-mobile is-4 has-text-white has-text-right has-text-left-fullhd',
          text: 'im <span class="title  is-size-6-mobile is-4 has-text-weight-bold has-text-primary is-family-secondary is-retro">Pott</span> bestens',
        },
        {
          class: 'title is-size-6-mobile is-4 has-text-white has-text-right has-text-left-fullhd',
          text: 'aufgehoben.',
        },
      ],
    };
  },

  methods: {
    setUpTimeline1() {
      const scrub = 1;
      this.timeline1 = gsap.timeline({
        scrollTrigger: {
          trigger: `#sc-valley__img-1-start-trigger`,
          endTrigger: `#sc-valley__img-1-end-trigger`,
          start: 'top 100%',

          scrub,
          end: 'bottom 0%',
        },
      });

      this.timeline1.fromTo('#sc-valley__img-1', { x: '-50%' }, { x: '0%', ease: 'power4.out' });
    },
    setUpTimeline2() {
      const scrub = 1;

      this.timeline2 = gsap.timeline({
        scrollTrigger: {
          trigger: `#sc-valley__img-2-start-trigger`,
          endTrigger: `#sc-valley__img-2-end-trigger`,
          start: 'top 100%',

          scrub,
          end: 'bottom 0%',
        },
      });

      this.timeline2.fromTo('#sc-valley__img-2', { y: '50%' }, { y: '-50%' });
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
    left: -90%;
    top: -50%;
  }
}

@media screen and (min-width: $widescreen) {
  .offset-canvas {
    left: -40%;
    top: -107%;
  }
}

@media screen and (min-width: $fullhd) {
  .offset-canvas {
    left: -200px;
    top: -107%;
  }
}
</style>
