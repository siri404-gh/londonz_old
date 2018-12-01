const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const optimization = require('./optimization');

const { navbar: { title, tagline }, seo: { keywords }, dist, manifest: { seed } } = require('../config/variables');

module.exports = {
  entry: {
    app: './src/web/index.js',
  },
  output: {
    path: path.resolve(__dirname, `../${dist}`),
    filename: 'js/[name].[contenthash].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
      { test: /\.md$/, exclude: /node_modules/, use: { loader: 'raw-loader' } },
      { test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
        }),
      },
      // { test: /\.less$/i,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: [ 'css-loader', 'less-loader' ],
      //   }),
      // },
      { test: /\.(svg|png|jpg|jpeg|gif|ico)$/, loader: 'file-loader', options: { name: 'img/[name].[ext]' } },
      { test: /\.(woff|woff2|ttf|eot)$/, loader: 'file-loader', options: { name: 'fonts/[name].[ext]' } },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title,
      description: tagline,
      keywords,
      template: path.resolve(__dirname, 'template/template.html'),
    }),
    new CleanWebpackPlugin([ dist ], {
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
      reportFilename: path.resolve(__dirname, `../${dist}/bundle.html`),
    }),
    new Visualizer({
      filename: './visualizer.html',
    }),
    new CopyWebpackPlugin([
      // { from: 'webpack/template/favicon.png', to: 'favicon.png' },
      { from: 'webpack/template/electron.js', to: 'electron.js' },
    ]),
    new ExtractTextPlugin({ filename: "css/styles.css", allChunks: true }),
    new ManifestPlugin({
      seed,
    }),
  ],
  optimization,
};