<template>
  <div class="job-search-carousel">
    <div class="light-bulb" :class="{ 'is-on': hasLight }"></div>
    <b-carousel :interval="2500" :pause-info="false" :arrow="false" :indicator="false">
      <b-carousel-item v-for="icon in drinkIcons" :key="`job-search-mobile__${icon}`">
        <div class="flip has-text-centered">
          <b-icon :icon="icon" size="is-large" :type="randomColor()"></b-icon>
        </div>
      </b-carousel-item>
    </b-carousel>
    <div class="search is-flex is-justify-content-center">
      <b-icon type="is-white" size="is-large" icon="magnify"></b-icon>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JobSearchCarousel',
  props: {
    hasLight: {
      required: false,
      default: false,
    },
  },
  data() {
    return {
      drinkIcons: [
        'briefcase-outline',
        'xml',
        'laptop',
        'account-multiple',
        'currency-usd',
        'wrench-outline',
        'office-building',
      ],
      availableColors: [{ name: 'black' }],
    };
  },
  methods: {
    randomColor() {
      let color = this.availableColors[Math.floor(Math.random() * this.availableColors.length)];
      return `is-${color.name}`;
    },
  },
};
</script>
<style lang="scss">
.job-search-carousel {
  max-width: 300px;
  position: relative;
  margin: auto;
}
.search {
  display: block;
  position: absolute;
  margin: auto;
  top: 16px;
  left: 15px;
  right: 0;

  .icon {
    margin: auto;
    transform: scale(4);
  }
}
.light-bulb {
  display: block;
  position: absolute;
  top: -21px;
  left: -7px;
  right: 0;
  margin: auto;
  width: 100px;
  height: 100px;
  background: radial-gradient(rgba(255, 255, 255, 1), rgba(144, 255, 186, 0.578) 50%, rgba(250, 255, 129, 0) 51%);
  mix-blend-mode: difference;
  opacity: 0;
  scale: 0;
  transition: all 500ms cubic-bezier(0.46, 0.27, 0.59, 1.01);
  transform: translateX(-300%);

  &.is-on {
    opacity: 1;
    scale: 1;
    transform: translateX(0);
  }
}
.flip {
  animation-name: flip;
  animation-duration: 2500ms;
  animation-timing-function: cubic-bezier(0.39, 0.91, 0.56, 0.98);
  animation-iteration-count: infinite;
}
@keyframes flip {
  from,
  40% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  90% {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}
</style>
