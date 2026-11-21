<template>
  <div class="container">
    <div class="hero">
      <div class="hero-body">
        <h1 class="title is-4 has-text-white">Schwarztöne</h1>
        <div class="has-text-white" v-html="choppedColorSets"></div>

        <!--span class="has-text-white" v-for="(color, index) in allColorSets" :key="`${index}-${color}`">{{
          color
        }}</span-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SchwarztöneView',
  data: () => ({
    colorNames: [
      'Azul Alicia',
      'Antikweiß',
      'Antrazit',
      'Wasser',
      'Aquamarinblau',
      'Beige',
      'Biskuit',
      'Schwarz',
      'Violett',
      'Mandelweiß',
      'Blau',
      'Blauviolett',
      'Braun',
      'Gelbbraun',
      'Kadettenblau',
      'Hellgrün',
      'Schokolade',
      'Koralle',
      'Kornblumenblau',
      'Mais',
      'Karmesinrot',
      'Türkis',
      'Dunkelblau',
      'Dunkle Goldrutenfarbe',
      'Dunkelgrün',
      'Dunkelgrau',
      'Dunkelkhaki',
      'Dunkelmagenta',
      'Dunkles Olivgrün',
      'Dunkles Orange',
      'Dunkle Orchidee',
      'Dunkelrot',
      'Dunkle Lachsfarbe',
      'Dunkles Seegrün',
      'Dunkles Schieferblau',
      'Dunkles Schiefergrau',
      'Dunkeltürkis',
      'Dunkelviolett',
      'Tiefrosa',
      'Tiefes Himmelblau',
      'Trübes Grau',
      'Persenningblau',
      'Backstein',
      'Blütenweiß',
      'Waldgrün',
      'Honigmelone',
      'Leuchtendes Rosa',
      'Indischrot',
      'Indigo',
      'Ocker',
      'Elfenbein',
      'Staubfarben',
      'Lavendel',
      'Lavendelrosa',
      'Rasengrün',
      'Chiffongelb',
      'Hellblau',
      'Helles Korallenrot',
      'Helles Cyan',
      'Helles Goldrutengelb',
      'Hellgrau',
      'Hellrosa',
      'Helle Lachsfarbe',
      'Helles Seegrün',
      'Helles Himmelblau',
      'Helles Schiefergrau',
      'Helles Stahlblau',
      'Hellgelb',
      'Limone',
      'Limonengrün',
      'Leinen',
      'Magenta',
      'Kastanie',
      'Mittleres Aquamarin',
      'Mittleres Blau',
      'Mittlere Orchidee',
      'Mittleres Violett',
      'Mittleres Seegrün',
      'Mittleres Schieferblau',
      'Mittleres Frühlingsgrün',
      'Mittlere Türkis',
      'Mittleres Violettrot',
      'Mitternachtsblau',
      'Cremige Minze',
      'Altrosa',
      'Mokassin',
      'Navajoweiß',
      'Marineblau',
      'Alte Spitze',
      'Olivgrün',
      'Olivgraubraun',
      'Orange',
      'Orangerot',
      'Orchidee',
      'Blasse Goldrutenfarbe',
      'Blassgrün',
      'Blasstürkis',
      'Blasses Violettrot',
      'Creme',
      'Papayacreme',
      'Pfirsich',
      'Peru',
      'Rosa',
      'Pflaume',
      'Taubenblau',
      'Purpur',
      'Rot',
      'Rosiges Braun',
      'Königsblau',
      'Sattelbraun',
      'Lachsfarben',
      'Sandbraun',
      'Seegrün',
      'Muschel',
      'Siennaerde',
      'Silber',
      'Himmelblau',
      'Schieferblau',
      'Schiefergrau',
      'Schneeweiß',
      'Frühlingsgrün',
      'Stahlblau',
      'Hautfarben',
      'Krickentengrün',
      'Distel',
      'Tomate',
      'Veilchen',
      'Weizen',
      'Weiß',
      'Rauchfarben',
      'Gelb',
      'Gelbgrün',
      'Metallic',
      'Euro Weiß',
      'Fiordblau',
      'Norwegish Uniform',
      'Lurex Schwarz',
    ],
    phrases: [
      '. Es gibt ',
      ', so viele Schwarztöne. ',
      ' und und ',
      '. Es gibt so viele Schwarztöne. ',
      '. Dann gibt es ',
      ', so viele Schwarztöne gibt es. ',
      ' gibt es, so viele etliche Farbtöne gibt es. ',
    ],
  }),
  computed: {
    allColorSets() {
      let colorSets = ['Es gibt '];
      let colorSets2 = [];

      this.colorNames.forEach((color) => {
        colorSets.push(`${color}-Schwarz, `);
      });

      this.colorNames.forEach((color) => {
        this.colorNames.forEach((color2) => {
          colorSets2.push(`${color}-${color2}-Schwarz, `);
        });
      });

      colorSets2 = colorSets2.sort(() => Math.random() - 0.5);

      colorSets2 = colorSets2.sort((a, b) => a.length - b.length);

      //colorSets2 = [...new Set(colorSets2)];

      // insert a random phrase
      for (let i = 0; i < colorSets2.length / 50; i++) {
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];

        const randomIndex = Math.floor(Math.random() * (colorSets2.length - 1));
        colorSets2[randomIndex - 1] = colorSets2[randomIndex - 1].replace(', ', '');

        colorSets2.splice(randomIndex, 0, randomPhrase);
      }

      return colorSets.concat(colorSets2);
    },
    choppedColorSets() {
      const text = this.allColorSets.join('');

      const limit = 2000;
      let result = '';
      let lastIndex = 0;

      while (lastIndex < text.length) {
        // Find the position to cut
        let cutIndex = lastIndex + limit;

        // If cutIndex is beyond the length of the text, append the rest of the text and break the loop
        if (cutIndex >= text.length) {
          result += text.slice(lastIndex);
          break;
        }

        // Find the nearest full stop before or at the cutIndex
        let periodIndex = text.lastIndexOf('.', cutIndex);

        // If there's no period in the range, look for the nearest space before or at the cutIndex
        if (periodIndex === -1 || periodIndex < lastIndex) {
          periodIndex = text.lastIndexOf(' ', cutIndex);
        }

        // If there's no space, cut at the limit to prevent an infinite loop
        if (periodIndex === -1 || periodIndex < lastIndex) {
          periodIndex = cutIndex;
        }

        // Append the chunk of text to the result with a newline character
        result += text.slice(lastIndex, periodIndex + 1) + '<br><br>';

        // Update lastIndex to the position after the period or space
        lastIndex = periodIndex + 1;
      }

      return result.length + ' ' + result;
    },
  },
};
</script>
