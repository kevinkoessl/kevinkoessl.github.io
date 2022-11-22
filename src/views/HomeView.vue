<template>
  <div class="home">
    <div class="noise-overlay">hello :)</div>
    <job-search-hero />
    <silicon-valley-hero />
    <work-experience />
    <div class="hero is-fullheight is-light has-gridlines">
      <div class="hero-head"><div class="container is-fluid"></div></div>
      <div class="hero-body">
        <div class="title is-2">ENDE</div>
      </div>
    </div>
  </div>
</template>

<script>
import LightBulbSection from '@/components/LightBulbSection.vue';
import MainHero from '@/components/MainHero.vue';
import TextSlide from '@/components/TextSlide.vue';
import SideScrollBeatTimeline from '@/components/SideScrollBeatTimeline.vue';

import WordCluster from '@/components/WordCluster.vue';
import WorkExperience from '@/components/work-experience/WorkExperience.vue';
import JobSearchHero from '@/components/job-search/JobSearchHero.vue';
import SiliconValleyHero from '@/components/silicon-valley/SiliconValleyHero.vue';

export default {
  name: 'HomeView',
  components: {
    WordCluster,
    LightBulbSection,
    SideScrollBeatTimeline,
    MainHero,
    WorkExperience,
    //SideScrollSplitSection,
    TextSlide,
    JobSearchHero,
    SiliconValleyHero,
  },
};
</script>
<style lang="scss">
@import '~@/styles/main.scss';

.column .box {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title.is-retro {
  text-shadow: 1px 1px 0px #161032, 2px 2px 0px #161032, 3px 3px 0px #161032, 4px 4px 0px #161032, 5px 5px 0px #161032;
}

@media screen and (min-width: $desktop) {
  .title.is-retro {
    text-shadow: 1px 1px 0px #161032, 2px 2px 0px #161032, 3px 3px 0px #161032, 4px 4px 0px #161032, 5px 5px 0px #161032,
      6px 6px 0px #161032, 7px 7px 0px #161032, 8px 8px 0px #161032, 9px 9px 0px #161032, 10px 10px 0px #161032;
  }
}

.is-retro:not(.title) {
  border: 2px solid #161032;
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 1px 1px 0px #161032, 2px 2px 0px #161032, 3px 3px 0px #161032, 4px 4px 0px #161032, 5px 5px 0px #161032,
    6px 6px 0px #161032, 7px 7px 0px #161032, 8px 8px 0px #161032, 9px 9px 0px #161032, 10px 10px 0px #161032;

  &:hover {
    box-shadow: 1px 1px 0px $success, 2px 2px 0px $success, 3px 3px 0px $success, 4px 4px 0px $success,
      5px 5px 0px $success, 6px 6px 0px $success, 7px 7px 0px $success, 8px 8px 0px $success, 9px 9px 0px $success,
      10px 10px 0px $success;
  }
}

.title.has-underline {
  &:after {
    content: '';
    position: absolute;
    left: 5px;
    right: 5px;
    bottom: 0;
    height: 4px;
    margin-top: 5px;
    background: $yellow;
  }
}

.is-retro:not(.title) {
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: $warning;
    opacity: 0.8;
    mix-blend-mode: multiply;
    transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
    pointer-events: none;
  }

  &.is-success {
    &:after {
      background-color: $success;
    }
  }

  &.is-danger {
    &:after {
      background-color: $danger;
      mix-blend-mode: darken;
    }
  }

  &.is-info {
    &:after {
      background-color: lighten($info, 20%);
    }
  }

  &:hover {
    &:after {
      opacity: 0.5;
      transform: translate3d(-20px, -20px, 0);
    }
  }
}

