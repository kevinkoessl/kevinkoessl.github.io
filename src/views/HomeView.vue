<template>
  <div class="home">
    <div class="main-hero">
      <job-search-hero />
    </div>
    <div>
      <silicon-valley-hero class="is-relative"></silicon-valley-hero>

      <slide-text-wall></slide-text-wall>

      <section class="hero is-medium has-gridlines is-black has-gridlines-right is-relative" style="z-index: 98">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-multiline is-gapless">
              <div class="column is-full">
                <div class="py-6">
                  <div class="title is-3 is-size-6-mobile is-size-5-tablet is-size-3-desktop has-text-white">
                    Willkommen auf meinem virtuellen Spielplatz!
                  </div>
                  <br />
                  <p class="is-size-6 is-size-7-mobile is-size-7-tablet is-size-6-desktop has-text-white">
                    Als erfahrener Webentwickler mit einem Faible für GSAP, Vue, Nest.js und einer Prise Machine
                    Learning bin ich hier, um deine Projekte auf das nächste Level zu katapultieren.
                  </p>
                  <div class="is-large has-text-centered my-6 py-6">
                    <div :id="`start-trigger_${_uid}`"></div>
                    <div class="py-6 my-6" v-if="!['mobile', 'tablet'].includes($mq)"></div>
                    <div
                      class="title is-2 is-size-5-mobile is-size-4-tablet is-size-2-desktop is-family-secondary mb-6"
                    >
                      EXAKT
                    </div>
                    <div class="columns is-gapless is-centered is-multiline" id="date-cards">
                      <div
                        class="column is-one-third-tablet is-one-fifth-desktop"
                        v-for="entry in dateDifference"
                        :key="entry.label"
                      >
                        <div
                          :class="{
                            'p-1': ['mobile', 'tablet'].includes($mq),
                            'p-2': ['desktop', 'widescreen', 'fullhd'].includes($mq),
                          }"
                        >
                          <div class="card py-6 px-4-tablet has-background-primary" :id="`card_${_uid}_${entry.label}`">
                            <div
                              class="title is-3 is-size-5-tablet is-size-4-widescreen is-size-3-fullhd has-text-white"
                            >
                              {{ entry.value }}
                            </div>
                            <div class="title is-6 is-size-6-mobile is-size-7-tablet is-size-6-fullhd has-text-black">
                              {{ entry.label }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="title is-4 is-size-5-mobile mt-6 mb-1">Praktische Erfahrung</div>
                    <div class="py-6 mb-6">
                      <span class="has-text-primary">[</span> In case that really matters to you
                      <span class="has-text-primary">]</span>
                    </div>

                    <div :id="`end-trigger_${_uid}`"></div>
                  </div>

                  <div class="columns">
                    <div class="column is-full is-two-thirds-widescreen is-half-fullhd">
                      <div class="title is-3 is-size-4-mobile"><span class="has-text-primary">#</span>amazing</div>
                      <p class="is-size-7 has-text-white has-text-weight-bold">
                        <br />Bis heute habe ich so manche Codezeile geschrieben, aber mein wahrer Stolz liegt in all
                        den Nutzererlebnissen, die ich bisher bei meiner Arbeit gestalten durfte. Denn was nützt der
                        beste Code, wenn deine Benutzer sich wie in einem Labyrinth verirren?
                      </p>
                      <div class="py-6">
                        <b-button
                          type="is-white is-outlined mr-4"
                          size="is-medium"
                          icon-right="arrow-right"
                          @click="$router.push({ path: '/experience' })"
                          >Lebenslauf</b-button
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="is-relative">
        <section class="hero is-large has-gridlines is-white has-gridlines-right">
          <div class="hero-body">
            <div>
              <div class="columns is-multiline is-gapless">
                <div class="column is-full">
                  <div class="title is-4 is-size-7-mobile is-size-5-tablet is-size-4-desktop is-family-superior">
                    Mein Ziel ist es, Webanwendungen zu gestalten, die so intuitiv sind, dass selbst Oma Waltraud sie
                    ohne Anleitung bedienen kann. Klingt nach einem Abenteuer? Dann lass uns gemeinsam großartige
                    digitale Erlebnisse erschaffen!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <full-stack-explained></full-stack-explained>

        <project-gallery />

        <section class="hero is-fullheight is-white">
          <div class="hero-body is-relative is-justify-content-center">
            <div>
              <div class="columns is-centered has-text-centered-tablet has-text-left-mobile">
                <div class="column is-two-thirds-desktop">
                  <div class="title is-3 is-size-5-mobile is-size-tablet is-size-3-desktop">
                    Noch nicht überzeugt<span class="has-text-primary">?</span>
                  </div>
                  <p class="is-size-6-tablet is-size-7-mobile has-text-black has-text-weight-bold">
                    Dann ist Dir leider nicht mehr zu helfen. 😁 <br />
                  </p>
                  <p>
                    Schau doch nochmal über meinen Lebenslauf, oder schreib mir gerne bei LinkedIn und überleg's Dir ein
                    zweites mal. Ich freue mich schon auf Deine Nachricht!
                  </p>
                  <div class="py-6 has-text-centered-mobile">
                    <a
                      href="https://www.linkedin.com/in/kevin-k%C3%B6ssl-a7a792232/"
                      class="button is-ghost has-text-black"
                      :class="$mq === 'mobile' ? 'is-small' : 'is-medium'"
                      target="_blank"
                      >zu LinkedIn</a
                    >
                    <b-button
                      type="is-black is-outlined mr-4"
                      :size="$mq === 'mobile' ? 'is-small' : 'is-medium'"
                      icon-right="arrow-right"
                      @click="$router.push({ path: '/experience' })"
                      >Lebenslauf</b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

import LightBulbSection from '@/components/LightBulbSection.vue';
import MainHero from '@/components/MainHero.vue';
import TextSlide from '@/components/TextSlide.vue';
import SideScrollBeatTimeline from '@/components/SideScrollBeatTimeline.vue';

import WordCluster from '@/components/WordCluster.vue';
import JobSearchHero from '@/components/job-search/JobSearchHero.vue';
import SiliconValleyHero from '@/components/silicon-valley/SiliconValleyHero.vue';
import ContactForm from '@/components/contact/ContactForm.vue';
import FullStackExplained from '@/components/full-stack-explained/FullStackExplained.vue';
import SlideTextWall from '@/components/slide-text-wall/SlideTextWall.vue';
import ProjectGallery from '@/components/project-gallery/ProjectGallery.vue';
import { BREAKPOINTS } from '@/consts/break-points';

export default {
  name: 'HomeView',
  data() {
    return {
      startDate: null,
      currentDate: null,
      interval: null,
      timeline: null,
    };
  },
  components: {
    WordCluster,
    LightBulbSection,
    SideScrollBeatTimeline,
    MainHero,
    TextSlide,
    JobSearchHero,
    ContactForm,
    FullStackExplained,
    SiliconValleyHero,
    SlideTextWall,
    ProjectGallery,
  },
  computed: {
    dateDifference() {
      if (!this.currentDate || !this.startDate) {
        return '';
      }

      const diff = this.$moment.duration(this.currentDate.diff(this.startDate));

      const a = this.$moment([this.currentDate.year(), this.startDate.month(), this.startDate.date()]);

      const dayDiff = this.$moment.duration(this.currentDate.diff(a)).asDays();

      console.log(a);

      const date = diff._data;
      return [
        { label: 'Jahre', value: date.years },
        { label: 'Tage', value: Math.floor(dayDiff) },
        { label: 'Stunden', value: date.hours },
        { label: 'Minuten', value: date.minutes },
        { label: 'Sekunden', value: date.seconds },
      ];
    },
  },
  methods: {
    setUpTimeline() {
      const scrub = 1;

      const mm = gsap.matchMedia();

      mm.add(`(min-width: ${BREAKPOINTS.widescreen}px)`, () => {
        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: `#start-trigger_${this._uid}`,
            endTrigger: `#end-trigger_${this._uid}`,
            start: 'top 10%',
            end: 'bottom 50%',
            scrub,
          },
        });

        this.dateDifference.forEach((entry, index) => {
          const value = -(index - Math.floor(this.dateDifference.length / 2));
          timeline.fromTo(
            `#card_${this._uid}_${entry.label}`,
            {
              x: value * 269,
            },
            {
              x: 0,
              ease: 'power4.out',
              rotate: 0,
            },
            '<'
          );
        });
      });
    },
    updateCurrentDate() {
      this.currentDate = this.$moment();
    },
    createInterval() {
      this.interval = setInterval(this.updateCurrentDate, 1000);
    },
  },

  mounted() {
    this.startDate = this.$moment.parseZone('01 Feb 2019 10:00:00+0:00');
    this.currentDate = this.$moment();
    this.createInterval();
    window.scrollTo(0, 0);

    setTimeout(() => {
      this.setUpTimeline();
    }, 1000);
  },
};
</script>
<style lang="scss">
@import '~@/styles/main.scss';

