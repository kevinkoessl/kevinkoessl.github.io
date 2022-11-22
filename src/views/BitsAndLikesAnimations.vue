<template>
  <div class="about">
    <div class="hero is-fullheight">
      <div class="hero-body">
        <h1 class="title is-1">bits & likes</h1>
      </div>
    </div>

    <div :id="`text-wall-start-trigger_${_uid}`"></div>
    <div class="hero is-fullheight is-clipped" style="background: lightblue">
      <div
        class="hero-background"
        style="transform: translateX(-50%) rotateZ(-30deg)"
        :id="`text-wall-background_${_uid}`"
      >
        <div
          v-for="i in 14"
          :key="`text-line_${i}`"
          style="height: unset"
          :id="`text-wall-text_${_uid}-line_${i}`"
          class="mb-4"
        >
          <span
            v-for="j in 14"
            :key="`text-line-word_${i}_${j}`"
            class="title is-3 mx-4"
            style="white-space: nowrap"
            :class="i === 7 && j === 3 ? 'has-text-white' : 'has-text-info is-outlined '"
          >
            {{ text }}
          </span>
        </div>
      </div>
      <div class="hero-body">
        <div></div>
      </div>
    </div>

    <div :id="`text-wall-end-trigger_${_uid}`"></div>

    <div class="hero is-fullheight">
      <div class="hero-body">
        <h1 class="title is-1">bits & likes</h1>
      </div>
    </div>

    <div class="hero is-info is-fullheight is-clipped" style="background: lightblue">
      <div class="hero-body">
        <div>
          <p class="title">bits & likes</p>
          <div id="animated-highlight-start-trigger"></div>
          <div class="subtitle">
            Die
            <div class="animated-highlight" id="animated-highlight">
              <div class="highlight-background"></div>
              <div class="highlight-text-before has-text-white">Fullservice</div>
              <div class="highlight-text-after has-text-info">Fullservice</div>
            </div>
            Digitalagentur
          </div>
        </div>
      </div>
    </div>

    <div class="hero is-fullheight">
      <div class="hero-body">
        <h1 class="title is-1">bits & likes</h1>
      </div>
    </div>

    <div id="background-sparkle-start-trigger"></div>
    <div style="background: #003266">
      <div class="hero is-fullheight is-clipped" id="background-sparkle">
        <div class="hero-background" style="transform: translateX(-100px) translateY(-250px)">
          <div
            v-for="i in 16"
            :key="`text-line_${i}`"
            style="height: unset; white-space: nowrap; z-index: 0"
            :id="`sparkle_${_uid}-line_${i}`"
            class="mb-4"
          >
            <span v-if="i % 2 === 0" class="ml-6"></span>
            <span
              v-for="j in 21"
              :key="`sparkle-line_${i}-bit_${j}`"
              class="title is-4 sparkle-bit"
              style="color: #081f46"
            >
              <span class="is-inline-block mx-4">&</span>
            </span>
          </div>
        </div>
      </div>
      <div class="section is-medium" v-for="i in 5" :key="`container_${i}`" style="z-index: 1; position: relative">
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="title is-3 has-text-white">bits & likes</div>
            <div class="content has-text-white">
              Da verlierste doch den Überblick bei dem ganzen Kuddelmuddel. Hier siehts aus wie bei Hempels unterm Sofa!
              Kinnas getz kommt rein, es fängt am regen! Getz mach den Apparillo aus! Geh mal wech mit Deine Plautze.
              Dann is ma richtich Trallafitti. Dat is doppelt gemoppelt! Nee sowat mach ich nich. Da kam so nen Kerl zu
              uns inne Bude, dat wahr vielleicht en Kawennzmann, dat sach ich Dir! Dann gehn wir heute innen
              Zappelbunker. Von mir aus kannste auch bis Pussemuckel fahren. Dann is ma richtich Trallafitti.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="background-sparkle-end-trigger"></div>
    <div class="hero is-fullheight">
      <div class="hero-body">
        <h1 class="title is-1">bits & likes</h1>
      </div>
    </div>
  </div>
