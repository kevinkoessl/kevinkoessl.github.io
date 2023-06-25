<template>
  <div class="project-tile">
    <div :id="`start-trigger_${_uid}`"></div>
    <div class="columns is-centered">
      <div class="column is-5 is-flex is-align-items-center is-justify-content-flex-end">
        <h2
          :id="`title_${_uid}`"
          class="title is-4 is-broken-grid has-text-right has-text-white"
          v-html="data.subtitle"
        ></h2>
      </div>
      <div class="column is-6">
        <div class="grid-line mx-4 py-6" :class="type"></div>
        <div class="card has-gridlines" :id="`card_${_uid}`">
          <div class="card-header">
            <div class="grid-line mx-4 py-3" :class="type"></div>
          </div>
          <div class="card-content mx-4 has-gridlines" :class="type">
            <h3 class="title is-4 py-4 is-family-secondary" :id="`subtitle_${_uid}`">{{ data.title }}</h3>
            <p
              :id="`content_${_uid}`"
              class="content is-broken-grid py-4 px-6 has-background-primary has-text-white has-text-weight-bold"
              v-html="data.description"
            ></p>
            <div v-html="data.challenges"></div>
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
    return { timeline: null };
  },
  methods: {
    setUpTimeline() {
      this.timeline = gsap.timeline({
        scrollTrigger: {
          trigger: `#start-trigger_${this._uid}`,
          endTrigger: `#end-trigger_${this._uid}`,
          scrub: 1,
          start: 'top 100%',
          end: 'bottom: 0%',
        },
      });

      this.timeline
        .from(`#title_${this._uid}`, { x: '50%', duration: 0.5 })
        .from(`#card_${this._uid}`, { x: '-100px', duration: 0.5 }, '<')
        .fromTo(`#content_${this._uid}`, { x: 0 }, { x: '20%', duration: 0.5 }, '<')
        .fromTo(`#subtitle_${this._uid}`, { y: '10%' }, { y: '-10%', duration: 1 }, '<50%')
        .fromTo(`#content_${this._uid}`, { y: '50%' }, { y: '-10%', duration: 1 }, '<');
    },
  },

  mounted() {
    this.setUpTimeline();
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
    transform: translate3d(20%, 0%, 0);
    background: $primary;
    border: 2px solid $black;
    width: 110%;
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
</style>
