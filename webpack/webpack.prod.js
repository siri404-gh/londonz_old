const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      precacheManifestFilename: 'wb-manifest.[manifestHash].js',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        LOGROCKET_ID: JSON.stringify(process.env.LOGROCKET_ID),
        AIRBRAKE_PROJECT_KEY: JSON.stringify(process.env.AIRBRAKE_PROJECT_KEY),
        AIRBRAKE_ID: JSON.stringify(process.env.AIRBRAKE_ID),
        FIREBASE_API: JSON.stringify(process.env.FIREBASE_API),
      },
    }),
  ],
});