const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
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
        })
    ],
    mode: "production",
    externals: {
        // 拒绝 jQuery 被打包进来（使用cdn引入的就可以使用）
        jquery: "jQuery"
    }

}