const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
module.exports = {
    entry: {
        // 最终打包生成的名词[name] jquery
        // ['jquery'] 要打包的库名
        jquery: ['jquery'],
    },
    output: {
        filename: "[name].js",
        path: resolve(__dirname, 'dll '),
        library: "[name]_[hash]"  // 打包的库暴露出去的内容名字
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // 打包一个manifest.json文件 提供和jquery的映射关系
        new webpack.DllPlugin({
            name: '[name]_[hash]', // 映射的库暴露的内容名称
            path: resolve(__dirname, 'dll/manifest.json'),
        }),
    ],
    mode: "production"
}