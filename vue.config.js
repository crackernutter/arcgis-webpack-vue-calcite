const ArcGISPlugin = require("@arcgis/webpack-plugin");
const path = require('path');
module.exports = {
  
    //runtimeCompiler: false
    chainWebpack: config => {
      config.entry('app').prepend('@babel/polyfill/noConflict').end();
      // config.resolve.symlinks(false);
      // config.resolve.set('symlinks', false);
      config.module.rule('eslint')
      .use('eslint-loader')
      .tap(options => {
        options.configFile = path.resolve(__dirname, ".eslintrc");
        return options;
      });
      config.module.rule('strreplace').test(/\.js$/).use('string-replace-loader').loader('string-replace-loader').options({
        search: "dojo/domReady!",
        replace: "dojo/ready"
      });
    },
      css: {
        loaderOptions: {
          postcss: {
            config:{
              path:__dirname
            }
          }
        }
      },
    configureWebpack:{
        plugins: [
          new ArcGISPlugin({
            useDefaultAssetLoaders:false
          }),
          // new webpack.NormalModuleReplacementPlugin(
          //   // dojo/domReady (only works if the DOM is ready when invoked)
          //   /^dojo\/domReady!/, (data) => {
          //     const match = /^dojo\/domReady!(.*)$/.exec(data.request);
          //     data.request = "dojo/loaderProxy?loader=dojo/domReady!" + match[1];
          //   }
          // )],
      //   externals:{
      //   vue: {
      //       commonjs: 'vue',
      //       commonjs2: 'vue',
      //       root: 'vue',
      //       amd: 'vue'
      //     },
      //     "calcite-maps":{
      //       amd:'calcite-maps'
      //     }
      // },
          // externals: [
          //   (context, request, callback) => {
          //     if (/pe-wasm$/.test(request)) {
          //         console.log('WASM');
          //       return callback(null, "amd " + request);
          //     }
          //     callback();
          //   }
           ],
          node: {
            //process: false,
            global: false,
            //fs: "empty"
          },
          optimization: {
            minimize: true,
            splitChunks: {
              minChunks:Infinity,
                chunks: 'all',
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? "/" : '/'
    
    //integrity: true,
//     configureWebpack: {
//         devServer: {
//             watchOptions: {
//               poll: true
//             }
//     }
// }
}