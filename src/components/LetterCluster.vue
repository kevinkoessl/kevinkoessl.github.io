<template>
  <div class="word-cluster" @mouseenter="scattered = false" @mouseleave="scattered = true">
    <p
      v-for="(word, index) in words"
      :key="`word-cluster__word-${index}`"
      :style="positions[index]"
      class="word-cluster__word"
    >
      {{ word }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'WordCluster',
  props: {
    words: [],
  },
  data() {
    return {
      scattered: true,
    };
  },
  computed: {
    positions() {
      return this.words.map(() => {
        let rotate = 180 - Math.floor(Math.random() * 360);
        let rotateX = 90 - Math.floor(Math.random() * 180);
        let translateX = Math.floor(Math.random() * 100 - 20);
        let translateY = Math.floor(Math.random() * 100 - 20);

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
  user-select: none;
  &__word {
    transition: all 2000ms cubic-bezier(0.31, 0.45, 0.19, 1);
    line-height: 9rem;
  }
}
</style>
