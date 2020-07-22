// const path = require("path");
// const PrerenderSPAPlugin = require("prerender-spa-plugin");
// const ImageminPlugin = require("imagemin-webpack");
// const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

module.exports = {
  productionSourceMap: false,
  // chainWebpack: config => {
  //   const imgRule = config.module.rule("svg");
  //   imgRule
  //     .use("file-loader")
  //     .loader("image-webpack-loader")
  //     .tap(options => {
  //       const ret = options || {};
  //       ret.mozjpeg = {
  //         progressive: true,
  //         quality: 100
  //       };
  //       ret.webp = {
  //         quality: 80
  //       };

  //       ret.svgo = {
  //         removeMetadata: true,
  //         removeComments: true
  //       }
  //       console.log(ret);
  //       return ret;
  //     });
  // },
  // configureWebpack: {
  //   plugins: [
  //     // new PrerenderSPAPlugin({
  //     //     staticDir: path.join(__dirname, 'dist'),
  //     //     routes: [ '/' ],
  //     //   }),
  //     new ImageminPlugin({
  //       cache: true,
  //       imageminOptions: {
  //         plugins: [["mozjpeg", { quality: 80 }]]
  //       }
  //     }),
  //     new ImageminWebpWebpackPlugin()
  //   ]
  // },

  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "public/service-worker.js"
    },
    name: "Ste & Jax Wedding",
    themeColor: "#0640b6"
  }
};
