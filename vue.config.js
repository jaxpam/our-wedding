const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const ImageminPlugin = require("imagemin-webpack");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      // new PrerenderSPAPlugin({
      //   staticDir: path.join(__dirname, "dist"),
      //   routes: ["/"],
      //   useRenderEvent: true,
      //   headless: true,
      //   onlyProduction: true,
      //   postProcess: route => {
      //     route.html = route.html
      //       .replace(/<script (.*?)>/g, "<script $1 defer>")
      //       .replace('id="app"', 'id="app" data-server-rendered="true"');
      //     return route;
      //   }
      // }),
      new ImageminPlugin({
        cache: true,
        imageminOptions: {
          plugins: [["mozjpeg", { quality: 80 }]]
        }
      }),
      new ImageminWebpWebpackPlugin()
    ]
  },
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "public/service-worker.js"
    },
    name: "Ste & Jax Wedding",
    themeColor: "#0640b6"
  }
};
