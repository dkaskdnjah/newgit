const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin")

// webpack 默认读取 webpack.config.js 文件 
// 需要运行 webpack.dll.js 
// 执行 webpack --config webpack.dll.js 
module.exports = {
    entry: './src/index.js',
    output: {
        filename:"build.js",
        path: resolve(__dirname, 'build'),
    },
    // loader配置
    module: {
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // 告诉webpack哪些库不参与打包，同时使用时的名词也得变~
        new webpack.DllReferencePlugin({
            manifest: resolve(__dirname, 'dll/manifest.json'),
        }),
        // 将某个文件打包输出出去，并在html中自动引入该资源
        new AddAssetHtmlWebpackPlugin({
            filepath: resolve(__dirname, 'dll/jquery.js'),
        })
    ],
    mode: "production"
}