<template>
  <div class="section work-experience-section my-6" @click="isOpen = !isOpen" :class="{ 'is-open': isOpen }">
    <div class="columns">
      <div class="column is-one-third has-text-grey-dark">
        <p class="title is-6">
          {{ experience.company }}
        </p>
        <div class="work-experience__meta">
          <p class="mb-4"><b-icon icon="map-marker" class="mr-3"></b-icon>{{ experience.location }}</p>
          <p><b-icon icon="calendar" class="mr-3"></b-icon>{{ experience.time }}</p>
        </div>
      </div>
      <div class="column is-two-thirdsl">
        <div class="work-experience__content has-background-lightest">
          <div class="is-flex is-justify-content-space-between is-align-items-center mb-5">
            <div class="title is-6 mb-0">{{ experience.jobTitle }}</div>
            <!-- b-icon icon="plus" class="work-experience__toggle" size="is-medium"></b-icon -->
          </div>
          <p class="has-text-weight-bold">{{ experience.teaser }}</p>
          <b-collapse v-model="isOpen" animation="slide">
            <p
              v-for="(contentLine, index) in experience.content"
              :key="`experience-entry_${experience.id}_content-line__${index}`"
            >
              <span>{{ contentLine }}</span
              ><br />
            </p>
            <div class="has-text-right" v-if="experience.weblink">
              <a :href="experience.weblink">zur Website </a>
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WorkExperienceCard',

  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
  data() {
    return { isOpen: true };
  },
  computed: {},
};
</script>
<style lang="scss">
.work-experience-section {
  outline: 2px solid transparent;
  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  .work-experience__content,
  .work-experience__meta {
    position: relative;
    transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
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
    outline: 2px solid black;
    cursor: pointer;

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
