<template>
  <section :class="type" class="light-blub-section hero is-fullheight" ref="container">
    <div
      class="light-blub-section__light"
      :class="type === 'is-light' ? 'is-dark' : 'is-light'"
      :style="lightStyle"
    ></div>
    <div class="hero-body">
      <div class="container">
        <div :class="textClass">
          <slot></slot>
        </div>
      </div>
    </div>
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
        transform: `translate3d(${this.lightPosition.x}px, ${this.lightPosition.y - this.containerPosition.y}px, 0)`,
      };
    },
  },
  methods: {
    moveLight(event) {
      let containerRect = this.$refs.container.getBoundingClientRect();
      this.containerPosition = {
        x: containerRect.x,
        y: containerRect.y,
      };
      this.lightPosition = {
        x: event.clientX - 250,
        y: event.clientY - 250,
      };
    },
  },
  mounted() {
    window.addEventListener('mousemove', this.moveLight);
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.moveLight);
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
    background: radial-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 70%);
    &.is-dark {
      background: radial-gradient(#111111, rgba(255, 255, 255, 0) 70%);
    }
    transition: all 3000ms cubic-bezier(0.1, 1.58, 0.19, 0.96);
  }
}
</style>