.is-tinted {
  background-color: #d7a621;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #0c6249;
    mix-blend-mode: lighten;
  }

  img {
    mix-blend-mode: multiply;
    -webkit-filter: grayscale(100%) contrast(1.2);
    filter: grayscale(100%) contrast(1.2);
  }

  &.is-success {
    background-color: #00ff36;

    img {
      mix-blend-mode: multiply;
      -webkit-filter: grayscale(100%) contrast(1.2);
      filter: grayscale(100%) contrast(1);
    }

    &:after {
      background-color: #23278a;
      mix-blend-mode: lighten;
    }
  }

  &.is-danger {
    background-color: #e41c2d;

    &:after {
      background-color: #1d3162;
      mix-blend-mode: lighten;
    }
  }

  &.is-info {
    background-color: #e50914;

    img {
      -webkit-filter: grayscale(100%) contrast(1.2);
      filter: grayscale(100%) contrast(1.2);
      opacity: 0.8;
    }
    &:after {
      mix-blend-mode: lighten;
      -webkit-filter: contrast(1.1);
      filter: contrast(1.1);
      background-color: #282581;
    }
  }
}

.hero-body__content {
  //position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  bottom: 0;
}

@media screen and (min-width: $desktop) {
  .hero-body__content {
    top: 20%;
  }
}

.has-background-wavy {
  background: radial-gradient(circle at 100% 50%, transparent 20%, $info 21%, $info 34%, transparent 35%, transparent),
    radial-gradient(circle at 0% 50%, transparent 20%, $info 21%, $info 34%, transparent 35%, transparent) 0 -50px;
  background-color: $purple;
  background-size: 75px 100px;
  transition: background-size 1000ms ease-in-out;
}

.has-background-polka-dot {
  background-color: $yellow;
  background-image: radial-gradient($success 15%, transparent 16%), radial-gradient($success 15%, transparent 16%);
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
}

.has-background-zigzag {
  background: linear-gradient(135deg, $info 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, $info 25%, transparent 25%) -50px 0, linear-gradient(315deg, $info 25%, transparent 25%),
    linear-gradient(45deg, $info 25%, transparent 25%);
  background-size: 100px 100px;
  background-color: $success;
}

.has-background-cross {
  background: radial-gradient(circle, transparent 20%, $red 20%, $red 80%, transparent 80%, transparent),
    radial-gradient(circle, transparent 20%, $red 20%, $red 80%, transparent 80%, transparent) 50px 50px,
    linear-gradient($info 8px, transparent 8px) 0 -4px, linear-gradient(90deg, $info 8px, transparent 8px) -4px 0;
  background-color: $red;
  background-size: 100px 100px, 100px 100px, 50px 50px, 50px 50px;
}

.noise-overlay {
  background: url('@/assets/textures/random-noise.jpg');
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-repeat: repeat;
  z-index: 10000000;
  mix-blend-mode: darken;
  opacity: 0.1;
  pointer-events: none;
  background-size: 100px 100px;
}

.hero.has-gridlines {
  $gridline-color: $black;

  .hero-head {
    border-bottom: 1px solid $gridline-color;

    .container {
      border-left: 1px solid $gridline-color;
      margin-left: 10px;
      min-height: 50px;
    }
  }

  .hero-foot {
    border-top: 1px solid $gridline-color;
  }

  &.is-dark {
    $gridline-color: $yellow;
    .hero-head {
      border-bottom: 1px solid $gridline-color;

      .container {
        border-left: 1px solid $gridline-color;
      }
    }

    .hero-foot {
      border-top: 1px solid $gridline-color;
    }
  }
}

@media screen and (min-width: $desktop) {
  .hero.has-gridlines {
    $gridline-color: $black;

    .hero-head {
      border-bottom: 2px solid $gridline-color;

      .container {
        border-left: 2px solid $gridline-color;
        margin-left: 50px;
        min-height: 50px;
      }
    }

    .hero-foot {
      border-top: 2px solid $gridline-color;
    }
    .hero-body {
      margin: 0 50px;
      border-left: 2px solid $gridline-color;
    }

    &.has-gridlines-right {
      .hero-body {
        margin: 0 50px;
        border-left: none;
        border-right: 2px solid $gridline-color;
      }
    }

    &.is-dark {
      $gridline-color: $yellow;
      .hero-head {
        border-bottom: 2px solid $gridline-color;

        .container {
          border-left: 2px solid $gridline-color;
        }
      }
      .hero-body {
        border-left: 2px solid $gridline-color;
      }

      .hero-foot {
        border-top: 2px solid $gridline-color;
      }

      &.has-gridlines-right {
        .hero-body {
          margin: 0 50px;
          border-left: none;
          border-right: 2px solid $gridline-color;
        }
      }
    }
  }
}
</style>
