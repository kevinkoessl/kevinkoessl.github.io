<template>
  <div class="py-6">
    <div :id="`trigger_${_uid}`"></div>
    <div class="columns is-gapless">
      <div class="column is-half is-flex is-flex-direction-column is-justify-content-flex-end">
        <div style="width: 100%">
          <div class="mx-6 py-3" style="border-left: 2px solid black"></div>
          <div class="card work-experience-section has-text-black" :id="`card_${_uid}`">
            <div>
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
                  style="border-right: 2px solid black"
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
          <div class="mx-3 py-2" style="border-right: 2px solid black"></div>
        </div>
      </div>
      <div class="column is-half" v-show="['tablet', 'widescreen', 'desktop', 'fullhd'].includes($mq)">
        <div class="px-6">
          <div class="is-retro">
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
    </div>
    <div :id="`end-trigger_${_uid}`"></div>
  </div>
</template>
<script>
export default {
  name: 'WorkExperienceCardHead',

  props: {
    experience: {
      type: Object,
      required: true,
    },
  },

  methods: {},
};
</script>
<style lang="scss">
.weird-grid {
  width: 150px;
  height: 150px;
}
</style>
