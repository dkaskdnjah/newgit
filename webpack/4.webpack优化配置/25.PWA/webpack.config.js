const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

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
      // {
      //   test: /\.js$/,
      //   // 排除第三方库不检查
      //   exclude:/node_modules/,
      //   loader: 'eslint-loader', 
      //   // eslint-loader 依赖  
      //   // package.json中添加配置
      //   // "eslintConfig": {
      //   //     "extends": "airbnb-base"
      //   // }
      //   // airbnb-base 依赖 eslint-config-airbnb-base eslint-plugin-import eslint
      //   options:{
      //       // 自动修复
      //       fix:true,
      //   }
      // }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // 必须服务器支持 使用 node 或
    // 使用npm i serve -g 启动服务 serve -s build
    // 控制台打开netweork 设置成offline一样可以访问（离线访问） 
    new WorkboxWebpackPlugin.GenerateSW({
      // 快速开启 service-worker
      // 删除之前的 service-worker
      clientsClaim: true,
      skipWaiting: true,
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
