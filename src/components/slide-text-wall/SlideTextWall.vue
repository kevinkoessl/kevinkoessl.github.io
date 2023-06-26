<template>
  <div class="text-wall is-clipped" id="text-wall" style="max-width: 100%">
    <div :id="`text-wall-start-trigger_${_uid}`"></div>
    <div class="hero is-fullheight is-relative is-primary has-gridlines has-gridlines-right is-clipped">
      <div class="hero-head"><div class="container"></div></div>

      <div class="hero-background" style="transform: translateX(-50%) rotateZ(-30deg)" :id="`text-wall-background`">
        <div
          v-for="i in 11"
          :key="`text-line_${i}`"
          style="height: unset"
          :id="`text-wall-text_${_uid}-line_${i}`"
          class="mb-4"
        >
          <span
            v-for="j in 5"
            :key="`text-line-word_${i}_${j}`"
            class="title is-2 is-size-5-mobile mx-4"
            style="white-space: nowrap"
            :class="i === 6 && j === 3 ? 'has-text-white' : 'has-text-black'"
          >
            {{ text }}
          </span>
        </div>
      </div>

      <div class="hero-body">
        <div></div>
      </div>
    </div>
    <div :id="`text-wall-end-trigger`"></div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'SlideTextWall',
  data() {
    return {
      text: `Willkommen`,
      timeline: null,
    };
  },
  methods: {
    setUpTimeline() {
      let scrub = 1;

      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: `#text-wall-start-trigger_${this._uid}`,
          endTrigger: `#text-wall-end-trigger`,
          end: 'bottom 0%',
          pin: `#text-wall-background`,
          scrub,
        },
      });

      for (let i = 1; i < 12; i++) {
        let value = Math.abs(7 - i) + 1;
        value = 7 - value;

        const direction = i % 2 === 0 ? -1 : 1;

        timeline.fromTo(
          `#text-wall-text_${this._uid}-line_${i}`,
          {
            x: direction * value * Math.pow(value, 1.5) * 5,
          },
          { x: 0 },

          0
        );
      }
    },
  },
  mounted() {
    this.setUpTimeline();
  },
};
</script>
<style lang="scss">
@import '~@/styles/main.scss';

.title.is-outlined {
  text-shadow: -2px -2px 0 $black, 2px -2px 0 $black, -2px 2px 0 $black, 2px 2px 0 $black;
}
</style>
