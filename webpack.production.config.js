const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.js');

module.exports = function() {
  return webpackMerge(commonConfig(), {

    // Removes sourcemaps in production
    devtool: false,

    plugins: [

      // Sets loaders, like the css loader, into minimize mode.
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),

      // Sets environment variables, some of which are used in the application to configure
      // their runtime mode.
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        '__DEV__': false
      }),

      // Minifies the JS bundles.
      new webpack.optimize.UglifyJsPlugin({})
    ]

  });
};
