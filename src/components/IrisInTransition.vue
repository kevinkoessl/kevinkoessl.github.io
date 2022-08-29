<template>
  <div
    class="sticky-container iris-container"
    ref="stickyContainer"
    :style="{ height: `${stickyContainerHeight}px` }"
    :class="{ visible: inViewport }"
  >
    <div class="iris-in" ref="irisContainer">
      <transition>
        <div class="scale-circle" :style="`transform: scale(${irisScale})`">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            viewBox="0 0 4519 3213"
            preserveAspectRatio="xMidYMid slice"
            class="plus"
            __source="[object Object]"
          >
            <path
              fill="#000000"
              d="M4519,0 L4519,3213 L0,3213 L0,0 L4519,0 Z M2322,1587.74993 L2278.24999,1587.74999 L2278.25006,1544 L2240.75003,1544 L2240.74994,1587.75003 L2197,1587.75011 L2197,1625.24989 L2240.74991,1625.25007 L2240.75008,1669 L2278.24992,1669 L2278.24996,1625.25003 L2322,1625.24999 L2322,1587.74993 Z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IrisInTransition',
  data() {
    return {
      stickyContainerHeight: 1920,
      inViewport: false,
      oldScrollValue: 0,
      newScrollValue: 0,
      irisScale: 1,
      stickyContainerPosition: 0,
    };
  },

  methods: {
    scroll() {
      const containerInViewPort = this.$refs.stickyContainer;

      if (!this.isInViewport(containerInViewPort)) {
        this.inViewport = false;
        return;
      }

      this.inViewport = true;

      /**var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
      var isPlaceHolderBelowBottom =
        containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;*/
      console.log('containerInViewPort.offsetTop ', containerInViewPort.offsetTop);
      console.log('document.documentElement.scrollTop', document.documentElement.scrollTop);
      console.log('Value I', document.documentElement.scrollTop - containerInViewPort.offsetTop);
      //console.log('Value II', document.documentElement.scrollTop + containerInViewPort.getBoundingClientRect().top);
      console.log(
        'value III',
        document.documentElement.scrollTop - (containerInViewPort.offsetTop + containerInViewPort.offsetHeight)
      );

      var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
      var isPlaceHolderBelowBottom =
        containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
      let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

      if (g_canScrollHorizontally) {
        //this.$refs.scrollContainer.scrollLeft += evt.deltaY;
      }
    },

    isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    },
  },
  mounted() {
    window.addEventListener('wheel', this.scroll);

    /** 
    document.addEventListener('scroll', () => {
      this.newScrollValue = window.pageYOffset;
      let scrollOffset = this.newScrollValue - this.oldScrollValue;

      let wheelEvent = new WheelEvent('wheel', { deltaY: scrollOffset });
      this.oldScrollValue = this.newScrollValue;
      window.dispatchEvent(wheelEvent);
    });

    window.addEventListener('resize', this.setStickyContainersSize);
     */
  },
  beforeDestroy() {
    window.removeEventListener('wheel', this.scroll);
    window.removeEventListener('resize', this.setStickyContainersSize);
  },
};
</script>
<style lang="scss" scoped>
.iris-in {
  height: 1080px;
  overflow: hidden;
  position: sticky;
  top: 0;

  &__content {
    width: 1920px;
  }
}

.sticky-container.iris-container {
  position: sticky;
  width: calc(100vw + 4px);
  height: calc(100vh + 4px);
  top: 0;
  left: 0;
  contain: layout;
  pointer-events: none;
  margin-top: 0;
  overflow: hidden;
  max-width: 100vw;
  z-index: 20;
}

.debug {
  position: static;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  color: black;
}
</style>
