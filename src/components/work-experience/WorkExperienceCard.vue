<template>
  <div class="py-6">
    <div :id="`trigger_${_uid}`"></div>
    <div :id="`trigger-background-image_${_uid}`"></div>
    <div v-show="['mobile'].includes($mq)" :id="`work-experience-image-hero_${_uid}`" class="hero is-fullheight">
      <div class="hero-background">
        <div :id="`work-experience-image_${_uid}`" class="has-background-dark is-clipped work-experience-image-div">
          <b-image
            :src="experience.imageUrl"
            class="is-clipped is-tinted"
            :class="experience.imageClass || ''"
          ></b-image>
        </div>
      </div>
    </div>
    <div :id="`trigger-slide-show_${_uid}`"></div>
    <div class="columns is-gapless is-multiline">
      <div class="column is-full">
        <div
          v-show="['tablet', 'desktop', 'widescreen', 'fullhd'].includes($mq)"
          :id="`work-experience-image-hero_${_uid}-desktop`"
          class="hero"
        >
          <div class="hero-background">
            <div :id="`work-experience-image_${_uid}-desktop`" class="has-background-dark is-clipped">
              <b-image
                :src="experience.imageUrl"
                webp-fallback=".jpg"
                class="is-tinted"
                :class="experience.imageClass || ''"
              ></b-image>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-full" style="position: relative; z-index: 12000n">
        <work-experience-card-head
          :experience="experience"
          :class="{ 'px-4': ['mobile', 'tablet', 'desktop'].includes($mq) }"
        />
        <div
          :id="`work-experience-content_${_uid}`"
          class="content"
          :class="{
            'px-4': ['mobile', 'tablet', 'desktop'].includes($mq),
            'py-6 my-6': ['widescreen', 'fullhd'].includes($mq),
          }"
        >
          <div class="is-flex is-justify-content-space-between is-align-items-center mb-5">
            <div class="title is-3 is-size-7-mobile is-size-5-tablet mb-0 is-family-secondary">
              {{ experience.jobTitle }}
            </div>
            <!-- b-icon icon="plus" class="work-experience__toggle" size="is-medium"></b-icon -->
          </div>
          <p class="has-text-weight-bold">{{ experience.teaser }}</p>
          <div :id="`experience-trigger_${_uid}`"></div>

          <ul>
            <li
              v-for="(contentLine, index) in experience.content"
              :key="`experience-entry_${_uid}_content-line__${index}`"
            >
              <span>{{ contentLine }}</span
              ><br />
            </li>
          </ul>
        </div>
      </div>
      <div v-if="experience.skills" class="column is-half-widescreen">
        <div class="mt-6"></div>
        <div :class="{ 'px-4': ['mobile', 'tablet', 'desktop'].includes($mq) }">
          <div class="title is-6 is-size-7-mobilet">Skills</div>
          <b-taglist class="work-experience__skills" ref="skillContainer">
            <b-tag
              v-for="(skill, index) in experience.skills"
              :key="`work-experience_${_uid}-skill_${index}`"
              :ref="`work-experience_${_uid}-skill_${index}`"
              :id="`work-experience_${_uid}-skill_${index}`"
              :size="$mq === 'mobile' ? 'is-small' : 'is-large'"
              type="is-primary"
              >{{ skill }}</b-tag
            >
          </b-taglist>
        </div>
      </div>
    </div>

    <div :id="`end-trigger_${_uid}`"></div>
  </div>
</template>
<script>
import WorkExperienceCardHead from './WorkExperienceCardHead.vue';

export default {
  components: { WorkExperienceCardHead },
  name: 'WorkExperienceCard',
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
  data() {
    return { isOpen: true, timeline: null, timeline2: null };
  },
};
</script>
<style lang="scss">
.work-experience-section {
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

.hero {
  position: relative;
  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .image,
    div,
    img {
      height: 100%;
    }
  }
}

.work-experience__skills {
  overflow: visible;
}
</style>
