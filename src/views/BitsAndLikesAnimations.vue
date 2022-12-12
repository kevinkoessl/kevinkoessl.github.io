<template>
  <div class="about">
    <div class="hero is-fullheight">
      <div class="hero-body">
        <div>
          <h1 class="title is-1" style="color: lightblue">Ein Kevin</h1>
          <h2 class="title is-2" style="color: #003266">Für dein Animation-Game</h2>
        </div>
      </div>
    </div>
    <b-a-l-tier-one></b-a-l-tier-one>
    <b-a-l-tier-two></b-a-l-tier-two>
    <b-a-l-tier-three></b-a-l-tier-three>
    <b-a-l-hearts></b-a-l-hearts>
    <div class="hero is-fullheight">
      <div class="hero-body">
        <div style="width: 100%">
          <div class="title is-1 has-text-black">Stufe 4</div>
          <div class="title is-6 has-text-black">
            <span style="color: lightblue">Content zum Anfassen.</span><br />
            Wir verlassen jetzt mal kurz die <br />
            2-Dimensionale Welt.
          </div>
        </div>
      </div>
    </div>

    <div class="section-two"></div>
    <div class="hero">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half">
            <b-a-l-3-d file-url="/&.3mf"></b-a-l-3-d>
          </div>
          <div class="column is-half">
            <div class="py-6" v-for="i in 3" :key="`container_${i}`" style="z-index: 1; position: relative">
              <div class="title is-3" style="color: #003266">Whoo, 3D</div>
              <div class="title is-4" style="color: #003266">Ist das nicht cool?</div>
              <div class="content" style="color: #003266">
                Da verlierste doch den Überblick bei dem ganzen Kuddelmuddel. Hier siehts aus wie bei Hempels unterm
                Sofa! Kinnas getz kommt rein, es fängt am regen! Getz mach den Apparillo aus! Geh mal wech mit Deine
                Plautze. Dann is ma richtich Trallafitti. Dat is doppelt gemoppelt! Nee sowat mach ich nich. Da kam so
                nen Kerl zu uns inne Bude, dat wahr vielleicht en Kawennzmann, dat sach ich Dir! Dann gehn wir heute
                innen Zappelbunker. Von mir aus kannste auch bis Pussemuckel fahren. Dann is ma richtich Trallafitti.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-five"></div>

    <div class="hero is-fullheight">
      <div class="hero-body">
        <div style="width: 100%">
          <div class="title is-2 has-text-black">
            Aber ich hab <br /><span class="title is-2 has-text-yellow is-retro"> News </span> für Euch!
          </div>
        </div>
      </div>
    </div>

    <div :id="`text-wall-start-trigger_${_uid}`"></div>
    <div class="hero is-fullheight is-clipped is-relative" style="background: lightblue">
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
            :class="i === 7 && j === 5 ? 'has-text-white' : 'has-text-info is-outlined '"
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

    <div id="matrix-background" style="background: #003266">
      <div class="hero is-fullheight is-clipped" id="background-sparkle">
        <div class="hero-background" style="transform: translateX(-100px) translateY(500px)">
          <div
            v-for="i in 16"
            :key="`text-line_${i}`"
            style="height: unset; white-space: nowrap; z-index: 0"
            :id="`sparkle_${_uid}-line_${i}`"
            class="mb-4"
          >
            <span v-if="i % 2 === 0" class="ml-6"></span>
            <span
              v-for="j in 30"
              :key="`sparkle-line_${i}-bit_${j}`"
              class="title is-4 sparkle-bit is-relative"
              style="color: #081f46; z-index: 0"
            >
              <span class="is-inline-block mx-4">{{ Math.round(Math.random()) }}</span>
            </span>
          </div>
        </div>
      </div>
      <div id="matrix-start-trigger"></div>
      <div class="section">
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="title is-1 has-text-white is-relative" style="z-index: 1">5. Stufe</div>
            <div class="title is-4 has-text-white is-relative" style="z-index: 1">
              In der Matrix ist es noch viel cooler!
            </div>
          </div>
        </div>
      </div>
      <div class="py-6 my-6"></div>
      <div class="py-6 my-6"></div>
      <div class="section is-medium" v-for="i in 5" :key="`container_${i}`" style="z-index: 1; position: relative">
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="title is-3 has-text-white">IT-Stuff</div>
            <div class="title is-4 has-text-white">beep bup bap beep</div>
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
        <div>
          <h1 class="title is-1 has-text-black">
            #<span class="title is-1 is-retro" style="color: lightblue">amazing</span>.
          </h1>
        </div>
      </div>
    </div>
    <div :id="`emoji-wall-start-trigger_${_uid}`"></div>
    <div class="hero is-fullheight is-clipped" style="background: lightblue">
      <div
        class="hero-background"
        :id="`emoji-wall-background_${_uid}`"
        style="transform: translate3D(-250px, -250px, 0)"
      >
        <div
          v-for="i in 14"
          :key="`emoji-line_${i}`"
          style="height: unset; white-space: nowrap; width: 110vw"
          :id="`emoji-wall-text_${_uid}-line_${i}`"
          class="mb-4"
        >
          <b-image
            v-for="j in 18"
            :key="`emoji-line-word_${i}_${j}`"
            class="emoji-wall__emoji mx-4 is-inline-block"
            style="width: 100px"
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/thumbs-up_1f44d.png"
          ></b-image>
        </div>
      </div>
      <div class="hero-body" style="z-index: 11">
        <div>
          <div class="title is-1 has-text-white">Daumen hoch</div>
          <div class="subtitle has-text-white">Für diese geilen Animationen!</div>
        </div>
      </div>
    </div>
    <div :id="`emoji-wall-end-trigger_${_uid}`"></div>

    <div class="hero is-fullheight">
      <div class="hero-body">
        <div>
          <h1 class="title is-2 has-text-black">Und übrigens...</h1>
          <div class="title is-5 has-text-black">
            Das hier ist schon <br />
            der <span class="title is-5" style="color: lightblue">Safari</span>-Browser!
          </div>
        </div>
      </div>
    </div>

    <!--
    <div class="hero is-info is-fullheight is-clipped" style="background: lightblue">
      <div class="hero-body">
        <div style="width: 100%">
          <p class="title has-text-centered">bits & likes</p>
          <div id="animated-highlight-start-trigger"></div>
          <div class="subtitle has-text-centered">
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
    -->
  </div>
