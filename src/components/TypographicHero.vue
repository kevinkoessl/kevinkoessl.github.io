<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body is-block">
      <!--div class="container is-fluid">
        <span class="title is-3"> Der <span class="has-text-weight-bold">beste</span> </span><br />
        <span class="title is-2 has-text-black">Full-Stack-Developer</span><br />
        <span class="title is-3">der <span class="has-text-weight-bold has-text-bold">Welt</span> ist auf</span><br />
        <span class="title is-2 has-text-black">Jobsuche!</span>
      </div>-->
      <div class="container is-fluid">
        <template v-for="(textBlock, index) in animatedText">
          <div :key="`animated-text-block__${index}`">
            <div class="is-clipped">
              <transition name="slide-text-up">
                <div v-if="isVisible[index]" :class="textBlock.class">
                  {{ textBlock.text }}
                </div>
              </transition>
            </div>
            <br />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TypographicHero',

  data() {
    return {
      interval: null,
      isVisible: [],
      animatedText: [
        {
          class: 'title is-3 has-text-white',
          text: 'Der beste',
        },
        {
          class: 'title is-3 has-text-black has-text-weight-bold',
          text: 'Full-Stack-Developer',
        },
        {
          class: 'title is-3 has-text-white',
          text: 'der Welt is auf',
        },
        {
          class: 'title is-3 has-text-black',
          text: 'Jobsuche!',
        },
      ],
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
      }, 100);
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
    document.addEventListener('DOMContentLoaded', () => {
      this.revealText();
    });
  },
};
</script>
<style lang="scss">
.slide-text-up-enter-active,
.slide-text-up-leave-active {
  transition: all 350ms cubic-bezier(0.31, 0.46, 0.02, 1);
}

.slide-text-up-enter,
.slide-text-up-leave-to {
  transform: translate3d(0, 100%, 0);
  opacity: 1;
}
</style>
