<template>
  <div class="hero has-gridlines is-black has-gridlines-right" id="full-stack-explained">
    <div class="hero-body is-clipped">
      <div id="full-stack-explained__start-trigger"></div>
      <div id="matrix-background">
        <div :class="{ section: !['mobile'].includes($mq) }" id="frontend-section">
          <div class="switch-background">
            <div class="columns is-multiline">
              <div class="column is-half has-text-black">
                <mq-layout :mq="['tablet', 'desktop', 'widescreen']" class="my-6"></mq-layout>

                <div
                  class="title is-2 is-size-6-mobile is-size-4-tablet is-size-3-widescreen is-size-2-fullhd has-text-primary mb-0 is-relative is-retro"
                >
                  Was ist Full-Stack?
                </div>
                <mq-layout :mq="['tablet']" class="my-3"></mq-layout>
                <div class="is-flex is-justify-content-flex-end">
                  <div class="switch-cards" id="switch-cards">
                    <mq-layout
                      :mq="['desktop', 'widescreen', 'fullhd']"
                      class="mr-4 py-6"
                      style="border-right: 2px solid white; mix-blend-mode: difference"
                    ></mq-layout>
                    <div class="card card--frontend">
                      <div class="card-head" style="border-bottom: 2px solid white; mix-blend-mode: difference">
                        <div class="mr-4 py-3" style="border-right: 2px solid white; mix-blend-mode: difference"></div>
                      </div>
                      <div class="card-body">
                        <div class="mr-4 px-4 px-0-tablet" style="border-right: 2px solid #171b20">
                          <div
                            class="title is-3 is-size-4-mobile is-size-4-tablet is-size-4-desktop is-size-4-widescreen is-size-3-fullhd is-broken-grid is-family-superior is-clipped"
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
                <mq-layout class="py-6" :mq="['tablet', 'desktop', 'widescreen', 'fullhd']"></mq-layout>
                <mq-layout class="py-6 my-4" :mq="['desktop', 'widescreen']"></mq-layout>
                <div class="parallax is-clipped mt-6-tablet" style="border-radius: 7px">
                  <mq-layout
                    :mq="['tablet', 'desktop', 'widescreen', 'fullhd']"
                    class="switch-text-backend has-background-white p-4 inset"
                    :class="{ 'is-absolute': ['tablet', 'desktop', 'widescreen', 'fullhd'].includes($mq) }"
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
                  </mq-layout>

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

                  <mq-layout
                    :mq="['mobile']"
                    class="py-6 switch-text-backend has-background-white p-4 inset mt-5"
                    style="top: 0; left: 0; bottom: 0; right: 0; border-radius: 5px"
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
                  </mq-layout>
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
        <div class="hero is-fullheight">
          <div class="container">
            <div class="columns">
              <div class="column is-full">
                <div class="py-6 my-6"></div>
                <mq-layout :mq="['tablet', 'desktop', 'widescreen', 'fullhd']">
                  <div class="py-6 my-6"></div>
                </mq-layout>
                <h3
                  class="title is-5 is-size-7-mobile is-size-6-tablet is-size-5-desktop has-text-centered-tablet has-text-white"
                >
                  Meine persönliche
                </h3>
                <div
                  class="title is-1 is-size-5-mobile is-size-3-tablet is-2-desktop is-size-1-widescreen has-text-centered-tablet mb-6 has-text-white"
                >
                  Wall Of Fail
                </div>
                <p
                  class="title is-3 is-size-6-mobile is-size-5-tablet is-size-3-desktop has-text-centered-tablet has-text-primary is-family-superior"
                >
                  „Wer erfolgreich sein will, muss scheitern!”
                </p>
                <mq-layout :mq="['tablet', 'desktop', 'widescreen', 'fullhd']" class="py-6 my-6"> </mq-layout>
                <p class="title is-6 is-size-7-mobile is-size-7-tablet is-size-6-desktop has-text-white">
                  Und damit in unserer Zusammenarbeit alles glatt geht, sammel ich meine Fails schonmal im Hinterzimmer.
                </p>

                <div class="py-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="end-end-trigger"></div>
    </div>
  </div>