</template>
<script>
import gsap from 'gsap';

import BAL3D from '@/components/bitsandlikes/BAL3D.vue';
import BALTierOne from '@/components/bitsandlikes/BALTierOne.vue';
import BALTierTwo from '@/components/bitsandlikes/BALTierTwo.vue';
import BALTierThree from '@/components/bitsandlikes/BALTierThree.vue';
import BALHearts from '@/components/bitsandlikes/BALHearts.vue';

export default {
  components: { BAL3D, BALTierOne, BALTierTwo, BALTierThree, BALHearts },
  data() {
    return {
      text: `news`,
      timeline: null,
      timeline2: null,
      timeline3: null,
      timeline4: null,
      timeline5: null,
      tierOneAnimations: null,
    };
  },
  methods: {
    setUpTimeline() {
      let scrub = 1;

      this.timeline = gsap.timeline({
        scrollTrigger: {
          trigger: `#text-wall-start-trigger_${this._uid}`,
          endTrigger: `#text-wall-end-trigger_${this._uid}`,
          end: 'bottom 80%',
          scrub,
        },
      });

      for (let i = 0; i < 15; i++) {
        let value = Math.abs(7 - i) + 1;
        value = 7 - value;
        this.timeline.fromTo(
          `#text-wall-text_${this._uid}-line_${i}`,
          {
            x: value * Math.pow(value, 1.5) * 15,
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

      /** 
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
      */
      this.timeline3 = gsap.timeline({
        scrollTrigger: {
          trigger: `#matrix-start-trigger`,
          endTrigger: `#background-sparkle-end-trigger`,
          start: 'top 50%',
          scrub,
          end: 'bottom 50%',

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
        .from(`#matrix-background`, {
          backgroundColor: '#ffffff',
        })
        .from(`#background-sparkle .sparkle-bit .is-inline-block`, {
          opacity: 0,

          //rotation: -300,
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
              each: 0.07,
              from: 'end',
              axis: 'y',
              grid: 'auto',
              ease: 'power1.out',
            },
          }
          // '-=30%'
        );

      this.timeline4 = gsap.timeline({
        scrollTrigger: {
          trigger: `#emoji-wall-start-trigger_${this._uid}`,
          endTrigger: `#emoji-wall-end-trigger_${this._uid}`,

          start: 'top 0%',

          scrub: 1,
        },
      });

      this.timeline4
        .from(
          `#emoji-wall-background_${this._uid} .emoji-wall__emoji`,
          {
            rotation: 50,
            y: '100%',
            opacity: 0,
            stagger: {
              each: 0.05,
              from: 'end',
              grid: 'auto',
              axis: 'y',
              ease: 'power1.in',
            },
          },
          0
        )
        .to(
          `#emoji-wall-background_${this._uid} .emoji-wall__emoji`,
          {
            opacity: 0,
            y: '-100%',
            rotation: 0,
            stagger: {
              each: 0.05,
              from: 'end',
              axis: 'y',
              grid: 'auto',
              ease: 'power1.out',
            },
          },
          '-=50%'
        );
    },
  },
  mounted() {
    this.setUpTimeline();
  },
};
</script>
<style lang="scss">
@import '~@/styles/main.scss';
.square {
  width: 500px;
  height: 300px;
  border-left: 5px dashed #7bb3dc;
  border-bottom: 5px dashed #0d3d60;
}

.title.is-outlined {
  color: lightblue !important;
  text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
}

.animated-highlight {
  display: inline-block;

  position: relative;
  padding: 0 10px;

  .highlight-background {
    position: absolute;
    //background: lightblue;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    z-index: 2;
  }

  .highlight-text-after {
    display: inline-block;
    position: absolute;
    color: #ffffff;
    left: 0px;
    padding: 0 10px;
    top: 0;
    width: 100%;
    z-index: 3;
  }
}
</style>
