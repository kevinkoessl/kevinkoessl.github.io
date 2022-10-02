<template>
  <div class="work-experience has-background-success">
    <div class="hero is-medium">
      <div class="hero-body">
        <div class="title is-3 has-text-warning is-retro">Praktische Erfahrung</div>

        <template v-for="experience in experienceEntries">
          <div :key="`experience-entry__${experience.id}`" class="single-experience">
            <work-experience-card :experience="experience" />
            <div>
              <p class="has-text-centered title is-6">
                <b-icon icon="cube-unfolded" type="is-light" size="is-medium"></b-icon>
              </p>
            </div>
          </div>
        </template>
      </div>
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
          jobTitle: 'Lead-Developer & Projektmanagement',
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
        },
        {
          id: 'NCUWEHFJSH',
          jobTitle: 'Programmierpraktikum Android',
          timeModel: 'Vollzeit',
          teaser: '1337',
          content: [
            'Im Rahmen meines Studiums habe ich ein einwöchiges Pflichtpraktikum absolviert.',
            'In diesem Praktikum konnte ich mich Eigenverantwortlich mit der Programmierung von Android-Apps mit Java und Android Studio vertraut machen.',
          ],
          time: 'September 2018',
          location: 'Bochum',
          company: 'Ruhr-Universität Bochum',
          imageUrl: 'https://via.placeholder.com/600x800/FFC53A/000000?text=Bild+von+der+RUB',
        },
      ],
    };
  },
  computed: {},
};
</script>
<style lang="scss"></style>
