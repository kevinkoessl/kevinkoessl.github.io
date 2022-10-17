<template>
  <div>
    <section class="hero is-medium is-light">
      <div class="hero-body is-relative">
        <div>
          <div class="columns is-multiline is-gapless">
            <div class="column is-full is-half-fullhd pt-6">
              <text-slide :animated-text="heroText1" />
            </div>
            <div class="column is-full is-half-fullhd">
              <div
                :class="{
                  'px-6': ['fullhd'].includes($mq),
                  'py-6': ['mobile', 'tablet', 'desktop', 'widescreen'].includes($mq),
                }"
              >
                <div
                  :style="`${!['mobile', 'tablet', 'desktop', 'widescreen'].includes($mq) && 'width: 80%'}`"
                  class="is-retro"
                >
                  <b-image :src="require('@/assets/img/silicon-valley.png')" ratio="is4by3"></b-image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-large is-light">
      <div class="hero-body">
        <div class="section-one"></div>
        <div>
          <div class="columns is-multiline is-gapless">
            <mq-layout :mq="['mobile', 'tablet', 'desktop', 'widescreen']" class="column is-full is-half-fullhd">
              <text-slide :animated-text="heroText2" />
            </mq-layout>
            <div class="column is-full is-half-fullhd">
              <div
                class="is-flex is-justify-content-flex-end is-relative"
                :class="{
                  'px-6': ['fullhd'].includes($mq),
                  'py-6': ['mobile', 'tablet', 'desktop', 'widescreen'].includes($mq),
                }"
              >
                <!--canvas-3-d class="offset-canvas is-absolute" /-->
                <div
                  :style="`width: ${!['mobile', 'tablet', 'desktop', 'widescreen'].includes($mq) ? '400px' : '100%'}`"
                >
                  <div class="is-retro is-danger has-background-light px-4">
                    <b-image :src="require('@/assets/img/kevin-cutout.png')" ratio="is5by7" />
                  </div>
                </div>
              </div>
              <mq-layout mq="mobile"><canvas-3-d></canvas-3-d></mq-layout>
            </div>
            <mq-layout mq="fullhd" class="column is-full is-half-fullhd">
              <text-slide :animated-text="heroText2" />
            </mq-layout>
          </div>
        </div>
        <div class="section-five"></div>
      </div>
    </section>
  </div>
</template>
<script>
import TextSlide from '../TextSlide.vue';
import Canvas3D from './Canvas3D.vue';
export default {
  name: 'SiliconValleyHero',

  components: {
    TextSlide,
    Canvas3D,
  },

  data() {
    return {
      heroText1: [
        {
          class: 'title is-size-6-mobile is-size-4-tablet is-4 has-text-black has-text-right-fullhd',
          text: 'Während er sein <span class="has-text-weight-bold has-text-black">Glück</span>',
        },
        {
          class: 'title is-size-6-mobile is-4 has-text-black has-text-right-fullhd',
          text: 'im  <span class="title is-size-6-mobile is-size-4-tablet is-size-3-fullhd is-3 has-text-weight-bold has-text-warning is-retro"> Silicon Valley</span>',
        },
        {
          class: 'title is-size-6-mobile is-4 has-text-black has-text-right-fullhd',
          text: 'versucht...',
        },
      ],
      heroText2: [
        {
          class: 'title is-size-6-mobile is-4 has-text-black has-text-right has-text-left-fullhd',
          text: '...fühle ich mich',
        },
        {
          class: 'title is-size-6-mobile is-4 has-text-black has-text-right has-text-left-fullhd',
          text: 'im <span class="title  is-size-6-mobile is-3 has-text-weight-bold has-text-danger is-retro">Pott</span> bestens',
        },
        {
          class: 'title is-size-6-mobile is-4 has-text-black has-text-right has-text-left-fullhd',
          text: 'aufgehoben.',
        },
      ],
    };
  },
};
</script>