</template>
<script>
import gsap from 'gsap';

export default {
  data() {
    return {
      text: `bits & likes`,
      timeline: null,
      timeline2: null,
      timeline3: null,
    };
  },
  methods: {
    setUpTimeline() {
      let scrub = 1;

      this.timeline = gsap.timeline({
        scrollTrigger: {
          trigger: `#text-wall-start-trigger_${this._uid}`,
          endTrigger: `#text-wall-end-trigger_${this._uid}`,
          end: 'bottom 100%',
          scrub,
        },
      });

      for (let i = 0; i < 15; i++) {
        let value = Math.abs(7 - i) + 1;
        console.log(value);
        console.log(value);

        this.timeline.fromTo(
          `#text-wall-text_${this._uid}-line_${i}`,
          {
            x: value * Math.pow(value, 1.5) * 30,
          },
          { x: 0, y: 0, opacity: 1 },
          0
        );
      }

      this.timeline2 = gsap.timeline({
        scrollTrigger: {
          trigger: `#animated-highlight-start-trigger`,
          scrub: true,

          start: 'top 70%',
        },
      });

      this.timeline2
        .fromTo(
          `#animated-highlight .highlight-background`,
          {
            width: '0',
          },
          { width: '100%', duration: 0.6, ease: 'power4.out' },
          0
        )
        .fromTo(
          `#animated-highlight .highlight-text-before`,
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          },
          { clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', duration: 0.6, ease: 'power4.out' },
          0
        )
        .fromTo(
          `#animated-highlight .highlight-text-after`,
          {
            clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)',
          },
          { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 0.6, ease: 'power4.out' },
          0
        );

      this.timeline3 = gsap.timeline({
        scrollTrigger: {
          trigger: `#background-sparkle-start-trigger`,
          endTrigger: `#background-sparkle-end-trigger`,
          scrub,
          end: 'bottom 100%',
          pin: '#background-sparkle .hero-background',
        },
      });

      /** 
      this.timeline3
        .from(`#background-sparkle .sparkle-bit .is-inline-block`, {
          opacity: 0,
          //rotation: -300,
          y: '100%',
          stagger: {
            each: 0.1,
            from: 'end',
            axis: 'y',
            grid: 'auto',
            ease: 'power1.out',
          },
        })
        .to(
          `#background-sparkle .sparkle-bit .is-inline-block`,
          {
            rotation: 300,
            y: '100%',
            opacity: 0,
            stagger: {
              each: 0.05,
              from: 'random',
              grid: 'auto',
              ease: 'power1.inOut',
            },
          }
          // '-=30%'
        );
        */

      this.timeline3
        .from(`#background-sparkle .sparkle-bit .is-inline-block`, {
          opacity: 0,
          rotation: -300,
          y: '100%',
          stagger: {
            each: 0.05,
            from: 'random',
            grid: 'auto',
            ease: 'power1.out',
          },
        })
        .to(
          `#background-sparkle .sparkle-bit .is-inline-block`,
          {
            y: '-100%',
            opacity: 0,

            stagger: {
              each: 0.1,
              from: 'end',
              axis: 'y',
              grid: 'auto',
              ease: 'power1.out',
            },
          }
          // '-=30%'
        );
    },
  },
  mounted() {
    this.setUpTimeline();
  },
};
</script>
<style lang="scss">
.title.is-outlined {
  color: lightblue !important;
  text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}

.animated-highlight {
  display: inline-block;
  color: #0d3d60;
  position: relative;
  padding: 0 10px;

  .highlight-background {
    position: absolute;
    background: #fff;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    z-index: 2;
  }

  .highlight-text-after {
    display: inline-block;
    position: absolute;
    left: 0px;
    padding: 0 10px;
    top: 0;
    width: 100%;
    z-index: 3;
  }
}
</style>
