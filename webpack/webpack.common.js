const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { navbar: { title, tagline }, seo: { keywords } } = require('../config/variables');

module.exports = {
  entry: {
    app: './src/web/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title,
      description: tagline,
      keywords,
      template: path.resolve(__dirname, 'template/template.html'),
    }),
    new CleanWebpackPlugin([ 'dist' ], {
      root: path.resolve(__dirname, '../'),
      exclude: [],
      verbose: false,
      dry: false,
    }),
    // new webpack.ProvidePlugin({
    //   react: 'react',
    // }),
    new webpack.HashedModuleIdsPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: path.resolve(__dirname, `../dist/bundle.html`),
    }),
    new Visualizer({
      filename: './visualizer.html',
    }),
    new CopyWebpackPlugin([
      { from: 'webpack/template/favicon.png', to: 'favicon.png' },
      { from: 'webpack/template/electron.js', to: 'electron.js' },
    ]),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const index = 1;
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[index];
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm-${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
};