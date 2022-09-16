<template>
  <section
    :class="type"
    class="light-blub-section hero is-fullheight"
    ref="container"
    @mouseenter="moveLight($event)"
    @mouseleave="dimLight()"
  >
    <div
      class="light-blub-section__light"
      :class="type === 'is-light' ? 'is-dark' : 'is-light'"
      :style="lightStyle"
    ></div>
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'LightBulbSection',
  props: {
    type: {
      required: false,
      default: 'is-light',
    },
  },
  data() {
    return {
      lightScale: 0.5,
      lightOpacity: 0,
      lightPosition: {
        x: 0,
        y: 0,
      },
      containerPosition: {
        x: 0,
        y: 0,
      },
    };
  },
  computed: {
    textClass() {
      return this.type.replace('is', 'has-text');
    },
    lightStyle() {
      return {
        transform: `translate3d(${this.lightPosition.x}px, ${
          this.lightPosition.y - this.containerPosition.y
        }px, 0) scale(${this.lightScale})`,
        opacity: this.lightOpacity,
      };
    },
  },
  methods: {
    moveLight(event) {
      let containerRect = this.$refs.container.getBoundingClientRect();

      this.lightScale = 1;
      this.lightOpacity = 1;
      this.containerPosition = {
        x: containerRect.x,
        y: containerRect.y,
      };
      this.lightPosition = {
        x: event.clientX - 250,
        y: event.clientY - 250,
      };
    },
    dimLight() {
      this.lightScale = 0.5;
      this.lightOpacity = 0;
    },
  },
  mounted() {
    window.addEventListener('mousemove', this.moveLight);
    window.addEventListener('scroll', this.moveLight);
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.moveLight);
    window.removeEventListener('scroll', this.moveLight);
  },
};
</script>
<style lang="scss">
.light-blub-section {
  user-select: none;
  position: relative;
  overflow: hidden;
  &__light {
    display: block;
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(rgba(255, 255, 255, 1), rgba(250, 255, 129, 0.3) 50%, rgba(250, 255, 129, 0) 51%);
    mix-blend-mode: difference;
    &.is-dark {
      background: radial-gradient(#111111, rgba(255, 255, 255, 0) 70%);
    }
    transition: all 3000ms cubic-bezier(0.1, 1.58, 0.19, 0.96);
  }
}
</style>
