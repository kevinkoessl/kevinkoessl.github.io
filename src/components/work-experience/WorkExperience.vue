<template>
  <div class="work-experience has-background-dark">
    <!--iris-in-transition /-->
    <div class="hero is-medium is-dark has-gridlines">
      <div class="hero-body">
        <div :class="{ 'container is-max-desktop': ['widescreen', 'fullhd'].includes($mq) }">
          <div class="title is-3 is-size-5-mobile has-text-warning is-retro">Meine Work Experience</div>
        </div>
      </div>
      <div class="hero-foot"></div>
    </div>
    <div class="hero is-dark" :class="{ 'has-gridlines has-gridlines-right': ['widescreen', 'fullhd'].includes($mq) }">
      <div :class="{ 'hero-body': ['widescreen', 'fullhd'].includes($mq) }">
        <div
          class="work-experience-list"
          :class="{ 'container is-max-desktop': ['widescreen', 'fullhd'].includes($mq) }"
        >
          <template v-for="experience in experienceEntries">
            <div :key="`experience-entry__${experience.id}`" class="single-experience">
              <work-experience-card :experience="experience" />
              <div
                :class="{
                  'my-3': ['mobile', 'tablet'].includes($mq),
                  'my-6 py-6': ['desktop', 'widescreen', 'fullhd'].includes($mq),
                }"
              >
                <p class="has-text-centered title is-6">
                  <b-icon icon="cube-unfolded" type="is-light" size="is-medium"></b-icon>
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WorkExperienceCard from './WorkExperienceCard.vue';
import IrisInTransition from '../IrisInTransition.vue';

export default {
  name: 'WorkExperience',
  components: {
    WorkExperienceCard,
    IrisInTransition,
  },
  props: {},
  data() {
    return {
      experienceEntries: [
        {
          id: 'XIWEJFVG',
          jobTitle: 'Lead-Developer & Projektmanager',
          timeModel: 'Vollzeit',
          teaser:
            'Als leitender Entwickler habe ich verschiedene Online-Portale für die Kunden von bits & likes umgesetzt.',
          content: [
            'Spezifikation und Konzeption von Online-Services',
            'Definition von Geschäftslogiken',
            'Implementierung von Unit- und End-To-End-Tests mit Cypress und Jest',
            'Technische Leitung eines Entwickler-Teams',
            'Anforderungsmanagement und Qualitätssicherung',
            'Third-Level-Support',
            'Kundenbetreuung',
          ],
          skills: [
            'Jira',
            'Confluence',
            'Docker',
            'Teamcity',
            'Cypress',
            'Jest',
            'Requirement Engineering',
            'Scrum',
            'Positive Kommunikation',
            'Fulfillment-Dienstleistungen',
          ],
          time: 'Mai 2021 - heute',
          location: 'Dortmund',
          company: 'bits & likes',
          weblink: 'https://www.murtfeldt-as.de/',
          imageUrl: require('@/assets/jobs/Kevin Kössl - Projektmanager.jpg'),
          imageClass: 'is-danger',
          backgroundClass: 'has-background-cross',
        },

        {
          id: 'LENC9HSN',
          jobTitle: 'Fullstack-Web-Entwickler',
          timeModel: 'Vollzeit',
          teaser:
            'Als Fullstack-Web-Entwickler habe ich mit modernsten Web-Technologien die Kernfunktionen verschiedener Web-Services implementiert.',
          content: [
            'Technische Spezifikation eines 3D-Druck E-Commerce Systems',
            'Konfiguration von Build-Pipelines mit Docker und Teamcity',
            'Design und Implementierung von User-Interfaces und deren Komponenten',
            'Programmierung von API-Handlern und Datenbank-Aggregation',
            'Technische Dokumentation von Schnittstellen und Funktionalitäten',
          ],
          skills: [
            'TypeScript',
            'NestJS',
            'Vue.js',
            'TypeORM',
            'MongoDB',
            'NoSQL',
            'Microservice-Architekturen',
            'MVVM-Architekturen',
            'Docker',
            'Teamcity',
            'Adobe XD',
            '3D-Druck',
          ],
          time: 'August 2020 - Mai 2021',
          location: 'Dortmund',
          company: 'bits & likes',
          weblink: 'https://elem3nts.de/',
          imageUrl: require('@/assets/jobs/Kevin Kössl - Full-Stack-Entwickler.jpg'),
          imageClass: 'is-warning',
          backgroundClass: 'has-background-polka-dot',
        },
        {
          id: 'PSMELKFSG',
          jobTitle: 'Werkstudent Software-Entwicklung',
          timeModel: 'Teilzeit',
          teaser:
            'Als Werkstudent bei 7P.konzepte habe ich Einblicke in die Shopware Template-Entwicklung erhalten und Online Shops optisch indivdualisiert und funktional erweitet.',
          content: [
            'Shopware Template Entwicklung',
            'Styling von Webseiten mit LESS',
            'Programmierung mit PHP, Smarty und Less',
            'Entwicklung von Oforge Plugins',
            'Datenpflege von Content Management- und Shopsystemen',
          ],
          skills: [
            'PHP',
            'JavaScript',
            'HTML',
            'CSS',
            'Smarty',
            'Less',
            'JQuery',
            'Shopware',
            'MVC-Architekturen',
            'E-Commerce Systeme',
            'PHPMyAdmin',
            'PHPStorm',
          ],
          time: 'August 2020 - Mai 2021',
          location: 'Dortmund',
          company: 'bits & likes',
          weblink: 'https://allyourhorses.de/',
          imageUrl: require('@/assets/jobs/Kevin Kössl - Werkstudent.jpg'),
          imageClass: 'is-success',
          backgroundClass: 'has-background-zigzag',
        },
        {
          id: 'NCUWEHFJSH',
          jobTitle: 'Programmierpraktikum Android',
          timeModel: 'Vollzeit',
          teaser: 'Im Rahmen meines Studiums habe ich ein einwöchiges Pflichtpraktikum absolviert.',
          content: [
            'Programmierung einer Android-App mit Java',
            'Layouts und Sytling',
            'Erfassung und Verarbeitung von Sensordaten',
            'Implementierung von XHTTP-Requests',
            'Zugriff auf Kamera-Funktionen',
          ],
          skills: ['Android', 'Java', 'XML', 'I18N', 'Asynchrone Programmierung', 'Android-Studio'],
          time: 'September 2018',
          location: 'Bochum',
          company: 'Ruhr-Universität Bochum',
          imageUrl: require('@/assets/jobs/Ruhr-Universität Bochum - Universitätsbibliothek.jpeg'),
          imageClass: 'is-info',
          backgroundClass: 'has-background-wavy',
        },
      ],
    };
  },
  computed: {},
};
</script>
<style lang="scss"></style>