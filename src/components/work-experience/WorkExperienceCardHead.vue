<template>
  <div class="py-6">
    <div :id="`trigger_${_uid}`"></div>
    <div class="columns is-gapless">
      <div class="column is-half is-flex is-flex-direction-column is-justify-content-space-between">
        <div
          v-show="['widescreen', 'desktop', 'fullhd'].includes($mq)"
          :id="`panel_${_uid}`"
          :class="experience.backgroundClass"
          class="weird-grid"
        ></div>
        <div style="width: 100%">
          <div class="work-experience-section has-background-light has-text-black" :id="`card_${_uid}`">
            <div :class="{}">
              <div style="border-bottom: 2px solid black">
                <div class="mx-3 p-3" style="border-left: 2px solid black">
                  <p class="title is-6 is-size-7-mobile has-text-black">
                    {{ experience.company }}
                  </p>
                </div>
              </div>

              <div
                :class="{
                  'is-flex is-justify-content-space-between': ['fullhd'].includes($mq),
                  'has-text-left': ['mobile', 'tablet', 'desktop', 'widescreen'].includes($mq),
                }"
              >
                <div
                  class="mx-3"
                  style="border-left: 2px solid black"
                  :class="{
                    'p-5': ['fullhd'].includes($mq),
                    'px-1 py-3': ['mobile', 'tablet', 'desktop', 'widescreen'].includes($mq),
                  }"
                >
                  <div
                    class="mb-1"
                    :class="{
                      'ml-3': ['fullhd'].includes($mq),
                    }"
                  >
                    <b-icon icon="map-marker" class="mr-2"></b-icon>{{ experience.location }}
                  </div>
                  <div
                    class="mb-1"
                    :class="{
                      'ml-3': ['fullhd'].includes($mq),
                    }"
                  >
                    <b-icon icon="calendar" class="mr-2"></b-icon>{{ experience.time }}
                  </div>
                  <div
                    class="mb-1"
                    :class="{
                      'ml-3': ['fullhd'].includes($mq),
                    }"
                  >
                    <b-icon icon="clock-outline" class="mr-2"></b-icon>{{ experience.timeModel }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-half" v-show="['widescreen', 'desktop', 'fullhd'].includes($mq)">
        <div class="px-6">
          <b-image
            :src="experience.imageUrl"
            :class="experience.imageClass || ''"
            :id="`image_${_uid}`"
            class="is-clipped is-tinted"
            style="z-index: 4"
          ></b-image>
        </div>
      </div>
    </div>
    <div :id="`end-trigger_${_uid}`"></div>
  </div>
</template>
<script>
import gsap from 'gsap';

export default {
  name: 'WorkExperienceCardHead',

  props: {
    experience: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      timeline: null,
    };
  },

  methods: {
    setUpTimeline() {
      if (!['desktop', 'widescreen', 'fullhd'].includes(this.$mq)) return;
      this.timeline = gsap.timeline({
        scrollTrigger: {
          trigger: `#trigger_${this._uid}`,
          endTrigger: `#end-trigger_${this._uid}`,
          start: 'top 100%',
          end: 'top 50%',
          scrub: true,
        },
      });

      this.timeline
        .fromTo(`#panel_${this._uid}`, { x: 0, y: '200%', scale: 0.7 }, { x: 0, y: '100%', scale: 1 }, 0)
        .fromTo(`#card_${this._uid}`, { x: '15%' }, { x: '20%' }, 0)
        .fromTo(`#image_${this._uid}`, { x: '-20%' }, { x: 0, y: '-100px' }, 0);
    },
  },
  mounted() {
    this.setUpTimeline();
    window.addEventListener('resize', () => {
      this.timeline.kill();
      this.timeline = null;

      this.setUpTimeline();
    });
  },
};
</script>
<style lang="scss">
.weird-grid {
  width: 150px;
  height: 150px;
}
</style>
