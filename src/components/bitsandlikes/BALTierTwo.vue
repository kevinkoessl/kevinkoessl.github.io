<template>
  <div>
    <div id="tier-two-animations-trigger"></div>
    <div class="hero is-fullheight" style="background: lightblue" id="tier-two-animations">
      <div class="hero-body">
        <div class="hero-background"></div>
        <div style="width: 100%">
          <h3 class="title is-3 has-text-white has-text-right">2. Stufe</h3>
          <div class="content pl-3">
            <div class="title is-6 main-content has-text-right">
              <span class="has-text-yellow">Animationen</span>, die mit der Scrollposition verknüpft sind. <br />
              Die Timeline der Amimation wird einem Scrollabschnitt <br />
              der Länge <span class="has-text-yellow">X</span> zugeordnet.
            </div>
            <div class="my-6 has-text-right">
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
    <div id="tier-two-animations-middle-trigger"></div>
    <div class="hero" style="background: lightblue; height: 10000px" id="boring-hero">
      <div class="hero-body" style="width: 100%">
        <div class="bore-me-container">
          <div class="bore-me has-text-centered is-relative">
            <div class="is-relative" style="height: 100px">
              <b-image
                class="mx-auto"
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/yawning-face_1f971.png"
              >
              </b-image>
              <b-image
                class="mx-auto"
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/flushed-face_1f633.png"
              >
              </b-image>
              <b-image
                class="mx-auto"
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/fearful-face_1f628.png"
              >
              </b-image>
              <b-image
                class="mx-auto"
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/face-screaming-in-fear_1f631.png"
              >
              </b-image>

              <b-image
                class="mx-auto"
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/exploding-head_1f92f.png"
              ></b-image>
            </div>

            <div class="title is-1 has-text-black">
              <span class="boring-letter b is-inline-block">B</span>
              <span class="boring-letter o is-inline-block">O</span>
              <span class="boring-letter r is-inline-block">R</span>
              <span class="boring-letter i is-inline-block">I</span>
              <span class="boring-letter n is-inline-block">N</span>
              <span class="boring-letter g is-inline-block">G</span>
              <span class="boring-letter exclam-1 is-inline-block">!</span>
              <span class="boring-letter exclam-2 is-inline-block">!</span>
              <span class="boring-letter exclam-3 is-inline-block">!</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-foot has-text-centered pt-3 pb-6">
        <div class="title is-5 has-text-white mb-6">also weiter zu...</div>
      </div>
    </div>
    <div id="tier-two-animations-end-trigger"></div>
  </div>
</template>
<script>
import gsap from 'gsap';

export default {
  name: 'BALTierTwo',
  data() {
    return { timeline: null, timeline2: null, timeline3: null };
  },
  mounted() {
    this.timeline = gsap.timeline({
      scrollTrigger: {
        trigger: `#tier-two-animations-trigger`,
        endTrigger: `#tier-two-animations-middle-trigger`,
        start: 'top 50%',
        end: 'bottom 80%',
        scrub: 1,
      },
    });

    this.timeline
      .from('#tier-two-animations .main-content', {
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        x: '-25px',
      })

      .from('#tier-two-animations .up', { duration: 0.4, ease: 'power3.out', y: '50px', opacity: 0 }, '-=55%')
      .from('#tier-two-animations .down', { duration: 0.3, ease: 'power3.out', y: '-50px', opacity: 0 }, '-=75%')
      .from('#tier-two-animations .right', { duration: 0.5, ease: 'power3.out', x: '-50px', opacity: 0 })
      .from('#tier-two-animations .left', { duration: 0.3, ease: 'power3.out', x: '50px', opacity: 0 }, '-=50%');

    this.timeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: `#tier-two-animations-middle-trigger`,
        endTrigger: `#tier-two-animations-end-trigger`,
        start: 'top 20%',
        end: 'bottom 100%',
        scrub: 1,
        snap: {
          snapTo: 1,
        },
        pin: '#boring-hero .bore-me-container',
      },
    });
    this.timeline3
      .fromTo(`#boring-hero .bore-me`, { scale: 0.01 }, { scale: 1, ease: 'power1.in', duration: 1 })
      .addLabel('explosion')
      .to(
        `#boring-hero .boring-letter.b`,
        {
          x: '-600px',

          opacity: '0',
          scale: '2',
          rotation: 270,
          ease: 'power3.out',
          duration: 0.5,
        },
        '<90%'
      )
      .to(
        `#boring-hero .boring-letter.o`,
        {
          x: '-500px',
          y: '-100px',
          opacity: '0',
          scale: '3',
          rotation: 270,
          ease: 'power3.out',
        },
        '<0%'
      )
      .to(
        `#boring-hero .boring-letter.r`,
        {
          x: '-300px',
          y: '150px',
          opacity: '0',
          scale: '4',
          rotation: -270,
          ease: 'power3.out',
        },
        '<0%'
      )
      .to(
        `#boring-hero .boring-letter.i`,
        {
          x: '-100px',
          y: '-200px',
          opacity: '0',
          scale: '4',
          rotation: 160,
          ease: 'power3.out',
        },
        '<0%'
      )
      .to(
        `#boring-hero .boring-letter.n`,
        {
          x: '100px',
          y: '200px',
          opacity: '0',
          scale: '4',
          rotation: -160,
          ease: 'power3.out',
        },
        '<0%'
      )
      .to(
        `#boring-hero .boring-letter.g`,
        {
          x: '300px',
          y: '-150px',
          opacity: '0',
          scale: '3',
          rotation: 270,
          ease: 'power3.out',
        },
        '<0%'
      )
      .to(
        `#boring-hero .boring-letter.exclam-1`,
        {
          x: '300px',
          y: '150px',
          opacity: '0',
          scale: '3.4',
          rotation: 270,
          ease: 'power3.out',
        },
        '<0%'
      )
      .to(
        `#boring-hero .boring-letter.exclam-2`,
        {
          x: '400px',
          y: '-150px',
          opacity: '0',
          scale: '3',
          rotation: -360,
          ease: 'power3.out',
        },
        '<0%'
      )
      .to(
        `#boring-hero .boring-letter.exclam-3`,
        {
          x: '600px',
          opacity: '0',
          scale: '2',
          rotation: 360,
          ease: 'power3.out',
        },
        '<0%'
      )
      .fromTo(
        `#boring-hero .bore-me .image`,
        {
          scale: '0.7',
        },
        {
          scale: 1,
          y: '50%',
          ease: 'power3.out',
        },
        '<0%'
      );

    function imageSwapScene() {
      let t1 = gsap.timeline();

      for (let i = 1; i <= 4; i++) {
        t1.set(
          `#boring-hero .bore-me .image:nth-child(${i})`,
          {
            opacity: 0,
          },
          '<100%'
        )
          .set(
            `#boring-hero .bore-me .image:nth-child(${i + 1})`,
            {
              opacity: 1,
            },
            '<'
          )
          .to(
            `#boring-hero .bore-me .image:nth-child(${i + 1})`,
            {
              opacity: 1,
              duration: 1,
            },
            '<'
          );
      }

      return t1.duration(0.5);
    }

    this.timeline3.add(imageSwapScene(), 'explosion');
  },
};
</script>
<style lang="scss">
@import '~@/styles/main.scss';
.bore-me {
  .image {
    width: 120px;
    height: 120px;
    position: absolute;
    left: 0;
    right: 0;
    opacity: 0;

    &:first-child {
      opacity: 1;
    }
  }

  .title {
    height: auto;
  }
}
</style>
