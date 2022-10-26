<template>
  <div class="hero is-small">
    <div class="hero-body pb-0 is-clipped">
      <div class="work-experience-section has-background-light">
        <div :class="{}">
          <div style="border-bottom: 2px solid black">
            <div class="mx-3 p-3" style="border-left: 2px solid black">
              <p class="title is-6 is-size-7-mobile">
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
                'p-6': ['fullhd'].includes($mq),
                'px-1 py-3': ['mobile', 'tablet', 'desktop', 'widescreen'].includes($mq),
              }"
            >
              <div
                :class="{
                  'mb-3': ['mobile', 'tablet', 'desktop', 'widescreen'].includes($mq),
                }"
              >
                <b-icon icon="map-marker" class="mr-2"></b-icon>{{ experience.location }}
              </div>
              <div
                :class="{
                  'ml-3': ['fullhd'].includes($mq),
                  'mb-3': ['mobile', 'tablet', 'desktop', 'widescreen'].includes($mq),
                }"
              >
                <b-icon icon="calendar" class="mr-2"></b-icon>{{ experience.time }}
              </div>
              <div
                :class="{
                  'ml-3': ['fullhd'].includes($mq),
                  'mb-3': ['mobile', 'tablet', 'desktop', 'widescreen'].includes($mq),
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
};
</script>
