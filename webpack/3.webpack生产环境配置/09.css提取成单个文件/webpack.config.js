const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    entry: './src/index.js',
    output: {
        filename:"build.js",
        path: resolve(__dirname, 'build'),
    },
    // loader配置
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },  
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'css/main.css'
        })
    ],
    mode: "development",
    // 自动编译 打开浏览器 热更新
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        // 启动gzip压缩
        compress: true,
        port: 3000,
        open: true,
    }
}