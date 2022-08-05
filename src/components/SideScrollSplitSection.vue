<template>
  <div class="columns">
    <div class="column is-half">
      <div class="content p-6 is-flex" ref="scrollContentV">
        <div class="title is-2 has-text-light mr-6">Photo 1</div>
        <div class="title is-2 has-text-light mr-6">Photo 2</div>
        <div class="title is-2 has-text-light mr-6">Photo 3</div>
        <div class="title is-2 has-text-light mr-6">Photo 4</div>
        <div class="title is-2 has-text-light mr-6">Photo 5</div>
      </div>
    </div>
    <div class="column is-half">
      <div
        class="sticky-container"
        ref="stickyContainer"
        :style="{ height: `${stickyContainerHeight}px` }"
        :class="{ visible: inViewport }"
      >
        <div class="has-background-dark side-scroll" ref="scrollContainerH">
          <div class="side-scroll__content p-6 is-flex" ref="scrollContent">
            <div class="title is-2 has-text-light mr-6">Photo 1</div>
            <div class="title is-2 has-text-light mr-6">Photo 2</div>
            <div class="title is-2 has-text-light mr-6">Photo 3</div>
            <div class="title is-2 has-text-light mr-6">Photo 4</div>
            <div class="title is-2 has-text-light mr-6">Photo 5</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SideScrollSplitSection',
  data() {
    return {
      stickyContainerHeight: 0,
      inViewport: false,
    };
  },

  methods: {
    scroll(evt) {
      const containerInViewPort = this.$refs.stickyContainerH;

      if (!this.isInViewport(containerInViewPort)) {
        this.inViewport = false;
        return;
      }

      this.inViewport = true;

      this.setStickyContainersSize();

      var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
      var isPlaceHolderBelowBottom =
        containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
      let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

      if (g_canScrollHorizontally) {
        this.$refs.scrollContainerH.scrollLeft += evt.deltaY;
      }
    },
    setStickyContainersSize() {
      console.log(this.$refs.scrollContainerH.offsetWidth);
      this.stickyContainerHeight = this.$refs.scrollContent.offsetWidth + window.innerHeight;
    },
    isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    },
  },
  mounted() {
    this.setStickyContainersSize();
    window.addEventListener('wheel', this.scroll);
    window.addEventListener('resize', this.setStickyContainersSize);
  },
  beforeDestroy() {
    window.removeEventListener('wheel', this.scroll);
    window.removeEventListener('resize', this.setStickyContainersSize);
  },
};
</script>
<style lang="scss">
.side-scroll {
  height: 1080px;
  overflow-x: hidden;
  position: sticky;
  top: 0;

  &__content {
    width: 3000px;
  }
}
.sticky-container {
  background: green;

  &.visible {
    .time-marker {
      opacity: 1;
    }
  }
}
</style>
