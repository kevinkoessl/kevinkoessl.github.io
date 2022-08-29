<template>
  <div class="columns is-gapless">
    <div class="column is-half">
      <div class="content" ref="scrollContentV">
        <div
          class="hero is-fullheight is-light"
          v-for="(experience, index) in experienceEntries"
          :key="`experience-entry__${experience.id}__${index}`"
        >
          <div class="single-experience">
            <work-experience-card :experience="experience" />
            <div>
              <p class="has-text-centered title is-6"><b-icon icon="cube-unfolded"></b-icon></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="column is-half" style="position: relative">
      <div
        class="sticky-container"
        ref="stickyContainerH"
        :style="{ height: `${stickyContainerHeight}px` }"
        :class="{ visible: inViewport }"
      >
        <div class="side-scroll has-background-success" ref="scrollContainerH" style="border-left: 2px solid black">
          <div class="side-scroll__content is-flex" ref="scrollContentH" style="height: 100%">
            <div v-for="i in 6" :key="`side-scroll-image__${i}`" style="min-width: 1920px" class="is-clipped hero">
              <div class="p-6">
                <div class="columns is-multiline is-8 retro-images" style="width: 80%; margin: auto">
                  <div class="column is-one-third">
                    <div class="card has-background-light is-retro">
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="@/assets/projects/murtfeldt-as-configurator.jpg"
                            width="100%"
                            style="object-fit: cover"
                            class="project-image"
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="media">
                          <div class="media-content">
                            <div class="has-text-weight-bold">
                              <b-icon icon="cube-scan" class="mr-3" />3D-Konfigurator
                            </div>
                            <a href="https://murtfeldt-as.de" class="has-text-black">https://murtfeldt-as.de</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="column is-one-third">
                    <div class="card has-background-light">
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="@/assets/projects/meltwerk-configurator.jpg"
                            width="100%"
                            style="object-fit: cover"
                            class="project-image"
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="media">
                          <div class="media-content">
                            <div class="has-text-weight-bold">
                              <b-icon icon="cube-scan" class="mr-3" />3D-Konfigurator
                            </div>
                            <a href="https://meltwerk.de" class="has-text-black">https://meltwerk.de</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-one-third">
                    <div class="card has-background-light">
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="@/assets/projects/maagtechnic-configurator.jpg"
                            width="100%"
                            style="object-fit: cover"
                            class="project-image"
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="media">
                          <div class="media-content">
                            <div class="has-text-weight-bold">
                              <b-icon icon="cube-scan" class="mr-3" />3D-Konfigurator
                            </div>
                            <a href="https://maagtechnic.ch" class="has-text-black">https://maagtechnic.ch</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-one-third">
                    <div class="card has-background-light">
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="@/assets/projects/murtfeldt-as-finishes.jpg"
                            width="100%"
                            style="object-fit: cover"
                            class="project-image"
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="media">
                          <div class="media-content">
                            <div class="has-text-weight-bold">
                              <b-icon icon="cog-outline" class="mr-3" />Produktkonfigurator
                            </div>
                            <p>Konfiguration Verfügbarer Druckverfahren</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-one-third">
                    <div class="card has-background-light">
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="@/assets/projects/murtfeldt-as-finishes.jpg"
                            width="100%"
                            style="object-fit: cover"
                            class="project-image"
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="media">
                          <div class="media-content">
                            <div class="has-text-weight-bold">
                              <b-icon icon="currency-usd" class="mr-3" />Preiskalkulation
                            </div>
                            <p>Echtzeit Einstellung von Preisvariablen</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-one-third">
                    <div class="card has-background-light">
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="@/assets/projects/murtfeldt-as-orders.jpg"
                            width="100%"
                            style="object-fit: cover"
                            class="project-image"
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="media">
                          <div class="media-content">
                            <div class="has-text-weight-bold">
                              <b-icon icon="package-variant-closed" class="mr-3" />Auftragsabwicklung
                            </div>
                            <p>Aufbereitung von CAD-Daten</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--div style="has-background-success" class="arrow-animation">
          <div class="has-text-yellow">
            <div class="scrolling is-flex is-flex-direction-column is-align-items-center">
              <b-icon v-for="i in 50" :key="`arrow_${i}`" icon="arrow-down" class="mb-6"></b-icon>
            </div>
          </div>
        </div-->
      </div>
    </div>
  </div>
</template>
<script>
import WorkExperienceCard from './WorkExperienceCard.vue';

export default {
  name: 'SideScrollSplitSection',
  components: {
    WorkExperienceCard,
  },
  data() {
    return {
      stickyContainerHeight: 0,
      inViewport: false,
      images: [
        {
          url: '',
        },
      ],
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
      ],
    };
  },

  methods: {
    scroll(evt) {
      const containerInViewPort = this.$refs.stickyContainerH;

      if (!this.isInViewport(containerInViewPort)) {
        this.inViewport = false;
        return;
      }

      this.inViewport = true;

      this.setStickyContainersSize();

      var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
      var isPlaceHolderBelowBottom =
        containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
      //let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

      console.log('isPlaceHolderBelowTop', isPlaceHolderBelowTop);
      console.log('isPlaceHolderBelowBottom ', isPlaceHolderBelowBottom);

      this.$refs.scrollContainerH.scrollLeft += evt.deltaY;
    },
    setStickyContainersSize() {
      this.stickyContainerHeight = this.$refs.scrollContentH.offsetWidth + window.innerHeight;
    },
    isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    },
  },
  mounted() {
    this.setStickyContainersSize();
    window.addEventListener('wheel', this.scroll);
    window.addEventListener('resize', this.setStickyContainersSize);
  },
  beforeDestroy() {
    window.removeEventListener('wheel', this.scroll);
    window.removeEventListener('resize', this.setStickyContainersSize);
  },
};
</script>
<style lang="scss">
.side-scroll {
  height: 1080px;
  overflow-x: hidden;
  position: sticky;
  top: 0;
  //background: url('@/assets/projects/marble-background.jpg');
  background-repeat: repeat;

  &__content {
    width: 100vh * 6;
  }
}

.retro-images {
  .card {
    border: 1px solid black;

    border-radius: 0;
    box-shadow: 10px 10px 0 #333333;

    box-sizing: border-box;
  }
  .card-image {
    border-bottom: 2px solid black;
    //background: linear-gradient(135deg, #e8acfe, #d5f7ff);

    &:first-child {
      img {
        border-radius: 0;
      }
    }
  }

  .column:nth-child(3n + 2) {
    .card {
      transform: translateY(50px);
    }
  }
}

.arrow-animation {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50px;
  border-left: 2px solid #faff81;
  border-right: 2px solid #faff81;
  overflow: hidden;

  .scrolling {
    animation: bounce 2s infinite;
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
