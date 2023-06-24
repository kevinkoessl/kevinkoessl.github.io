<template>
  <div
    class="sticky-container"
    ref="stickyContainer"
    :style="{ height: `${stickyContainerHeight}px` }"
    :class="{ visible: inViewport }"
  >
    <div class="has-background-dark side-scroll" ref="scrollContainer">
      <div class="side-scroll__content p-6" ref="scrollContent">
        <div class="columns">
          <div class="column is-2">
            <div class="box has-background-primary has-text-light">Kick</div>
          </div>
          <div class="column is-2">
            <div class="box has-background-primary has-text-light">Kick</div>
          </div>
          <div class="column is-2">
            <div class="box has-background-primary has-text-light">Kick</div>
          </div>
          <div class="column is-2">
            <div class="box has-background-primary has-text-light">Kick</div>
          </div>
          <div class="column is-2">
            <div class="box has-background-primary has-text-light">Kick</div>
          </div>
          <div class="column is-2">
            <div class="box has-background-primary has-text-light">Kick</div>
          </div>
          <div class="column is-2">
            <div class="box has-background-primary has-text-light">Kick</div>
          </div>
          <div class="column is-2">
            <div class="box has-background-primary has-text-light">Kick</div>
          </div>
          <div class="column is-2">
            <div class="box has-background-primary has-text-light">Kick</div>
          </div>
          <div class="column is-2">
            <div class="box has-background-primary has-text-light">Kick</div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <div class="box has-background-info has-text-light">Chords</div>
          </div>
          <div class="column is-4">
            <div class="box has-background-info has-text-light">Chords</div>
          </div>
          <div class="column is-4">
            <div class="box has-background-info has-text-light">Chords</div>
          </div>
          <div class="column is-4">
            <div class="box has-background-info has-text-light">Chords</div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-1 is-offset-8">
            <div class="box has-background-warning has-text-light">Clap</div>
          </div>
          <div class="column is-1">
            <div class="box has-background-warning has-text-light">Clap</div>
          </div>
          <div class="column is-1">
            <div class="box has-background-warning has-text-light">Clap</div>
          </div>
          <div class="column is-1">
            <div class="box has-background-warning has-text-light">Clap</div>
          </div>
          <div class="column is-1">
            <div class="box has-background-warning has-text-light">Clap</div>
          </div>
          <div class="column is-1">
            <div class="box has-background-warning has-text-light">Clap</div>
          </div>
          <div class="column is-1">
            <div class="box has-background-warning has-text-light">Clap</div>
          </div>
          <div class="column is-1">
            <div class="box has-background-warning has-text-light">Clap</div>
          </div>
          <div class="column is-1">
            <div class="box has-background-warning has-text-light">Clap</div>
          </div>
          <div class="column is-1">
            <div class="box has-background-warning has-text-light">Clap</div>
          </div>
          <div class="column is-1">
            <div class="box has-background-warning has-text-light">Clap</div>
          </div>
          <div class="column is-1">
            <div class="box has-background-warning has-text-light">Clap</div>
          </div>
        </div>
      </div>
      <div class="time-marker"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SideScrollBeatTimeline',
  data() {
    return {
      stickyContainerHeight: 0,
      inViewport: false,
      oldScrollValue: 0,
      newScrollValue: 0,
    };
  },

  methods: {
    scroll(evt) {
      const containerInViewPort = this.$refs.stickyContainer;

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
        this.$refs.scrollContainer.scrollLeft += evt.deltaY;
      }
    },
    setStickyContainersSize() {
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
    document.addEventListener('scroll', () => {
      this.newScrollValue = window.pageYOffset;
      let scrollOffset = this.newScrollValue - this.oldScrollValue;

      let wheelEvent = new WheelEvent('wheel', { deltaY: scrollOffset });
      this.oldScrollValue = this.newScrollValue;
      window.dispatchEvent(wheelEvent);
    });
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
    width: 1920px;
  }
}
.sticky-container {
  .time-marker {
    display: block;
    height: 1080px;
    width: 1px;
    position: fixed;
    left: 80%;
    top: 0;
    background: yellow;
    box-shadow: 0px 0px 5px yellow;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  &.visible {
    .time-marker {
      opacity: 1;
    }
  }
}
</style>
