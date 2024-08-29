const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { ModuleFederationPlugin } = require('webpack').container;
const webpack = require('webpack'); 

const deps = require("./package.json").dependencies;

module.exports = (env = {}) => ({
 mode: 'development',
  cache: false,
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  target: 'web',
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.vue','.js', '.json'],
    alias: {
      vue: "vue/dist/vue.esm-bundler.js"
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: { limit: 8192 },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new ModuleFederationPlugin({
      name: 'mfeVue',
      filename: 'remoteEntry.js',
      exposes: {
        './HelloWord': './src/components/HelloWord'
      },
      shared: {
        vue: {
          eager: true,
          requiredVersion: deps.vue,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 4003,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
});
