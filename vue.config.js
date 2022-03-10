const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        /*
          Important: When we refactor the css files and change the folder structure, we have to keep in mind that we have to
          change the injection here as well.
        */
        prependData: `
          @import "~bulma/sass/utilities/_all";
          @import "~@/styles/abstracts/_style.scss";
        `,
      },
    },
  },
});
