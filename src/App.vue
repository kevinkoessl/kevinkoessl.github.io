<template>
  <div id="app">
    <typographic-hero />

    <main-hero />
    <side-scroll-split-section />
    <work-experience />
    <section class="section">
      <div class="container">
        <h2 class="title is-2">Requirements Frackend Service Engineer</h2>
        <div class="is-size-3 has-text-primary">
          <word-cluster :words="expertise" />
        </div>
      </div>
    </section>

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

    <light-bulb-section type="is-info"><h1 class="title is-1 has-text-info">Kevin does it all</h1></light-bulb-section>

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
    <canvas-3-d />
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="title is-2">Contact me</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import LightBulbSection from './components/LightBulbSection.vue';
import MainHero from './components/MainHero.vue';
import TypographicHero from './components/TypographicHero.vue';
import SideScrollBeatTimeline from './components/SideScrollBeatTimeline.vue';
import SideScrollSplitSection from './components/SideScrollSplitSection.vue';
import Canvas3D from './components/Canvas3D.vue';

import WordCluster from './components/WordCluster.vue';
import WorkExperience from './components/WorkExperience.vue';
export default {
  name: 'App',
  components: {
    WordCluster,
    LightBulbSection,
    SideScrollBeatTimeline,
    MainHero,
    WorkExperience,
    SideScrollSplitSection,
    Canvas3D,
    TypographicHero,
  },
  data() {
    return {
      expertise: [
        'Requirements Engineering',
        'Frontend Development',
        'Interaction Design',
        'Artificial Intelligence',
        'User Experience',
      ],
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
</style>
