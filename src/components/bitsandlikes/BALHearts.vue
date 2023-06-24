<template>
  <div>
    <div :id="`emoji-wall-2-start-trigger_${_uid}`"></div>
    <div class="hero is-fullheight is-clipped" style="background: lightblue">
      <div
        class="hero-background"
        :id="`emoji-wall-2-background_${_uid}`"
        style="transform: translate3D(-250px, -250px, 0)"
      >
        <div
          v-for="i in 14"
          :key="`emoji-2-line_${i}`"
          style="height: unset; white-space: nowrap; width: 110vw"
          :id="`emoji-wall-2-text_${_uid}-line_${i}`"
          class="mb-4"
        >
          <b-image
            v-for="j in 20"
            :key="`emoji-2-line-word_${i}_${j}`"
            class="emoji-wall-2__emoji mx-4 is-inline-block"
            style="width: 75px"
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/red-heart_2764-fe0f.png"
          ></b-image>
        </div>
      </div>
      <div class="hero-body emoji-wall-2" style="z-index: 11">
        <div>
          <div class="title is-1 has-text-white">Schlägt dein Herz</div>
          <div class="title is-3 has-text-white">schon höher?</div>
        </div>
      </div>
    </div>
    <div :id="`emoji-wall-2-end-trigger_${_uid}`"></div>
  </div>
</template>
<script>
import gsap from 'gsap';

export default {
  name: 'BALHearts',
  data() {
    return { timeline: null };
  },
  mounted() {
    this.timeline = gsap.timeline({
      scrollTrigger: {
        trigger: `#emoji-wall-2-start-trigger_${this._uid}`,
        endTrigger: `#emoji-wall-2-end-trigger_${this._uid}`,
        scrub: 1,
      },
    });

    this.timeline

      .fromTo(
        `#emoji-wall-2-background_${this._uid} .emoji-wall-2__emoji`,
        {
          scale: 0,
          opacity: 0,
          y: 0,
        },
        {
          y: '-200%',
          opacity: 1,
          scale: 1,
          stagger: {
            each: 0.05,
            from: 'end',
            axis: 'y',
            grid: 'auto',
            ease: 'power2.out',
          },
        },
        '<50%'
      )
      .fromTo(
        `.emoji-wall-2 .title`,
        { opacity: 1 },
        {
          opacity: 0,
          y: '-200px',
          ease: 'power1.in',
        },
        '<25%'
      );
  },
};
</script>
<style lang="scss"></style>