.column .box {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title.is-retro {
  //text-shadow: 1px 1px 0px #161032, 2px 2px 0px #161032, 3px 3px 0px #161032, 4px 4px 0px #161032, 5px 5px 0px #161032;
}

@media screen and (min-width: $desktop) {
  .title.is-retro {
    /** 
    text-shadow: 1px 1px 0px #161032, 2px 2px 0px #161032, 3px 3px 0px #161032, 4px 4px 0px #161032, 5px 5px 0px #161032,
      6px 6px 0px #161032, 7px 7px 0px #161032, 8px 8px 0px #161032, 9px 9px 0px #161032, 10px 10px 0px #161032;
      */
  }
}

.is-retro:not(.title) {
  border: 2px solid #161032;
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 1px 1px 0px #161032, 2px 2px 0px #161032, 3px 3px 0px #161032, 4px 4px 0px #161032, 5px 5px 0px #161032,
    6px 6px 0px #161032, 7px 7px 0px #161032, 8px 8px 0px #161032, 9px 9px 0px #161032, 10px 10px 0px #161032;

  img {
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
  &:hover {
    box-shadow: 1px 1px 0px $success, 2px 2px 0px $success, 3px 3px 0px $success, 4px 4px 0px $success,
      5px 5px 0px $success, 6px 6px 0px $success, 7px 7px 0px $success, 8px 8px 0px $success, 9px 9px 0px $success,
      10px 10px 0px $success;
  }
}

.title.has-underline {
  &:after {
    content: '';
    position: absolute;
    left: 5px;
    right: 5px;
    bottom: 0;
    height: 4px;
    margin-top: 5px;
    background: $primary;
  }
}

#date-cards {
  position: relative;
  .column {
    position: sticky;
    top: 0;
  }
  .card {
    outline: 2px solid $black;
  }
}

@media screen and (min-width: $tablet) {
  .main-hero {
    position: sticky;
    top: 0;
  }

  #date-cards {
    .column {
      z-index: 0;
      position: relative;
    }

    .column:first-child {
      z-index: 100;
    }
  }
}

