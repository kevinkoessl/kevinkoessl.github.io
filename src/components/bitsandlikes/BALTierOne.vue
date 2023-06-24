<template>
  <div class="hero is-fullheight" id="tier-one-animations">
    <div class="hero-body">
      <div class="hero-background">
        <div class="spin-me">
          <div class="title is-6 has-text-centered">Spin me,<br />baby</div>
        </div>
      </div>
      <div>
        <div id="tier-one-animations-trigger"></div>
        <h3 class="title is-3 has-text-black">1. Stufe</h3>
        <div class="content pl-3">
          <div class="title is-6 main-content">
            <span style="color: lightblue">CSS-Transformationen</span>, die durch scrollen ausgelöst werden. <br />
            Ist ein Element an seinen Platz angelangt, bleibt es auch dort.
          </div>
          <div class="my-6">
            <div class="up is-inline-block mr-6">
              <b-icon icon="arrow-up" size="is-large" type="is-dark"></b-icon>
              <div class="title is-5 has-text-yellow is-retro">Hoch</div>
            </div>
            <div class="down is-inline-block mr-6">
              <b-icon icon="arrow-down" size="is-large" type="is-dark"></b-icon>
              <div class="title is-5 has-text-yellow is-retro">Runter</div>
            </div>
            <div class="right is-inline-block mr-6">
              <b-icon icon="arrow-right" size="is-large" type="is-dark"></b-icon>
              <div class="title is-5 has-text-yellow is-retro">Rechts</div>
            </div>
            <div class="left is-inline-block mr-6">
              <b-icon icon="arrow-left" size="is-large" type="is-dark"></b-icon>
              <div class="title is-5 has-text-yellow is-retro">Links</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gsap from 'gsap';

export default {
  name: 'BALTierOne',
  data() {
    return { timeline: null };
  },
  mounted() {
    this.timeline = gsap.timeline({
      scrollTrigger: {
        trigger: `#tier-one-animations-trigger`,
        start: 'top 35%',
      },
    });

    this.timeline
      .from('#tier-one-animations .main-content', {
        duration: 0.5,
        ease: 'power3.out',
        x: '-25px',
        opacity: 0,
      })

      .from('#tier-one-animations .up', { duration: 0.4, ease: 'power3.out', y: '50px', opacity: 0 }, '-=55%')
      .from('#tier-one-animations .down', { duration: 0.3, ease: 'power3.out', y: '-50px', opacity: 0 }, '-=75%')
      .from('#tier-one-animations .right', { duration: 0.5, ease: 'power3.out', x: '-50px', opacity: 0 })
      .from('#tier-one-animations .left', { duration: 0.3, ease: 'power3.out', x: '50px', opacity: 0 }, '-=50%')
      .fromTo(
        '#tier-one-animations .spin-me',
        {
          rotation: 920,
          opacity: 0,
          scale: 0.3,
        },
        {
          duration: 1.5,
          ease: 'bounce.out',
          rotation: 30,
          opacity: 1,
          scale: 1,
        }
      );
  },
};
</script>
<style lang="scss">
@import '~@/styles/main.scss';
.hero-background div.spin-me {
  background: $yellow;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 5px dashed black;
  right: 10%;
  top: 10%;

  .title {
    height: auto;
  }
}
</style>
