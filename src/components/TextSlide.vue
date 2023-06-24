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

export default {
  name: 'TextSlide',

  props: { animatedText: { type: Array, required: true } },

  data() {
    return {
      timeline: null,
    };
  },

  mounted() {
    this.timeline = gsap.timeline({
      scrollTrigger: {
        trigger: `#text-slide-trigger_${this._uid}`,
        scrub: true,

        start: 'top 70%',
        end: '+=400',
      },
    });

    this.timeline.from(`#text-slide_${this._uid} .text-slide-line:not(.slide-left)`, {
      x: '100px',

      opacity: 0,
      ease: 'power1.out',
      stagger: {
        amount: 0.5,
        ease: 'linear',
      },
    });
  },
};
</script>
<style lang="scss">
/** 
.title.has-text-white {
  //color: #b5d99c !important;
  //text-shadow: -2px -2px 0 #ffffff, 2px -2px 0 #ffffff, -2px 2px 0 #ffffff, 2px 2px 0 #ffffff;
  //background-image: linear-gradient(90deg, #88af6c, #52a560, #387249);
  //background-clip: text;
  //color: transparent;
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
}
*/
</style>
