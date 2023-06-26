<template>
  <div class="project-tile">
    <div :id="`start-trigger_${_uid}`"></div>
    <b-sidebar v-model="isOpen" fullheight scroll="clip" mobile="fullwidth">
      <div class="pt-3 px-3">
        <b-button type="is-ghost" class="has-text-black" icon-left="close" size="is-small" @click="isOpen = false"
          >Schließen</b-button
        >
      </div>
      <div class="section">
        <h3 class="title is-4 is-size-7-mobile py-4-tablet is-family-secondary" :id="`subtitle_${_uid}`">
          {{ data.title }}
        </h3>
        <p
          class="content is-broken-grid p-2 py-4-tablet px-6-tablet has-background-primary has-text-white has-text-weight-bold-tablet"
          v-html="data.description"
        ></p>

        <div v-html="data.challenges"></div>
      </div>
    </b-sidebar>
    <div class="columns is-centered is-multiline">
      <mq-layout
        :mq="['desktop', 'widescreen', 'fullhd']"
        class="column is-full-tablet is-5-desktop is-flex is-align-items-center is-justify-content-flex-end-tablet"
      >
        <h2
          :id="`title_${_uid}`"
          class="title is-4 is-size-7-mobile is-broken-grid has-text-left-mobile has-text-right-desktop has-text-white px-5"
          v-html="data.subtitle"
        ></h2>
      </mq-layout>
      <div class="column is-6-desktop is-full-tablet">
        <div
          class="grid-line mx-4"
          :class="{ [type]: true, 'py-2': ['mobile'].includes($mq), 'py-3': !['mobile'].includes($mq) }"
        ></div>
        <div class="card has-gridlines" :id="`card_${_uid}`">
          <div class="card-header">
            <div class="grid-line mx-4 py-3" :class="type">
              <mq-layout :mq="['mobile', 'tablet']">
                <h3
                  class="title is-4 is-size-7-mobile is-size-7-tablet py-4-tablet px-3 is-family-secondary has-text-white"
                  :id="`subtitle_${_uid}`"
                >
                  {{ data.title }}
                </h3>
              </mq-layout>
            </div>
          </div>
          <div class="card-content px-2 py-4 has-gridlines mx-4" :class="{ [type]: true, ' ': $mq !== 'mobile' }">
            <mq-layout :mq="['desktop', 'widescreen', 'fullhd']">
              <h3
                class="title is-4 is-size-7-mobile is-size-6-tablet is-size-4-widescreen py-4-tablet is-family-secondary"
                :id="`subtitle_${_uid}`"
              >
                {{ data.title }}
              </h3>
              <p
                :id="`content_${_uid}`"
                class="content is-broken-grid p-2 py-4-tablet px-6-tablet has-background-primary has-text-white has-text-weight-bold-tablet"
                v-html="data.description"
              ></p>
              <div v-html="data.challenges"></div>
            </mq-layout>

            <mq-layout :mq="['mobile', 'tablet']">
              <h2 class="is-broken-grid has-text-left-mobile has-text-right-desktop py-3" v-html="data.subtitle"></h2>
              <div class="has-text-right mt-5">
                <b-button icon-right="arrow-right" size="is-small" type="is-primary" @click="isOpen = true"
                  >Mehr Erfahren</b-button
                >
              </div>
            </mq-layout>
          </div>
        </div>
        <div class="grid-line mx-4 py-6" :class="type"></div>
      </div>
    </div>

    <div :id="`end-trigger_${_uid}`"></div>
  </div>
</template>

<script>
import gsap from 'gsap';
import { BREAKPOINTS } from '@/consts/break-points';

export default {
  name: 'ProjectTile',

  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({
        id: null,
        title: '',
        subtitle: '',
        description: '',
        challenges: '',
      }),
    },
    type: {
      type: String,
      required: false,
      default: 'is-right',
    },
  },
  data() {
    return { timeline: null, isOpen: false };
  },
  methods: {
    setUpTimeline() {
      const mm = gsap.matchMedia();

      mm.add(`(min-width: ${BREAKPOINTS.tablet}px)`, () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: `#start-trigger_${this._uid}`,
            endTrigger: `#end-trigger_${this._uid}`,
            scrub: 1,
            start: 'top 100%',
            end: 'bottom: 0%',
          },
        });

        timeline
          .from(`#title_${this._uid}`, { x: '50%', duration: 0.5 })
          .from(`#card_${this._uid}`, { x: '-100px', duration: 0.5 }, '<')
          .fromTo(`#content_${this._uid}`, { x: 0 }, { x: '10%', duration: 0.5 }, '<')
          .fromTo(`#subtitle_${this._uid}`, { y: '10%' }, { y: '-10%', duration: 1 }, '<50%')
          .fromTo(`#content_${this._uid}`, { y: '50%' }, { y: '-10%', duration: 1 }, '<');
      });
    },
  },

  mounted() {
    setTimeout(() => {
      this.setUpTimeline();
    }, 100);
  },
};
</script>

<style lang="scss" scoped>
@import '~@/styles/main.scss';
/* Add your custom styles here */

.grid-line {
  border-right: 2px solid $white;
  mix-blend-mode: difference;
  &.is-left {
    border-right: none;
    border-left: 2px solid $white;
  }
}
.card.has-gridlines {
  .card-header {
    border-bottom: 2px solid $black;

    .grid-line {
      width: 100%;
    }
  }

  .content.is-broken-grid {
    background: $primary;
    border: 2px solid $black;
  }

  .card-content.has-gridlines {
    border-radius: 0;
    border-right: 2px solid $black;

    &.is-left {
      border-right: none;
      border-left: 2px solid $black;
    }
  }
}

@media screen and (min-width: $widescreen) {
  .card.has-gridlines {
    .content.is-broken-grid {
      transform: translate3d(20%, 0%, 0);
      width: 110%;
    }
  }
}

.b-sidebar {
  z-index: 12000;
  position: relative;
}
</style>
