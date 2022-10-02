<template>
  <div>
    <div class="work-experience-section my-6" :id="`work-experience-columns_${experience.id}`">
      <div :id="`trigger_${experience.id}`"></div>
      <div class="columns is-gapless">
        <div class="column is-half has-background-light">
          <div class="columns">
            <div class="column is-full">
              <div class="work-experience-box p-6">
                <p class="title is-6">
                  {{ experience.company }}
                </p>

                <div class="class is-flex is-align-items-baseline">
                  <b-icon icon="map-marker"></b-icon>{{ experience.location }}
                  <b-icon icon="calendar" class="ml-5"></b-icon>{{ experience.time }}
                  <b-icon icon="clock-outline" class="ml-5"></b-icon>{{ experience.timeModel }}
                </div>

                <p></p>
              </div>
            </div>
            <div class="column is-half"></div>
            <div class="column is-3"></div>
          </div>

          <div class="work-experience__meta"></div>

          <div class="p-6 is-flex is-flex-direction-column is-justify-content-space-between">
            <div class="work-experience__content has-background-lightest content">
              <div class="is-flex is-justify-content-space-between is-align-items-center mb-5">
                <div class="title is-6 mb-0">{{ experience.jobTitle }}</div>
                <!-- b-icon icon="plus" class="work-experience__toggle" size="is-medium"></b-icon -->
              </div>
              <p class="has-text-weight-bold">{{ experience.teaser }}</p>

              <ul>
                <li
                  v-for="(contentLine, index) in experience.content"
                  :key="`experience-entry_${experience.id}_content-line__${index}`"
                >
                  <span>{{ contentLine }}</span
                  ><br />
                </li>
              </ul>
            </div>
            <div v-if="experience.skills" class="mt-6">
              <div class="title is-6">Skills</div>
              <b-taglist class="work-experience__skills">
                <b-tag
                  v-for="(skill, index) in experience.skills"
                  :key="`work-experience_${experience.id}-skill_${index}`"
                  type="is-dark"
                  >{{ skill }}</b-tag
                >
              </b-taglist>
            </div>
          </div>
        </div>
        <div class="column is-half has-background-wavy work-experience__image">
          <div class="p-6" style="border: 5px solid black; height: 100%">
            <div class="is-clipped has-background-light m-6" style="border: 5px solid black">
              <b-image
                :src="experience.imageUrl"
                ratio="is3by4"
                class="is-clipped"
                :id="`work-experience-image_${experience.id}`"
                :class="experience.imageClass || ''"
              ></b-image>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :id="`trigger-columns_${experience.id}`"></div>
  </div>
</template>
<script>
import * as ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginIndicator } from 'scrollmagic-plugins';

ScrollMagicPluginIndicator(ScrollMagic);
import { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugins';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

let controller = null;

export default {
  name: 'WorkExperienceCard',
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
  data() {
    return { isOpen: true, scene1: null, scene2: null };
  },
  mounted() {
    controller = new ScrollMagic.Controller();

    this.scene1 = new ScrollMagic.Scene({
      triggerElement: `#trigger_${this.experience.id}`,
      duration: 300,
    })

      .setTween(
        TweenMax.fromTo(
          `#work-experience-image_${this.experience.id}`,
          1000,
          { scale: 1, borderRadius: 0 },
          { scale: 0.8, borderRadius: '50px' }
        )
      )

      //.addIndicators({ name: 'pin scene', colorEnd: '#FFFFFF' })
      .addTo(controller);

    this.scene2 = new ScrollMagic.Scene({
      triggerElement: `#trigger-columns_${this.experience.id}`,
      duration: 400,
      offset: -300,
    })
      .setTween(
        TweenMax.fromTo(
          `#work-experience-columns_${this.experience.id}`,
          100,

          { translateX: 0, scale: 1 },
          { translateY: '-500px' }
        )
      )
      //.addIndicators({ name: 'pin scene', colorEnd: '#FFFFFF' })
      .addTo(controller);
  },
  computed: {},
};
</script>
<style lang="scss">
.work-experience-section {
  outline: 2px solid black;
  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  .work-experience__content,
  .work-experience__meta {
    position: relative;
    transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .work-experience-box {
    border-bottom: 2px solid black;
  }

  .work-experience__image {
    border-left: 2px solid black;
  }
  &:not(:hover) {
    .box.work-experience__content {
      box-shadow: none;
    }
  }

  .work-experience__meta {
    transform: translate3d(0, 15%, 0);
    opacity: 0;
  }

  .work-experience__toggle {
    transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      transform: scale(1.5);
    }
  }

  &:hover {
    //outline: 2px solid black;
    //cursor: pointer;

    .work-experience__meta {
      transform: unset;
      opacity: 1;
    }
  }

  &.is-open {
    .work-experience__toggle {
      transform: rotate3d(0, 0, 1, 45deg);

      &:hover {
        transform: rotate3d(0, 0, 1, 45deg) scale(1.5);
      }
    }
  }
}
</style>
