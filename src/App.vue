<template>
  <div id="app">
    <b-navbar fixed-top type=" is-transparent" :mobile-burger="false">
      <template #brand v-if="$mq === 'mobile'">
        <b-navbar-item
          href="/"
          class="has-icon-left"
          :class="{ 'has-text-black mr-6': !$mq.includes('mobile') }"
          v-if="$route.path !== '/'"
        >
          <b-icon icon="arrow-left" class="mr-3"></b-icon> Zurück zur Startseite</b-navbar-item
        >
        <b-navbar-item href="/experience" :class="{ 'has-text-black mr-6': !$mq.includes('mobile') }" v-else
          >Lebenslauf</b-navbar-item
        >
      </template>
      <template #end>
        <b-navbar-item
          href="/"
          class="has-icon-left"
          :class="{ 'has-text-white mr-6': !$mq.includes('mobile') }"
          v-if="$route.path !== '/'"
        >
          <b-icon icon="arrow-left" class="mr-3"></b-icon> Zurück zur Startseite</b-navbar-item
        >
        <b-navbar-item href="/experience" :class="{ 'has-text-white mr-6': !$mq.includes('mobile') }" v-else
          >Lebenslauf</b-navbar-item
        >
      </template>
    </b-navbar>
    <router-view></router-view>
    <footer class="footer">
      <div class="content has-text-centered">
        <p><strong>&copy</strong> Kevin Kössl {{ currentYear }}</p>
      </div>
    </footer>

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
export default {
  name: 'App',
  data() {
    return {
      expertise: ['Controlling', 'The', 'Chaos'],
    };
  },
  computed: {
    currentYear() {
      let currentDate = new Date(Date.now());
      return currentDate.getFullYear();
    },
  },
};
</script>
<style lang="scss">
.footer {
  border-top: 2px solid black;
}
.navbar {
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 2px solid white;
  mix-blend-mode: difference;
  z-index: 198982;

  .navbar-brand {
    position: relative;
    justify-content: flex-end;
  }

  .navbar-burger {
    &:focus,
    &:hover,
    &.is-active {
      color: #ffffff;
    }
  }

  .navbar-menu {
    mix-blend-mode: normal;
    background-color: #ffffff;
  }
}
@media screen and (min-width: 768px) {
  .navbar {
    .navbar-menu {
      mix-blend-mode: normal;
      background-color: rgba(0, 0, 0, 0);
    }
  }
}
</style>
