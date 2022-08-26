const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// babel缓存（打包时更快）cacheDirectory: true,

// 文件缓存（访问项目时更快）
// 1.hash
// 2.chunkhash
// 3.contenthash

// 设置node环境
process.env.NODE_ENV = "development";
module.exports = {
  // 动态import引入 实现多入口  打包成单独文件
  entry: "./src/js/index.js",
  output: {
    // [name] 读取自定义文件名
    filename: "js/[name].[contenthash:10].js",
    path: resolve(__dirname, "build"),
  },
  // loader配置
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  // 将node_module 打包成单独 chunk 输出 (例如jquery打包成单独文件中 不在主入口文件 减轻主文件大小)
  // 多入口chunk中 引用公共文件  只会打包一个 chunk（例如都引用了jquery）
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  mode: "production",
};
