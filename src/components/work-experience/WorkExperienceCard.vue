<template>
  <div class="py-6">
    <div :id="`trigger_${_uid}`"></div>
    <div :id="`trigger-background-image_${_uid}`"></div>
    <div
      v-show="['mobile', 'tablet'].includes($mq)"
      :id="`work-experience-image-hero_${_uid}`"
      class="hero is-fullheight"
    >
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
          v-show="['desktop', 'widescreen', 'fullhd'].includes($mq)"
          :id="`work-experience-image-hero_${_uid}-desktop`"
          class="hero"
        >
          <div class="hero-background">
            <div :id="`work-experience-image_${_uid}-desktop`" class="has-background-dark is-clipped">
              <b-image :src="experience.imageUrl" class="is-tinted" :class="experience.imageClass || ''"></b-image>
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
          :class="{ 'px-4': ['mobile', 'tablet', 'desktop'].includes($mq) }"
        >
          <div class="is-flex is-justify-content-space-between is-align-items-center mb-5">
            <div class="title is-6 is-size-7-mobile mb-0 has-text-light">{{ experience.jobTitle }}</div>
            <!-- b-icon icon="plus" class="work-experience__toggle" size="is-medium"></b-icon -->
          </div>
          <p class="has-text-weight-bold has-text-light">{{ experience.teaser }}</p>
          <div :id="`experience-trigger_${_uid}`"></div>

          <ul class="has-text-light">
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
      <div v-if="experience.skills" class="column is-half">
        <div class="mt-6"></div>
        <div :class="{ 'px-4': ['mobile', 'tablet', 'desktop'].includes($mq) }">
          <div class="title is-6 is-size-7-mobile has-text-light">Skills</div>
          <b-taglist class="work-experience__skills" ref="skillContainer">
            <b-tag
              v-for="(skill, index) in experience.skills"
              :key="`work-experience_${_uid}-skill_${index}`"
              :ref="`work-experience_${_uid}-skill_${index}`"
              :id="`work-experience_${_uid}-skill_${index}`"
              type="is-light"
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
import gsap from 'gsap';
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

  methods: {
    setUpTimeline() {
      let scrub = 1;
      if (['desktop'].includes(this.$mq)) scrub = true;

      this.timeline = gsap.timeline({
        scrollTrigger: {
          trigger: `#trigger-background-image_${this._uid}`,
          endTrigger: `#end-trigger_${this._uid}`,
          start: `top 0%`,
          end: `bottom bottom`,
          scrub,
          pin: `#work-experience-image_${this._uid}${['desktop'].includes(this.$mq) ? '-desktop' : ''}`,
        },
      });

      if (['mobile', 'tablet'].includes(this.$mq))
        this.timeline
          //.fromTo(`#work-experience-image_${this._uid}`, { scale: 0.85 }, { scale: 1.1, duration: 1 })
          .fromTo(`#work-experience-image_${this._uid}`, { opacity: 0 }, { opacity: 1, duration: 1 }, 0)
          .fromTo(`#work-experience-image_${this._uid}`, { borderRadius: 0 }, { borderRadius: 0, duration: 5 }, 0)
          .fromTo(`#work-experience-image_${this._uid}`, { opacity: 1 }, { opacity: 0, duration: 1 }, '<50%');
      else {
        this.timeline
          .fromTo(`#work-experience-image_${this._uid}-desktop`, { scale: 0.5 }, { scale: 1, duration: 1 }, 0)
          .fromTo(`#work-experience-image_${this._uid}-desktop`, { opacity: 1 }, { opacity: 1, duration: 1 }, 1);
        this.timeline2 = gsap.timeline({
          scrollTrigger: {
            trigger: `#experience-trigger_${this._uid}`,
            scrub,
            start: 'top 50%',
          },
        });

        this.timeline2
          .from(`#work-experience-content_${this._uid} li`, {
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power1.inOut',
          })
          .to(`#work-experience-content_${this._uid} li`, {
            opacity: 1,
          });

        if (this.$refs['skillContainer']) {
          let skillContainer = this.$refs.skillContainer.$el.getBoundingClientRect();
          const containerHCenter = skillContainer.x + skillContainer.width / 2;
          const containerVCenter = skillContainer.y + skillContainer.height / 2;

          for (let i = 0; i < this.experience.skills.length; i++) {
            let skillTag = this.$refs[`work-experience_${this._uid}-skill_${i}`][0].$el.getBoundingClientRect();
            const skillTagHCenter = skillTag.x + skillTag.width / 2;
            const skillTagVCenter = skillTag.y + skillTag.height / 2;

            this.timeline2.fromTo(
              `#work-experience_${this._uid}-skill_${i}`,
              {
                x: (skillTagHCenter - containerHCenter) * 2,
                y: (skillTagVCenter - containerVCenter) * 1,
                opacity: 0,
                scale: 1,
              },
              { x: 0, y: 0, opacity: 1, scale: 1, duration: 3 },
              '70%'
            );
          }
        }
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.setUpTimeline();
    }, 5000);

    window.addEventListener('resize', () => {
      this.timeline.kill();
      this.timeline = null;

      if (this.timeline2) {
        this.timeline2.kill();
        this.timeline2 = null;
      }
      this.setUpTimeline();
    });
  },
  beforeDestroy() {
    this.timeline = null;
    this.timeline2 = null;
    this.timeline3 = null;
  },
};
</script>
<style lang="scss">
.work-experience-section {
  border: 2px solid black;
  position: relative;
  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 300;

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
