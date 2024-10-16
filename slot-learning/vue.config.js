const { defineConfig } = require("@vue/cli-service");
// vue.config.js
module.exports = {
  productionSourceMap: true, // This is usually true by default in development mode

  configureWebpack: {
    devtool: "source-map", // This ensures source maps are generated
  },
};
