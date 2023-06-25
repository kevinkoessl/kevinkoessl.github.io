<template>
  <div
    class="hero has-gridlines is-black has-gridlines-right"
    id="full-stack-explained"
    style="background: linear-gradient(#ffffff 0%, #ffffff 30%, #171b20 30.0001%, #171b20 100%)"
  >
    <div class="hero-body">
      <div id="full-stack-explained__start-trigger"></div>
      <div id="matrix-background">
        <!--div class="hero is-fullheight is-clipped" id="background-sparkle">
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
      </div-->

        <div class="section" id="frontend-section">
          <div class="switch-background">
            <div class="columns is-multiline">
              <div class="column is-half has-text-black">
                <div class="title is-2 has-text-primary mb-0 is-relative is-retro" style="mix-blend-mode: difference">
                  Was ist Full-Stack?
                </div>
                <div class="is-flex is-justify-content-flex-end">
                  <div class="switch-cards" id="switch-cards" style="width: 66%">
                    <div class="card card--backend p-4" style="mix-blend-mode: normal">
                      <div class="title is-4 has-text-primary">Backend</div>
                      <br />
                      <p class="is-size-6 has-text-black">Das Herz und der Motor</p>
                    </div>
                    <div class="mr-4 py-6" style="border-right: 2px solid white; mix-blend-mode: difference"></div>
                    <div class="card card--frontend">
                      <div class="card-head" style="border-bottom: 2px solid white; mix-blend-mode: difference">
                        <div class="mr-4 py-3" style="border-right: 2px solid white; mix-blend-mode: difference"></div>
                      </div>
                      <div class="card-body">
                        <div class="mr-4" style="border-right: 2px solid #171b20">
                          <div
                            class="title is-3 is-broken-grid is-family-superior is-clipped"
                            style="mix-blend-mode: difference"
                          >
                            <div class="switch-text has-text-white" id="animate-frontend">FRONT<br />END</div>
                            <div class="switch-text has-text-white" id="animate-backend">BACK <br />END</div>
                          </div>
                          <br />
                          <div class="switch-switch is-relative is-clipped" style="border: 2px solid white">
                            <div class="py-3 pl-5 has-background-black switch-backend">
                              <div class="is-size-6 has-text-white">
                                <div class="fade-in-text">
                                  <span class="is-size-7">das</span> <span class="has-text-weight-bold">HERZ</span>
                                  <br />
                                </div>
                                <div class="fade-in-text">
                                  <span class="is-size-7" style="width: 120px">und der</span>
                                  <span class="has-text-weight-bold">MOTOR</span>
                                </div>
                              </div>
                            </div>

                            <div
                              class="switch-switch-parent is-absolute is-clipped"
                              style="top: 0; left: 0; bottom: 0; right: 0; border-left: 2px solid #171b20"
                            >
                              <div class="py-3 pl-5 has-background-white switch-frontend">
                                <div class="is-size-6 has-text-black">
                                  <div class="fade-in-text">
                                    <span class="is-size-7">von</span> <span class="has-text-weight-bold">A</span>NGULAR
                                    <br />
                                  </div>
                                  <div class="fade-in-text">
                                    <span class="is-size-7">bis</span> <span class="has-text-weight-bold">Z</span>URB
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mr-4 py-3" style="border-right: 2px solid white; mix-blend-mode: difference"></div>
                  </div>
                </div>
              </div>
              <div class="column is-half py-6">
                <div class="py-6"></div>
                <div class="parallax is-clipped is-relative mt-6" style="border-radius: 5px">
                  <div
                    class="switch-text-backend has-background-white is-absolute p-4 inset"
                    style="top: 0; left: 0; bottom: 0; right: 0"
                  >
                    <p class="has-text-black">
                      So schön romantisch es im Frontend auch zugeht, ohne Backend läuft hier meistens nichts.
                      Datenbanken, Algorithmen und Server verarbeiten die Eingaben Deiner User. Und wenn alles
                      Reibungslos läuft, bekommen sie davon nichtmal was mit.
                    </p>
                    <br />
                    <p class="s-size-7 has-text-black pt-3 has-text-weight-bold">
                      Im Backend arbeite ich mit Node.js, Express, NestJS, MongoDB und TypeORM.
                    </p>
                  </div>
                  <div class="switch-text-frontend has-background-black p-4" style="border-radius: 5px">
                    <div class="switch-text-frontend-content">
                      <p class="has-text-white">
                        Das Frontend ist das Fenster zur digitalen Welt, in dem Kreativität und Code sich vereinen, um
                        ein faszinierendes Benutzererlebnis zu schaffen. Es ist die visuelle Magie, die Deine
                        Nutzer*Innen in eine einnehmende virtuelle Realität eintauchen lässt.
                      </p>
                      <br />
                      <p class="s-size-7 has-text-white pt-3 has-text-weight-bold">
                        Um solche Erlebnisse zu verwirklichen verwende ich Vue.js, Buefy und GSAP als mein Werkzeug.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="go-to-all-technologies has-text-right py-4 is-relative">
                  <b-button
                    type="is-ghost"
                    class="has-text-white"
                    icon-right="arrow-right"
                    style="mix-blend-mode: difference !important"
                    @click="$router.push({ path: '/experience', scrollTo: 0 })"
                  >
                    Alle Technologien</b-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="full-stack-explained__end-trigger"></div>

        <div id="start-start-trigger"></div>
        <div class="hero is-fullheight"></div>
      </div>
      <div id="end-end-trigger"></div>
    </div>
  </div>
