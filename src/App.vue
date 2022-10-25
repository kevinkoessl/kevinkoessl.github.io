<template>
  <div id="app">
    <job-search-hero />
    <silicon-valley-hero />
    <work-experience />
    <div class="hero is-fullheight is-light">
      <div class="hero-body">
        <div class="title is-2">ENDE</div>
      </div>
    </div>
    <!--

    <section class="section">
    <div class="container">
        <h2 class="title is-2">Requirements Frackend Service Engineer</h2>
        <div class="is-size-4 has-text-primary">
          <word-cluster :words="expertise" />
        </div>
      </div>
    </section>
    <side-scroll-split-section />

    <section class="section">
      <div class="container">
        <h2 class="title is-2">Techstack</h2>
        <div class="is-size-3">
          <p>Vue.js w/ Nuxt & buefy</p>
          <p>Node.js w/ Nest</p>
          <p>MongoDB</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="title is-3">
          <word-cluster words="Private Activities" />
        </h2>
        <div class="is-size-3">
          <p>Graphics Designer</p>
          <p>Cooking</p>
          <p>Fitness</p>
        </div>
      </div>
    </section>
    <h2 class="title is-2">Beat Producer</h2>
    <side-scroll-beat-timeline />

    <light-bulb-section type="is-info">
      <h1 class="title is-1 has-text-info">Kevin does it all</h1>
    </light-bulb-section>

    <section class="section">
      <div class="container">
        <h2 class="title is-2">Tools</h2>
        <div class="is-size-3">
          <p>VSCode</p>
          <p>PhotoShop</p>
          <p>Adobe XD</p>
          <p>Teamcity</p>
          <p>Jira, Trello & Confluence</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title is-2">Experience</h2>
        <div class="content">
          <div class="columns is-multiline">
            <div class="column is-half">
              <div class="box">
                <h3 class="title is-4">B.Sc Applied Computer Science @ RUB</h3>
                <p class="is-size-5">Studied Computer Science from 2017 to 2021</p>
              </div>
            </div>
            <div class="column is-half">
              <div class="box">
                <h3 class="title is-4">Internship @ 7P.konzepte</h3>
                <p class="is-size-5">
                  In 2019 a Worked as an intern for 7P.konzepte where I had the opportunity to customize the Shopware
                  Shop of
                  <a href="hoon.de">hoon.de</a>
                </p>
              </div>
            </div>
            <div class="column is-half">
              <div class="box">
                <h3 class="title is-4">Software developer @ 7P.konzepte</h3>
                <p class="is-size-5">
                  From 2019 to 2020 I had the opportunity to implement all kinds of features for
                  <a href="allyourhorses.de">allyourhorses.de</a>. I implemented UIs for a custom-made Content
                  Management System and a legacy 3D-printing online platform
                  <a href="murtfeldt-as.de">murtfeldt-as.de</a>
                </p>
              </div>
            </div>
            <div class="column is-half">
              <div class="box">
                <h3 class="title is-4">Lead developer & Project manager @ bits & likes</h3>
                <p class="is-size-5">
                  From 2021 to 2022 I worked for bits & likes on a microservice-based fulfillment api of a online
                  3d-printing service. My tasks there include requirements specifications, project-management,
                  implementing backend and frontend for several sales-channelsand deployment configurations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="title is-2">Contact me</div>
        </div>
      </div>
    </section>
    -->
  </div>
</template>
<script>
import LightBulbSection from './components/LightBulbSection.vue';
import MainHero from './components/MainHero.vue';
import TextSlide from './components/TextSlide.vue';
import SideScrollBeatTimeline from './components/SideScrollBeatTimeline.vue';

import WordCluster from './components/WordCluster.vue';
import WorkExperience from './components/work-experience/WorkExperience.vue';
import JobSearchHero from './components/job-search/JobSearchHero.vue';
import SiliconValleyHero from './components/silicon-valley/SiliconValleyHero.vue';
export default {
  name: 'App',
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
  data() {
    return {
      expertise: ['Controlling', 'The', 'Chaos'],
    };
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
  background: radial-gradient(circle at 100% 50%, transparent 20%, $black 21%, $black 34%, transparent 35%, transparent),
    radial-gradient(circle at 0% 50%, transparent 20%, $black 21%, $black 34%, transparent 35%, transparent) 0 -50px;
  background-color: $yellow;
  background-size: 75px 100px;
  transition: background-size 1000ms ease-in-out;
}
</style>
