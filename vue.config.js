
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
    productionSourceMap: false,
    configureWebpack: {
      output: {
        libraryExport: "default"
      },
      plugins: [
        new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, 'dist'),
            routes: [ '/' ],
          })
      ]
    },
  
    pwa: {
      workboxPluginMode: "InjectManifest",
      workboxOptions: {
        swSrc: "public/service-worker.js"
      },
      name: "Stratum",
      themeColor: "#0640b6"
    }
  };
  