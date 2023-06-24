const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'src/core/')],
        },
        /*
          Important: When we refactor the css files and change the folder structure, we have to keep in mind that we have to
          change the injection here as well.
        */
        additionalData: `
          @import "~bulma/sass/utilities/_all";
          @import "~@/styles/abstracts/_styles.scss";
        `,
      },
    },
  },
});
