<template>
  <div class="text-slide" ref="container" :id="`text-slide_${_uid}`">
    <div :id="`text-slide-trigger_${_uid}`"></div>
    <template v-for="(textBlock, index) in animatedText">
      <div :key="`animated-text-block__${index}`">
        <div class="pr-2">
          <div
            :id="`text-slide_${_uid}-line`"
            :class="textBlock.class"
            v-html="textBlock.text"
            class="text-slide-line"
          />
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import gsap from 'gsap';
import { BREAKPOINTS } from '@/consts/break-points';

export default {
  name: 'TextSlide',

  props: {
    animatedText: { type: Array, required: true },
    isActive: { type: Boolean, required: false, default: true },
  },

  data() {
    return {
      timeline: null,
    };
  },

  methods: {
    setUpTimeline() {
      if (!this.isActive) return;

      let mm = gsap.matchMedia();

      mm.add(`(min-width: ${BREAKPOINTS.mobile}px)`, () => {
        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: `#text-slide-trigger_${this._uid}`,
            scrub: true,
            start: 'top 70%',
            end: '+=400',
          },
        });

        timeline.from(`#text-slide_${this._uid} .text-slide-line:not(.slide-left)`, {
          x: '100px',
          opacity: 0,
          ease: 'power1.out',
          stagger: {
            amount: 0.5,
            ease: 'linear',
          },
        });
      });
    },
  },

  mounted() {
    this.setUpTimeline();
  },
};
</script>
