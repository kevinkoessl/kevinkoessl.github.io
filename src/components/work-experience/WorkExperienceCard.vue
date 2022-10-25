<template>
  <div>
    <div :id="`trigger_${_uid}`"></div>
    <div :id="`trigger-background-image_${_uid}`"></div>
    <div :id="`work-experience-image-hero_${_uid}`" class="hero is-fullheight">
      <div class="hero-background">
        <div :id="`work-experience-image_${_uid}`" class="has-background-dark is-clipped">
          <b-image :src="experience.imageUrl" class="is-clipped" :class="experience.imageClass || ''"></b-image>
        </div>
      </div>
    </div>
    <div :id="`trigger-slide-show_${_uid}`"></div>
    <div class="hero is-small">
      <div class="hero-body pb-0 is-clipped">
        <div class="work-experience-section has-background-light">
          <div
            :class="{
              'p-6': ['fullhd'].includes($mq),
              'p-3': ['mobile', 'tablet', 'desktop', 'widescreen'].includes($mq),
            }"
          >
            <p class="title is-6 is-size-7-mobile">
              {{ experience.company }}
            </p>

            <div
              :class="{
                'is-flex is-justify-content-space-between': ['fullhd'].includes($mq),
                'has-text-left': ['mobile', 'tablet', 'desktop', 'widescreen'].includes($mq),
              }"
            >
              <div
                :class="{
                  'mb-3': ['mobile', 'tablet', 'desktop', 'widescreen'].includes($mq),
                }"
              >
                <b-icon icon="map-marker"></b-icon>{{ experience.location }}
              </div>
              <div
                :class="{
                  'ml-3': ['fullhd'].includes($mq),
                  'mb-3': ['mobile', 'tablet', 'desktop', 'widescreen'].includes($mq),
                }"
              >
                <b-icon icon="calendar"></b-icon>{{ experience.time }}
              </div>
              <div
                :class="{
                  'ml-3': ['fullhd'].includes($mq),
                  'mb-3': ['mobile', 'tablet', 'desktop', 'widescreen'].includes($mq),
                }"
              >
                <b-icon icon="clock-outline"></b-icon>{{ experience.timeModel }}
              </div>
            </div>

            <p></p>
          </div>
        </div>
      </div>
    </div>
    <div class="hero" :id="`work-experience-content_${_uid}`">
      <div class="hero-body is-clipped">
        <div class="content is-clipped">
          <div class="is-flex is-justify-content-space-between is-align-items-center mb-5">
            <div class="title is-6 is-size-7-mobile mb-0 has-text-white">{{ experience.jobTitle }}</div>
            <!-- b-icon icon="plus" class="work-experience__toggle" size="is-medium"></b-icon -->
          </div>
          <p class="has-text-weight-bold has-text-white">{{ experience.teaser }}</p>
          <div :id="`experience-trigger_${_uid}`"></div>
          <ul class="has-text-white">
            <li
              v-for="(contentLine, index) in experience.content"
              :key="`experience-entry_${_uid}_content-line__${index}`"
            >
              <span>{{ contentLine }}</span
              ><br />
            </li>
          </ul>
        </div>
        <div v-if="experience.skills" class="mt-6">
          <div class="title is-6 has-text-white">Skills</div>
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

export default {
  name: 'WorkExperienceCard',
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
  data() {
    return { isOpen: true, timeline: null, timeline2: null, timeline3: null };
  },
  mounted() {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: `#trigger-background-image_${this._uid}`,
        endTrigger: `#end-trigger_${this._uid}`,
        start: `top 0%`,
        end: `bottom bottom`,
        scrub: 1,
        pin: `#work-experience-image_${this._uid}`,
      },
    });

    timeline
      //.fromTo(`#work-experience-image_${this._uid}`, { scale: 0.85 }, { scale: 1.1, duration: 1 })
      .fromTo(`#work-experience-image_${this._uid} img`, { opacity: 0 }, { opacity: 1, duration: 1 }, 0)
      .fromTo(`#work-experience-image_${this._uid} img`, { borderRadius: 0 }, { borderRadius: 0, duration: 5 }, 0)
      .fromTo(`#work-experience-image_${this._uid} img`, { opacity: 1 }, { opacity: 0, duration: 1 }, '<50%');

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: `#experience-trigger_${this._uid}`,
        start: 'top 50%',
      },
    });

    timeline2
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

      for (let i = 0; i < this.experience.skills.length; i++) {
        let skillTag = this.$refs[`work-experience_${this._uid}-skill_${i}`][0].$el.getBoundingClientRect();
        const skillTagHCenter = skillTag.x + skillTag.width / 2;

        /**
        timeline.fromTo(
          `#work-experience_${this._uid}-skill_${i}`,
          { x: (skillTagHCenter - containerHCenter) * 2 },
          { x: 0 },
          '90%'
        );
        */
      }
    }
    /**
    this.timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: `#trigger_${this._uid}`,
        start: '-=100',
        end: '+=300',
        scrub: true,
      },
    });

    this.timeline2
      .from(`#work-experience-image_${this._uid}`, { scale: 0.8, borderRadius: '50px' })
      .to(`#work-experience-image_${this._uid}`, { scale: 1, borderRadius: 0 });

    this.timeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: `#trigger-columns_${this._uid}`,
        start: 'top 66%',
        end: '+=400',
        scrub: true,
      },
    });

    this.timeline3
      .from(`#work-experience-columns_${this._uid}`, { y: 0 })
      .to(`#work-experience-columns_${this._uid}`, { y: -500 });

    /**

    this.scene3 = new ScrollMagic.Scene({
      triggerElement: `#trigger-columns_${this._uid}`,
      duration: 400,
      offset: -300,
    })
      .setTween(
        gsap.fromTo(
          `#work-experience-columns_${this._uid}`,
          100,
          { translateY: 0 },
          { translateY: '-500px', immediateRender: false }
        )
      )
      //.addIndicators({ name: 'pin scene', colorEnd: '#FFFFFF' })
      .addTo(this.controller);
    */
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
</style>
