<template>
  <div class="sticky-container iris-container" ref="stickyContainer">
    <div id="iris-trigger"></div>
    <div class="iris-in" ref="irisContainer">
      <div class="scale-circle" id="iris-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          width="100%"
          viewBox="0 0 4519 3213"
          preserveAspectRatio="xMidYMid slice"
          class="plus"
        >
          <path
            fill="#f5f7dc"
            d="M4519,0 L4519,3213 L0,3213 L0,0 L4519,0 Z M2322,1587.74993 L2278.24999,1587.74999 L2278.25006,1544 L2240.75003,1544 L2240.74994,1587.75003 L2197,1587.75011 L2197,1625.24989 L2240.74991,1625.25007 L2240.75008,1669 L2278.24992,1669 L2278.24996,1625.25003 L2322,1625.24999 L2322,1587.74993 Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'IrisInTransition',
  data() {
    return {
      timeline: null,
    };
  },
  mounted() {
    let timeline;

    const setUpScrollTrigger = () => {
      if (timeline) timeline.kill();

      let triggerStart = '-=100';
      if (this.$mq === 'mobile') triggerStart = 'top top';
      if (this.$mq === 'tablet') triggerStart = 'top 25%';

      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: `#iris-trigger`,
          start: triggerStart,
          end: '+=800',
          scrub: true,
          pinnedContainer: true,
        },
      });

      timeline.fromTo(`#iris-circle`, { scale: 5 }, { scale: 180, y: '300%', ease: 'power1.inOut' });
    };

    setUpScrollTrigger();
    window.addEventListener('resize', setUpScrollTrigger);
  },
  beforeDestroy() {},
};
</script>
<style lang="scss" scoped>
.iris-in {
  height: 1080px;
  top: 0;
  overflow: hidden;
  position: sticky;

  &__content {
    width: 1920px;
  }
}

.sticky-container.iris-container {
  width: calc(100vw + 4px);
  height: calc(100vh + 4px);
  top: 0;
  left: 0;
  contain: layout;
  pointer-events: none;
  margin-top: 0;
  max-width: 100vw;
  z-index: 2000;
  position: sticky;
}
</style>