.is-retro:not(.title) {
  position: relative;
  img {
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: $primary;
    opacity: 0.8;
    mix-blend-mode: hard-light;
    transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
    pointer-events: none;
  }

  &.is-success {
    &:after {
      background-color: $success;
    }
  }

  &.is-danger {
    &:after {
      background-color: $danger;
      mix-blend-mode: darken;
    }
  }

  &.is-info {
    &:after {
      background-color: lighten($info, 20%);
    }
  }

  &:hover {
    &:after {
      opacity: 0.5;
      transform: translate3d(-20px, -20px, 0);
    }
  }
}

.is-tinted {
  background-color: #d7a621;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #6fc8ac;
    mix-blend-mode: hard-light;
    opacity: 0.4;
  }

  img {
    -webkit-filter: grayscale(100%) contrast(1.2);
    filter: grayscale(100%) contrast(1);
    mix-blend-mode: multiply;
  }

  &.is-primary {
    background-color: $primary;
  }
  &.is-success {
    background-color: #00ff36;

    img {
      mix-blend-mode: multiply;
      -webkit-filter: grayscale(100%) contrast(1.2);
      filter: grayscale(100%) contrast(1);
    }

    &:after {
      background-color: #23278a;
      mix-blend-mode: lighten;
    }
  }

  &.is-danger {
    background-color: #e41c2d;

    &:after {
      background-color: #1d3162;
      mix-blend-mode: lighten;
    }
  }

  &.is-info {
    background-color: #e50914;

    img {
      -webkit-filter: grayscale(100%) contrast(1.2);
      filter: grayscale(100%) contrast(1.2);
      opacity: 0.8;
    }
    &:after {
      mix-blend-mode: lighten;
      -webkit-filter: contrast(1.1);
      filter: contrast(1.1);
      background-color: #282581;
    }
  }
}

