<template>
  <div class="columns">
    <div class="column is-half">
      <div class="content" ref="scrollContentV">
        <div class="hero is-fullheight" v-for="i in 6" :key="`side-scroll-photo__${i}`">
          <div class="hero-body">
            <div class="title is-2 mr-6">Photo {{ i }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-half">
      <div
        class="sticky-container"
        ref="stickyContainerH"
        :style="{ height: `${stickyContainerHeight}px` }"
        :class="{ visible: inViewport }"
      >
        <div class="has-background-dark side-scroll" ref="scrollContainerH">
          <div class="side-scroll__content is-flex" ref="scrollContentH" style="height: 100%">
            <div
              v-for="i in 6"
              :key="`side-scroll-image__${i}`"
              style="min-width: 1920px"
              class="is-clipped hero"
              :class="`is-${i % 2 ? 'primary' : 'success'}`"
            >
              <div class="hero-body has-text-centered is-flex is-align-items-center is-justify-content-center">
                <img src="https://placeimg.com/640/480/any" width="50%" style="object-fit: cover" />
              </div>
            </div>
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
      this.stickyContainerHeight = this.$refs.scrollContentH.offsetWidth + window.innerHeight;
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
    width: 100vh * 6;
  }
}
.sticky-container {
  background: green;
}
</style>
