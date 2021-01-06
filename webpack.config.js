const path = require('path');
const jquery = require('jquery');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, option) => {

  const config = {
    entry : [],
    output : {},
    plugins : [],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          include: [
            path.resolve(__dirname, 'src/js')
          ],
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ],
          exclude: /node_modules/
        }
      ]
    },
  }
console.log(option)
  if(option.mode === 'development'){
    // development
    config.entry = ['@babel/polyfill', './src/main.js', './src/main.scss'];
    config.output = {
      path: path.resolve(__dirname, 'dist'),
      filename: 'org_dsmp_loading.js'
    };
    config.plugins = [
      // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({ filename: 'org_dsmp_loading.css' }),
      new HtmlWebpackPlugin({
        title : 'DSMP 개발',
        template : './src/index.html',
        filename : 'index.html'
      }),
      new webpack.ProvidePlugin({
        $ : jquery,
        jQuery : jquery
      })
    ];
    config.devtool = 'source-map';
    config.devServer = {
      contentBase : path.join(__dirname, "/src"),
      port : 9000,
      open : true,
      inline : true,
      hot : true,
      index: 'index.html'
    };
  } else {
    // production
    config.entry = ['@babel/polyfill', './src/main.js', './src/main.scss'];
    config.output = {
      path: path.resolve(__dirname, 'dist'),
      filename: 'org_dsmp_loading.js'
    };

    config.plugins = [
      // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
      new MiniCssExtractPlugin({ filename: 'org_dsmp_loading.css' }),
      new webpack.ProvidePlugin({
        $ : jquery,
        jQuery : jquery
      })
    ];
  }
  
  return config;
};