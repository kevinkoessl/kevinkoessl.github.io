<template>
  <div id="project-gallery" style="z-index: 100; position: relative">
    <section class="has-background-black section">
      <div class="container">
        <div>
          <div class="title is-2 is-size-5-mobile sticky-title has-text-white">Projekte</div>
          <div class="columns is-multiline is-centered" v-for="(project, index) in projects" :key="project.id">
            <div class="py-6 column is-full">
              <project-tile :data="project" :type="index % 2 === 0 ? 'is-left' : 'is-right'" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectTile from './ProjectTile.vue';

export default {
  name: 'ProjectGallery',
  components: {
    ProjectTile,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Bim Jeam',
          subtitle: 'Eine Web-Socket basierte Trinkspiel-App',
          description:
            'Abgesehen davon, dass ein selbst implementiertes Trinkspiel in das Portfolio eines jeden guten Entwicklers gehört, nutze ich Bim-Jeam um mich in verschiedenen Technologien weiterzubilden.  ',
          challenges:
            'Für die Implmentierung dieser App designe ich MockUps und Klick-Prototypen mit Adobe XD und entwickle eine Progressive Web App mit Nuxt.js und Buefy. Das Backend läuft hier auf der Node Version von dem Web-Socket basierten Game Framework Colyseus.',
        },
        {
          id: 2,
          title: 'Revuelution',
          subtitle: 'Eine Vue3 Animation-Library ',
          description:
            'Falls es Dir bis jetzt noch nicht aufgefallen ist, ich mag Animationen. Auf meiner Suche nach bestehenden Librarys ist mir dabei aufgefallen, dass es einige Probleme bei der Nutzung von GSAP mit Vue3 noch zu lösen gibt. ',
          challenges:
            'Mit Revuelution versuche ich, das server-side rendering und die Perfomance zu verbessern. Mithilfe von Vue3, GSAP, Vite und NPM erweitere ich das Framework von Zeit zu Zeit bis es eines tages auch mal nützlich wird.',
        },
        {
          id: 3,
          title: 'Stable Diffusion',
          subtitle: 'P<span class="has-text-primary">A</span>BLO P<span class="has-text-primary">I</span>CASSO',
          description:
            'AI ist die Zukunft. Meine Fähigkeiten als Entwickler nutze ich, um mich in meiner Freizeit kreativ ausleben zu können. Mit Stable Diffusion, Dreambooth und Deforum erzeuge ich Bilder und Videos für die Sozialen Medien.',
          challenges:
            'Zu den großen Herausforderungen dieser Tools zählen das Verständnis der Modellparameter, das Trainieren neuer KI-Modelle und viel Geduld um den Pytorch Code auf Apple Silicon zum laufen zu bringen. 🫠',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import '~@/styles/main.scss';

#project-gallery {
  .sticky-title {
    z-index: 35;
    mix-blend-mode: difference;
  }
}

@media screen and (min-width: $desktop) {
  #project-gallery {
    .sticky-title {
      position: sticky;
      top: 50px;
    }
  }
}
</style>
