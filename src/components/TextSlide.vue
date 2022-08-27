<template>
  <div class="text-slide" ref="container">
    <template v-for="(textBlock, index) in animatedText">
      <div :key="`animated-text-block__${index}`">
        <div class="pr-2 is-clipped">
          <transition name="slide-text-up">
            <div v-if="isVisible[index]" :class="textBlock.class" v-html="textBlock.text" />
          </transition>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'TextSlide',

  props: { animatedText: { type: Array, required: true } },
  data() {
    return {
      interval: null,
      isVisible: [],
    };
  },

  methods: {
    revealText() {
      let counter = 0;

      this.interval = setInterval(() => {
        if (counter >= this.isVisible.length) return clearInterval(this.interval);

        let isVisible = [...this.isVisible];
        isVisible[counter++] = true;

        this.isVisible = isVisible;
      }, 250);
    },
    isInView(scrollOffset = 0) {
      const containerTop = this.$refs.container.getBoundingClientRect().top;

      return containerTop <= (window.innerHeight || document.documentElement.clientHeight) - scrollOffset;
    },
    scroll() {
      if (this.isInView(100)) {
        this.revealText();
      }
    },
  },

  created() {
    let isVisible = [];
    this.animatedText.forEach(() => {
      isVisible.push(false);
    });
    this.isVisible = isVisible;
  },

  mounted() {
    window.addEventListener('scroll', this.scroll);
    if (this.isInView(100)) this.revealText();
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.scroll);
  },
};
</script>
<style lang="scss">
/** 
.title.has-text-white {
  //color: #b5d99c !important;
  //text-shadow: -2px -2px 0 #ffffff, 2px -2px 0 #ffffff, -2px 2px 0 #ffffff, 2px 2px 0 #ffffff;
  //background-image: linear-gradient(90deg, #88af6c, #52a560, #387249);
  //background-clip: text;
  //color: transparent;
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
}
*/
</style>
