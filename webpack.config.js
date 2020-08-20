const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
      main: './src/pages/index.js'
    },
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
    },
    devServer: {
      port: 3000
    },
    module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        },
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1}
             },
            'postcss-loader'
        ],
      },


      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: 'file-loader?name=./images/[name].[ext]',
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]',
      },
    ]
  },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.html'
        }),
        new MiniCssExtractPlugin(),
      ]
    }
