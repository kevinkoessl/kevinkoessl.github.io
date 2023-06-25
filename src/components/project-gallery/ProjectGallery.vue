<template>
  <div id="project-gallery has-background-black" style="z-index: 100; position: relative">
    <section class="section has-background-black">
      <div class="container">
        <div class="columns">
          <div class="column is-full">
            <h3 class="title is-5 has-text-centered has-text-white">Meine persönliche</h3>
            <div class="title is-1 has-text-centered mb-6 has-text-white">Wall Of Fail</div>
            <p class="is-family-superior title is-3 has-text-centered has-text-primary">
              „Wer erfolgreich sein will, muss scheitern!”
            </p>
            <div class="py-6 my-6"></div>
            <p class="title is-6 has-text-white">
              Und damit in unserer Zusammenarbeit alles glatt geht, sammel ich meine Fails schonmal im Hinterzimmer.
            </p>

            <div class="py-6"></div>
          </div>
        </div>
        <div>
          <div
            class="title is-2 has-text-white"
            style="position: sticky; top: 50px; z-index: 35; mix-blend-mode: difference"
          >
            Projekte
          </div>
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
