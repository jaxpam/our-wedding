const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const plugins = [];

// if (process.env.NODE_ENV === "production") {
//   plugins.push(
//     new PrerenderSPAPlugin({
//       staticDir: path.join(__dirname, "dist"),
//       routes: ["/"],
//       useRenderEvent: true,
//       headless: true,
//       onlyProduction: true,
//       postProcess: route => {
//         route.html = route.html
//           .replace(/<script (.*?)>/g, "<script $1 defer>")
//           .replace('id="app"', 'id="app" data-server-rendered="true"');
//         return route;
//       }
//     })
//   );
// }

module.exports = {
  productionSourceMap: false,
  publicPath: ".",
  configureWebpack: {
    plugins
  },
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "public/service-worker.js"
    },
    name: "Ste & Jax Wedding",
    themeColor: "#0640b6"
  },
  chainWebpack: (config) => {
    config.module
      .rule("images-srcset")
      .before("images")
      .test(/\.(png|jpe?g|webp|tiff?)$/i)
      // if the import url looks like "some.png?srcset..."
      .oneOf("srcset")
      .resourceQuery(/srcset/)
      .use("srcset")
      .loader("webpack-image-srcset-loader")
      .options({
        sizes: ["375w", "1024w", "1920w", "2560w", "original"],
        esModule: false,
      });

    config.module
      .rule("images-resize")
      .after("images")
      .test(/\.(png|jpe?g|webp|tiff?)$/i)
      // if the import url looks like "some.png?srcset..."
      .oneOf("srcset")
      .resourceQuery(/srcset/)
      .use("resize")
      .loader("webpack-image-resize-loader")
      .options({
        fileLoader: "url-loader",
        fileLoaderOptionsGenerator: (options, existingOptions) => ({
          ...existingOptions,
          fallback: {
            ...existingOptions.fallback,
            options: {
              ...defaultFileLoaderOptionsGenerator(
                options,
                existingOptions.fallback.options
              ),
            },
          },
        }),
      });

    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp|tiff?)$/i)
      // if the import url looks like "some.png?placeholder..."
      .oneOf("placeholder")
      .resourceQuery(/placeholder/)
      .use("placeholder")
      .loader("webpack-image-placeholder-loader")
      .options({
        format: "blurred-svg",
        esModule: false,
        blurQuality: 0.3
      })
      .end()
      .end()
      // if no previous resourceQuery match
      .oneOf("normal")
      .use("normal")
      .loader(
        config.module
          .rule("images")
          .use("url-loader")
          .get("loader")
      )
      .options(
        config.module
          .rule("images")
          .use("url-loader")
          .get("options")
      );

    config.module.rule("images").uses.delete("url-loader");
  },
};
