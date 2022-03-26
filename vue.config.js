module.exports = {
  outputDir: "dist/public",
  chainWebpack: (config) => {
    config.resolve.alias.set("vue", "@vue/compat");
    config.module.rule("vue").use("vue-loader");
  },
};
