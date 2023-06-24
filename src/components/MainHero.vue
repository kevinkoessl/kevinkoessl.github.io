<template>
  <section class="hero is-medium is-light">
    <div class="hero-body is-relative">
      <div class="container is-fluid">
        <div class="columns is-gapless">
          <div class="column is-half pt-6">
            <text-slide :animated-text="heroText1" />
          </div>
          <div class="column is-half">
            <div class="px-6">
              <div style="width: 80%" class="is-retro">
                <b-image :src="require('@/assets/img/silicon-valley.png')" ratio="is4by3"></b-image>
              </div>
            </div>
          </div>
          <!--div class="column is-3 is-offset-2">
            <div class="memphis-shapes">
              <img src="@/assets/Kevin Header.png" alt="Das bin ich!" width="300px" class="memphis-shapes__main" />
              <img src="@/assets/Circle I.png" alt="" width="150px" class="memphis-shapes__circle-1" />
              <img src="@/assets/Circle II.png" alt="" width="150px" class="memphis-shapes__circle-2" />
              <img src="@/assets/Squiggle I.svg" alt="" width="250px" class="memphis-shapes__squiggle-1" />
              <img src="@/assets/Rectangular Dots.svg" alt="" width="50px" class="memphis-shapes__rectangular-dots-1" />
              <img
                src="@/assets/Triangle Filled.svg"
                alt=""
                width="100px"
                class="memphis-shapes__rectangular-triangle-filled-1"
              />
              <img
                src="@/assets/Triangle Outline.svg"
                alt=""
                width="100px"
                class="memphis-shapes__rectangular-triangle-outline-1"
              />
              <img
                src="@/assets/Square Filled.svg"
                alt=""
                width="100px"
                class="memphis-shapes__rectangular-square-filled-1"
              />
              <img
                src="@/assets/Square Outline.svg"
                alt=""
                width="100px"
                class="memphis-shapes__rectangular-square-outline-1"
              />
              <img src="@/assets/Arrows.svg" alt="" width="50px" class="memphis-shapes__rectangular-square-arrows-1" />
              <img src="@/assets/Double Circle.svg" alt="" width="150px" class="memphis-shapes__double-circle-1" />
            </div>
          </div-->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import TextSlide from './TextSlide.vue';
export default {
  name: 'MainHero',

  components: {
    TextSlide,
  },

  data() {
    return {
      heroText1: [
        {
          class: 'title is-4 has-text-black  has-text-right',
          text: 'Während er sein <span class="has-text-weight-bold has-text-black">Glück</span>',
        },
        {
          class: 'title is-4 has-text-black has-text-right',
          text: 'im  <span class="title is-3 has-text-weight-bold has-text-warning is-retro"> Silicon Valley</span>',
        },
        {
          class: 'title is-4 has-text-black has-text-right',
          text: 'versucht...',
        },
      ],
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeDestroy() {},
};
</script>
<style lang="scss">
.memphis-shapes {
  position: relative;

  .memphis-shapes__main {
    transform: translateY(-150px);
  }

  .memphis-shapes__circle-1 {
    position: absolute;
    top: 146px;
  }

  .memphis-shapes__circle-2 {
    position: absolute;
    top: 294px;
    transform: translate3d(-2px, 0, 0);
  }

  .memphis-shapes__squiggle-1 {
    position: absolute;
    top: 275px;
    left: -200px;
    transform: rotate3d(0, 0, 1, 30deg);
  }

  .memphis-shapes__rectangular-dots-1 {
    position: absolute;
    top: 500px;
    left: 300px;
    transform: rotate3d(0, 0, 1, -30deg);
  }

  .memphis-shapes__rectangular-triangle-outline-1 {
    position: absolute;
    top: 500px;
    left: -100px;
    transform: rotate3d(0, 0, 1, -10deg) translate3d(-34px, 20px, 0);
  }

  .memphis-shapes__rectangular-triangle-filled-1 {
    position: absolute;
    top: 500px;
    left: -100px;
    transform: rotate3d(0, 0, 1, -10deg);
  }

  .memphis-shapes__rectangular-square-outline-1 {
    position: absolute;
    top: 75px;
    left: -125px;
  }

  .memphis-shapes__rectangular-square-filled-1 {
    position: absolute;
    top: 100px;
    left: -100px;
  }

  .memphis-shapes__rectangular-square-arrows-1 {
    position: absolute;
    top: 370px;
    left: -180px;
    transform: rotate3d(0, 0, 1, 90deg);
  }

  .memphis-shapes__double-circle-1 {
    position: absolute;
    top: 570px;
    left: 100px;
  }

  * {
    transition: all 1500ms cubic-bezier(0.22, -0.01, 0, 1.13);
  }

  &:hover {
    cursor: pointer;
    * {
      transition: all 500ms cubic-bezier(0.22, -0.01, 0, 1.13);
    }

    .memphis-shapes__main {
      transform: translate3d(0px, -200px, 0) scale(1.05);
    }
    .memphis-shapes__circle-1 {
      transform: translate3d(30px, -100px, 0) scale(0.9);
    }
    .memphis-shapes__circle-2 {
      transform: translate3d(100px, 0, 0) scale(0.8);
    }

    .memphis-shapes__squiggle-1 {
      transform: rotate3d(0, 0, 1, 30deg) translate3d(-50px, 50px, 0) scale(1.5);
    }

    .memphis-shapes__rectangular-dots-1 {
      transform: rotate3d(0, 0, 1, -30deg) translate3d(0px, 50px, 0) scale(0.9);
    }

    .memphis-shapes__rectangular-triangle-outline-1 {
      transform: rotate3d(0, 0, 1, -10deg) translate3d(-115px, 65px, 0) scale(1.8) rotate3d(0, 0, 1, 130deg);
    }

    .memphis-shapes__rectangular-triangle-filled-1 {
      transform: rotate3d(0, 0, 1, -10deg) translate3d(-100px, 39px, 0) scale(1.4) rotate3d(0, 0, 1, -110deg);
    }

    .memphis-shapes__rectangular-square-outline-1 {
      transform: translate3d(-50px, -50px, 0) scale(1.5);
    }

    .memphis-shapes__rectangular-square-filled-1 {
      transform: translate3d(-30px, -30px, 0) scale(0.8);
    }

    .memphis-shapes__rectangular-square-arrows-1 {
      transform: rotate3d(0, 0, 1, 90deg) translate3d(0, 180px, 0) scale(1.6);
    }

    .memphis-shapes__double-circle-1 {
      transform: translate3d(10px, 25px, 0) scale(0.7);
    }
  }
}
</style>