</template>
<script>
import gsap from 'gsap';

export default {
  name: 'FullStackExplained',
  data() {
    return {
      text: `news`,
      timeline: null,
      timeline2: null,
      timeline3: null,
      tierOneAnimations: null,
    };
  },
  methods: {
    setUpTimeline() {
      let scrub = 1;

      /**
      this.timeline = gsap.timeline({
        scrollTrigger: {
          trigger: `#full-stack-explained__start-trigger`,
          endTrigger: `#full-stack-explained__end-trigger`,
          start: 'top 50%',
          scrub,
          end: 'bottom 50%',

          pin: '#background-sparkle .hero-background',
        },
      });
*/
      /**

      this.timeline
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
        */

      this.timeline2 = gsap.timeline({
        scrollTrigger: {
          trigger: `#full-stack-explained__start-trigger`,
          endTrigger: `#full-stack-explained__end-trigger`,
          start: 'top 100%',
          scrub,
          end: 'bottom 0%%',
        },
      });

      this.timeline2
        .to('.card--frontend .switch-switch', { y: '-20%', duration: 2 })
        .to('.card--frontend .title.is-broken-grid', { x: '-20%', y: '-15%', duration: 2 }, '<')
        .from('.card--frontend .fade-in-text', { duration: 2, y: '-15%' }, '<');

      this.timeline3 = gsap.timeline({
        scrollTrigger: {
          trigger: '#start-start-trigger',
          endTrigger: `#end-end-trigger`,
          start: 'top 105%',
          scrub,
          end: 'bottom 70%',

          pin: '#frontend-section',
          pinnedContainer: '#full-stack-explained',
        },
      });

      this.timeline3
        .to('.switch-text-frontend', { y: '-100%', duration: 0.5 })
        .to('#animate-frontend', { y: '-100%' }, '<')
        .from('#animate-backend', { y: '100%' }, '<')
        .to('.parallax', { y: '-50%', duration: 1 }, '<')
        .to('.card--frontend .switch-switch-parent', { x: '100%' }, '<')
        .to('.card--frontend .switch-switch .switch-frontend', { x: '-100%' }, '<');

      //.to('.card--frontend ', { background: '#000000' }, '<');

      //.from('.switch-text-backend', { y: '-100%' }, '<');
    },
  },
  mounted() {
    this.setUpTimeline();
  },
};
</script>
<style lang="scss">
@import '~@/styles/main.scss';

.switch-text {
  position: absolute;
  width: 100%;
  height: 300px;
}

.inset {
  background-color: #171b20;
  //background: #35ff51;
}

.switch-cards {
  position: relative;

  .card {
    width: 100%;
  }

  .card--frontend {
    .title.is-broken-grid {
      height: 225px;

      transform: translate3d(20%, 0%, 0);
    }

    .fade-in-text {
      .is-size-7 {
        width: 50px;
        display: inline-block;
      }
    }

    .switch-switch {
      mix-blend-mode: difference;
      transform: translate3d(20%, 100%, 0);
    }
  }

  .card--backend {
    display: none;
    background-color: #a2cdb1;
  }
}

.parallax {
  z-index: 0;
  border: 2px solid $black;
}
</style>
