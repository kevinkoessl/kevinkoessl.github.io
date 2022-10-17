<template>
  <div class="job-search-carousel">
    <div class="light-bulb"></div>
    <b-carousel :interval="2500" :pause-info="false" :arrow="false" :indicator="false">
      <b-carousel-item v-for="icon in drinkIcons" :key="`job-search-mobile__${icon}`">
        <div class="flip has-text-centered">
          <b-icon :icon="icon" size="is-large" :type="randomColor()"></b-icon>
        </div>
      </b-carousel-item>
    </b-carousel>
    <div class="search is-flex is-justify-content-center">
      <b-icon type="is-yellow" size="is-large" icon="magnify"></b-icon>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JobSearchCarousel',
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
      availableColors: [{ name: 'dark' }],
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

  top: 18px;
  left: 39px;
  right: 0;

  .icon {
    margin: auto;
    transform: scale(5);
  }
}
.light-bulb {
  display: block;
  position: absolute;
  top: -27px;
  left: 0;
  right: 0;
  margin: auto;
  width: 115px;
  height: 115px;
  background: radial-gradient(rgba(255, 255, 255, 1), rgba(250, 255, 129, 0.3) 50%, rgba(250, 255, 129, 0) 51%);
  mix-blend-mode: difference;
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
