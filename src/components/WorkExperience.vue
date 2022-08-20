<template>
  <div class="work-experience">
    <div class="container">
      <div class="section">
        <div class="title is-3">Praktische Erfahrung</div>
      </div>
      <template v-for="experience in experienceEntries">
        <div :key="`experience-entry__${experience.id}`" class="single-experience">
          <work-experience-card :experience="experience" />
          <div>
            <p class="has-text-centered title is-6"><b-icon icon="cube-unfolded"></b-icon></p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import WorkExperienceCard from './WorkExperienceCard.vue';

export default {
  name: 'WorkExperience',
  components: {
    WorkExperienceCard,
  },
  props: {},
  data() {
    return {
      experienceEntries: [
        {
          id: 'XIWEJFVG',
          jobTitle: 'Vollzeit - Projektmanagement',
          teaser:
            'Als leitender Projektmanager habe ich für unseren Kunden ein vollumfängliches 3D-Druck Bestellportal konzeptioniert und mit meinem Team umgesetzt.',
          content: [
            'Zu den spannenden Herausforderungen dieses Portals gehörte die Entwicklung einer Fulfillment API um das Bestellportal für verschiedene Verkaufskanäle und Zwecke zu öffnen.',
            'Mit der Abwicklung von 3D-Druck Aufträgen im Selektiven Lasersintern kommen außerdem komplexe Geschäftsprozesse und Produktionsketten zu tragen.',
            'Diese Vorgänge durfte ich in einer agilen vorgehensweise analysieren und mithilfe von Automatisierungen stark vereinfachen um die Abwicklung zukünftig effizienter zu gestalten.',
          ],
          time: 'Mai 2021 - heute',
          location: 'Dortmund',
          company: 'bits & likes',
          weblink: 'https://www.murtfeldt-as.de/',
          imageUrl: '',
        },
        {
          id: 'LENC9HSN',
          jobTitle: 'Vollzeit - Fullstack-Web-Entwickler',
          teaser: '1337',
          content: [
            'Während meiner Zeit als Fullstack-Web-Entwickler habe ich ein PHP-basiertes, monolithisches 3D-Druck Bestellportal zu einer Microservice basierte NodeJS Anwendung modernisiert',
            '',
            'In dieser Zeit konnte ich mich außerdem in meiner konzeptionellen Arbeit beweisen, woraufhin mir das Design und die technische Planung des kachelbasierten Content Boards ELEM3NTS anvertraut wurde.',
          ],
          time: 'August 2020 - Mai 2021',
          location: 'Dortmund',
          company: '7P.konzepte',
          weblink: 'https://elem3nts.de/',
          imageUrl: '',
        },
        {
          id: 'PSMELKFSG',
          jobTitle: 'Werkstudent Software-Entwicklung',
          teaser: '1337',
          content: [
            'Als Werkstudent bei 7P.konzepte habe ich Einblicke in die Shopware Template-Entwicklung mit Smarty und LESS erhalten. Auf Basis von Design-Mockups habe ich einen Online Shop für gewerblich genutze Kleidung optisch und funktional individualisiert und erweitet.',
            'Im Rahmen dieser Tätigkeit habe ich ebenfalls ein von der shopware AG ausgestelltes Zertifikat im Template Design erworben.',
            '',
            'Darüberhinaus durfte ich an der Entwicklung eines Pferde-Inserats-Portals mitwirken, wo ich mit PHP, Twig und JavaScript Seitentemplates nach dem MVC-Muster implementiert und angepasst habe.',
          ],
          time: 'August 2020 - Mai 2021',
          location: 'Dortmund',
          company: '7P.konzepte',
          weblink: 'https://allyourhorses.de/',
          imageUrl: '',
        },
        {
          id: 'NCUWEHFJSH',
          jobTitle: 'Programmierpraktikum Android',
          teaser: '1337',
          content: [
            'Im Rahmen meines Studiums habe ich ein einwöchiges Pflichtpraktikum absolviert.',
            'In diesem Praktikum konnte ich mich Eigenverantwortlich mit der Programmierung von Android-Apps mit Java und Android Studio vertraut machen.',
          ],
          time: 'September 2018',
          location: 'Bochum',
          company: 'Ruhr-Universität Bochum',
          imageUrl: '',
        },
      ],
    };
  },
  computed: {},
};
</script>
<style lang="scss"></style>
