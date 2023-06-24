<template>
  <div class="word-cluster" @mouseenter="scattered = false" @mouseleave="scattered = true">
    <component
      v-for="(word, index) in words"
      :key="`word-cluster__word-${index}`"
      :is="typeof words === 'string' ? 'span' : 'p'"
      :style="positions[index]"
      class="word-cluster__word"
    >
      {{ word }}
      <span> </span>
    </component>
  </div>
</template>
<script>
export default {
  name: 'WordCluster',
  props: {
    words: [] || String,
  },
  data() {
    return {
      scattered: true,
    };
  },
  computed: {
    positions() {
      let words = this.words;
      if (typeof words === 'string') {
        words = words.split('');
      }
      return words.map(() => {
        let rotate = 180 - Math.floor(Math.random() * 360);
        let rotateX = 90 - Math.floor(Math.random() * 180);
        let translateX = Math.floor(Math.random() * 100) - 200;
        let translateY = Math.floor(Math.random() * 100) - 200;

        if (this.scattered)
          return {
            transform: `rotate(${rotate}deg) rotateX(${rotateX}deg) translate3d(${translateX}px, ${translateY}px, 0)`,
          };
      });
    },
  },
};
</script>
<style lang="scss">
.word-cluster {
  display: inline-block;
  &__word {
    display: inline-block;
    transition: all 2000ms cubic-bezier(0.31, 0.45, 0.19, 1);
    line-height: 9rem;
  }
}
</style>
