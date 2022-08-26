const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// babel缓存（打包时更快）cacheDirectory: true,

// 文件缓存（访问项目时更快）
// 1.hash
// 2.chunkhash
// 3.contenthash

// 设置node环境
process.env.NODE_ENV = "development";
module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/build.[contenthash:10].js",
    path: resolve(__dirname, "build"),
  },
  // loader配置
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        //   {
        //     loader: "postcss-loader",
        //     options: {
        //       ident: "postcss",
        //       plugin: () => {
        //         require("postcss-preset-env");
        //       },
        //     },
        //   },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        // 1.@babel/core @babel/preset-env
        // 问题: 只能处理基础语法，如Promise高级语法无法转译
        // 2.@babel/polyfill
        // 问题: 只需要解决部分兼容性问题，但全部兼容性代码引入，体积大
        // 3.core-js 按需加载
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                // 按需加载
                useBuiltIns: "usage",
                corejs: {
                  version: 3,
                },
                // 指定兼容到哪个版本浏览器
                targets: {
                  chrome: "60",
                  ie: "9",
                },
              },
            ],
          ],
          // 开启babel缓存 js第二次构建时读取之前缓存(打包更快)
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.[contenthash:10].css",
    }),
  ],
  mode: "development",
};