.hero-body__content {
  //position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  bottom: 0;
}

@media screen and (min-width: $desktop) {
  .hero-body__content {
    top: 20%;
  }
}

.has-background-wavy {
  background: radial-gradient(circle at 100% 50%, transparent 20%, $info 21%, $info 34%, transparent 35%, transparent),
    radial-gradient(circle at 0% 50%, transparent 20%, $info 21%, $info 34%, transparent 35%, transparent) 0 -50px;
  background-color: $purple;
  background-size: 75px 100px;
  transition: background-size 1000ms ease-in-out;
}

.has-background-polka-dot {
  background-color: $yellow;
  background-image: radial-gradient($success 15%, transparent 16%), radial-gradient($success 15%, transparent 16%);
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
}

.has-background-zigzag {
  background: linear-gradient(135deg, $info 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, $info 25%, transparent 25%) -50px 0, linear-gradient(315deg, $info 25%, transparent 25%),
    linear-gradient(45deg, $info 25%, transparent 25%);
  background-size: 100px 100px;
  background-color: $success;
}

.has-background-cross {
  background: radial-gradient(circle, transparent 20%, $red 20%, $red 80%, transparent 80%, transparent),
    radial-gradient(circle, transparent 20%, $red 20%, $red 80%, transparent 80%, transparent) 50px 50px,
    linear-gradient($info 8px, transparent 8px) 0 -4px, linear-gradient(90deg, $info 8px, transparent 8px) -4px 0;
  background-color: $red;
  background-size: 100px 100px, 100px 100px, 50px 50px, 50px 50px;
}

.noise-overlay {
  background: url('@/assets/textures/random-noise.jpg');
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-repeat: repeat;
  z-index: 10000000;
  mix-blend-mode: darken;
  opacity: 0.1;
  pointer-events: none;
  background-size: 100px 100px;
}

.hero.has-gridlines {
  $gridline-color: $black;

  .hero-head {
    border-bottom: 1px solid $gridline-color;

    .container {
      border-left: 1px solid $gridline-color;
      margin-left: 10px;
      min-height: 50px;
    }
  }

  .hero-foot {
    border-top: 1px solid $gridline-color;
  }

  &.is-black {
    $gridline-color: $white;
    .hero-head {
      border-bottom: 1px solid $gridline-color;

      .container {
        border-left: 1px solid $gridline-color;
      }
    }

    .hero-foot {
      border-top: 1px solid $gridline-color;
    }
  }
}

@media screen and (min-width: $desktop) {
  .hero.has-gridlines {
    $gridline-color: $black;

    .hero-head {
      border-bottom: 2px solid $gridline-color;

      .container {
        border-left: 2px solid $gridline-color;
        margin-left: 50px;
        min-height: 50px;
      }
    }

    .hero-foot {
      border-top: 2px solid $gridline-color;
    }
    .hero-body {
      margin: 0 50px;
      border-left: 2px solid $gridline-color;
    }

    &.has-gridlines-right {
      .hero-body {
        margin: 0 50px;
        border-left: none;
        border-right: 2px solid $gridline-color;
      }
    }

    &.is-black {
      $gridline-color: $white;
      .hero-head {
        border-bottom: 2px solid $gridline-color;

        .container {
          border-left: 2px solid $gridline-color;
        }
      }
      .hero-body {
        border-left: 2px solid $gridline-color;
      }

      .hero-foot {
        border-top: 2px solid $gridline-color;
      }

      &.has-gridlines-right {
        .hero-body {
          margin: 0 50px;
          border-left: none;
          border-right: 2px solid $gridline-color;
        }
      }
    }
  }
}
</style>