</template>
<script>
import { BREAKPOINTS } from '@/consts/break-points';
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
    mobileTimeline() {
      const scrub = 1;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: `#full-stack-explained__start-trigger`,
          pin: '#frontend-section',
          start: this.$mq === 'mobile' ? 'top -10%' : 'top: 0%',
          scrub,
          end: '+=1000',
        },
      });

      timeline
        .to('.card--frontend .switch-switch', { y: '-20%', duration: 2 })
        .fromTo('.card--frontend .title.is-broken-grid', { y: '15%' }, { y: '-15%', duration: 2 }, '<')
        .from('.card--frontend .fade-in-text', { duration: 2, y: '-15%' }, '<')
        .to('#animate-frontend', { y: '-100%' }, '<')
        .from('#animate-backend', { y: '100%' }, '<')
        .to('.card--frontend .switch-switch-parent', { x: '100%' }, '<')
        .to('.card--frontend .switch-switch .switch-frontend', { x: '-100%' }, '<');
    },
    desktopTimeline() {
      const scrub = 1;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: `#full-stack-explained__start-trigger`,
          endTrigger: `#full-stack-explained__end-trigger`,
          start: 'top 100%',
          scrub,
          end: 'bottom 0%%',
        },
      });

      timeline
        .to('.card--frontend .switch-switch', { y: '-20%', duration: 2 })
        .to('.card--frontend .title.is-broken-grid', { x: '-20%', y: '-15%', duration: 2 }, '<')
        .from('.card--frontend .fade-in-text', { duration: 2, y: '-15%' }, '<');

      const timeline2 = gsap.timeline({
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

      timeline2
        .to('.switch-text-frontend', { y: '-100%', duration: 0.5 })
        .to('#animate-frontend', { y: '-100%' }, '<')
        .from('#animate-backend', { y: '100%' }, '<')
        .to('.parallax', { y: '-50%', duration: 1 }, '<')
        .to('.card--frontend .switch-switch-parent', { x: '100%' }, '<')
        .to('.card--frontend .switch-switch .switch-frontend', { x: '-100%' }, '<');
    },
    setUpTimeline() {
      const mm = gsap.matchMedia();
      mm.add(`(max-width: ${BREAKPOINTS.mobile - 1}px)`, this.mobileTimeline);
      mm.add(`(min-width: ${BREAKPOINTS.mobile}px)`, this.desktopTimeline);
    },
  },
  mounted() {
    this.setUpTimeline();
  },
};
</script>
<style lang="scss">
@import '~@/styles/main.scss';

#full-stack-explained {
  background: linear-gradient(#ffffff 0%, #ffffff 20%, #171b20 20.0001%, #171b20 100%);
}

.switch-text {
  position: absolute;
  width: 100%;
  height: 300px;
}

.inset {
  background-color: #171b20;
}

.switch-cards {
  position: relative;
  width: 100%;

  .card {
    width: 100%;
  }

  .card--frontend {
    .title.is-broken-grid {
      height: 150px;
    }

    .fade-in-text {
      .is-size-7 {
        width: 50px;
        display: inline-block;
      }
    }

    .switch-switch {
      width: 120%;
      mix-blend-mode: difference;
      transform: translate3d(0, 20%, 0);
    }
  }

  .card--backend {
    display: none;
    background-color: #a2cdb1;
  }
}

.parallax {
  z-index: 0;
  position: relative;
  border: 2px solid $black;

  .switch-text-frontend {
    border: 2px solid white;
  }
}

@media screen and (min-width: $tablet) {
  .parallax {
    .switch-text-frontend {
      border: none;
    }
  }
}
@media screen and (min-width: $fullhd) {
  #full-stack-explained {
    background: linear-gradient(#ffffff 0%, #ffffff 30%, #171b20 30.0001%, #171b20 100%);
  }

  .switch-cards {
    width: 66%;

    .card--frontend {
      .title.is-broken-grid {
        height: 225px;

        transform: translate3d(20%, 0%, 0);
      }

      .switch-switch {
        width: 100%;
        transform: translate3d(20%, 100%, 0);
      }
    }
  }

  .parallax .switch-text-frontend {
    border: none;
  }
}
</style>
