<template>
  <div>
    <div class="hero is-dark is-fullheight">
      <div class="hero-body">
        <div>
          <div class="title is-1">Animierte Komponenten</div>
        </div>
      </div>
    </div>
    <div
      v-for="(direction, index) in directionConfigs"
      :key="`direction-demo_${direction.label}`"
      class="section is-large"
    >
      <div class="columns">
        <div class="column is-2 is-flex is-align-items-center">
          <b-icon icon="arrow-right" size="is-large"></b-icon>
        </div>
        <div class="column is-10">
          <k-k-slide-in v-bind="direction.config">
            <div class="title is-1">{{ direction.label }}</div>
            <pre class="inset">{{ direction.config }}</pre>
            <div v-if="index === 1" class="columns">
              <div class="column is-half">
                <div class="content py-3 pr-3">
                  <div class="title is-6">Diese Animation ist verschachtelt.</div>
                  <p class="is-size-7">
                    Hömma, du schuldes mir nochn Heiermann, den kannse so langsam ma abdrücken. Willse noch ne Stulle
                    futtern? Ker dat macht mich feddich! Dat is doch pille-palle. Mach hier nich son Killefitt! Kinnas
                    getz kommt rein, es fängt am regen! Mach hier nich son Killefitt!
                  </p>
                  <div class="actionst">
                    <b-button type="is-dark" class="mr-3" size="is-small"> KLICKE HIER </b-button>
                    <b-button type="is-dark" outlined icon-right="arrow-right" size="is-small"> ODER HIER </b-button>
                  </div>
                </div>
              </div>
              <div class="column is-half">
                <div class="py-3 pl-3 pr-0">
                  <k-k-slide-in direction="right-to-left" :scroll-start="40">
                    <b-image
                      src="https://content.bitsandlikes.de//var/public/images/3c/2a/1_Gruppenfoto_Gartenfeier_klein_2.jpg"
                    >
                    </b-image>
                  </k-k-slide-in>
                </div>
              </div>
            </div>
          </k-k-slide-in>
        </div>
      </div>
    </div>
    <div class="section is-large">
      <div class="columns is-multiline">
        <div
          v-for="direction in directionConfigs"
          :key="`direction-demo-2_${direction.label}`"
          class="column is-half p-2"
        >
          <k-k-slide-in v-bind="direction.config">
            <div class="card" style="height: 100%">
              <div class="p-3">
                <div class="title is-7">{{ direction.label }}</div>
              </div>
              <pre class="inset" style="height: 100%">{{ direction.config }}</pre>
            </div>
          </k-k-slide-in>
        </div>
      </div>
    </div>

    <div class="section is-large">
      <div class="title is-2">
        <k-k-underline line-background="linear-gradient(90deg, rgb(50 111 174), lightblue)">Animierte</k-k-underline>
        <!-- linear-gradient(180deg,#ffb6ff,#b344ff 10%,#ae38ff 33%,#ffb6ff 45%,#ffe3ff 50%,#ffb6ff 66%,#b344ff)-->
        <k-k-underline line-background="linear-gradient(90deg, rgb(50 111 174), pink, lightblue)"
          >Unterstreichungen!</k-k-underline
        >
      </div>
      <div class="columns is-multiline">
        <div class="column is-8">
          <div class="content">
            <p class="is-size-6">
              Ker guck Dir ma dat süße
              <k-k-underline line-background="rgb(50 111 174)" :scroll-start="70">Stöppken</k-k-underline>
              an. Nimma Deine Quanten da wech.
            </p>
            <p class="is-size-7">
              Guck ma, wie er de halbe Hahn ganz allein verkasematuckelt hat. Komma bei de Omma bei. Kennse dat? Sach
              ma! Komm annen Tisch, gleich gibbet Essen.
              <k-k-underline line-background="rgb(50 111 174)" :scroll-start="70">Wat macht</k-k-underline> die Trulla
              da? Da verlierste doch den Überblick bei dem ganzen Kuddelmuddel. Hömma! Is nich wahr!
            </p>
          </div>
        </div>
        <div class="column is-8 is-offset-4">
          <k-k-slide-in direction="right-to-left" class="mt-4" :scroll-start="80">
            <p class="is-size-6 has-text-right">
              Ker wat is dat schön!
              <k-k-underline line-background="rgb(50 111 174)" :scroll-start="50">Da verlierste</k-k-underline> doch den
              Überblick bei dem ganzen
              <k-k-underline line-background="rgb(50 111 174)" :scroll-start="40">Kuddelmuddel</k-k-underline>.
            </p>
            <p class="is-size-7 has-text-right mt-5">
              Mach ma die Funzel an. Wie willste dat denn da rein friemeln, da wirste doch meschugge bei! Nee sowat mach
              ich nich. Guck ma, wie er de halbe Hahn ganz allein verkasematuckelt hat. Komma bei de Omma bei. Ker guck
              Dir ma dat süße Stöppken an.
            </p>
          </k-k-slide-in>
        </div>
      </div>
    </div>
    <k-k-change-background-color to-color="rgb(0, 50, 102)" :scroll-distance="800">
      <div class="section is-large">
        <div class="title is-2 has-text-white">Animierter Hintergrund!</div>
        <div class="columns is-multiline">
          <div class="column is-8">
            <div class="content">
              <p class="is-size-6 has-text-white">
                Ker guck Dir ma dat süße
                <k-k-underline line-background="lightblue" :scroll-start="50">Stöppken</k-k-underline>
                an. Nimma Deine Quanten da wech.
              </p>
              <p class="is-size-7 has-text-white">
                Guck ma, wie er de halbe Hahn ganz allein verkasematuckelt hat. Komma bei de Omma bei. Kennse dat? Sach
                ma! Komm annen Tisch, gleich gibbet Essen. Wat macht die Trulla da? Da verlierste doch den Überblick bei
                dem ganzen Kuddelmuddel. Hömma! Is nich wahr!
              </p>
            </div>
          </div>
          <div class="column is-8 is-offset-4">
            <k-k-slide-in direction="right-to-left" class="mt-4" :scroll-start="80">
              <p class="is-size-6 has-text-right has-text-white">
                Ker wat is dat schön!
                <k-k-underline line-background="lightblue" :scroll-start="50">Da verlierste</k-k-underline> doch den
                Überblick bei dem ganzen
                <k-k-underline line-background="lightblue" :scroll-start="40">Kuddelmuddel</k-k-underline>.
              </p>
              <p class="is-size-7 has-text-right mt-5 has-text-white">
                Mach ma die Funzel an. Wie willste dat denn da rein friemeln, da wirste doch meschugge bei! Nee sowat
                mach ich nich. Guck ma, wie er de halbe Hahn ganz allein verkasematuckelt hat. Komma bei de Omma bei.
                Ker guck Dir ma dat süße Stöppken an.
              </p>
            </k-k-slide-in>
          </div>
        </div>
      </div>
    </k-k-change-background-color>
    <div class="section is-large">ENDE</div>
  </div>
</template>
<script>
import KKSlideIn from '@/components/animated-components/KKSlideIn.vue';
import KKUnderline from '@/components/animated-components/KKUnderline.vue';
import KKChangeBackgroundColor from '@/components/animated-components/KKChangeBackgroundColor.vue';

export default {
  components: { KKSlideIn, KKUnderline, KKChangeBackgroundColor },
  name: 'AnimatedComponents',
  data() {
    return {
      directionValues: [
        { label: 'nach Links', value: 'right-to-left' },
        { label: 'nach Rechts', value: 'left-to-right' },
        { label: 'nach Oben', value: 'bottom-to-top' },
        { label: 'nach Unten', value: 'top-to-bottom' },
      ],

      customAnimationConfig: {
        direction: 'left-to-right',
        opacity: 0,
      },

      directionConfigs: [
        {
          label: 'Nach links',
          config: {
            direction: 'right-to-left',
          },
        },
        {
          label: 'Nach rechts',
          config: {
            direction: 'left-to-right',
            scrollStart: 50,
          },
        },
        {
          label: 'Nach unten, bleibt stehen',
          config: {
            direction: 'top-to-bottom',
            scrub: false,
          },
        },
        {
          label: 'Nach oben',
          config: {
            direction: 'bottom-to-top',
          },
        },
        {
          label: 'Parallax',
          config: {
            direction: 'bottom-to-top',
            ease: 'linear',
            scrollDistance: 1080,
            opacity: 1,
          },
        },
      ],
    };
  },
};
</script>
