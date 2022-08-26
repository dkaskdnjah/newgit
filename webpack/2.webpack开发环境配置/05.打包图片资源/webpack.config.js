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
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            },
            // 解析样式文件中的图片资源
            // 需要下载 file-loader url-loader 依赖于 file-loader
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     loader: 'url-loader',
            //     options: {
            //         // 图片小于 8kb 会被base64处理
            //         // 优点 减少请求数量(减轻服务器压力)
            //         // 缺点 文件变大 文件资源渲染较慢
            //         limit: 1 * 1024,
            //         // e6Module: false, // 取消使用es6模块化，使用和html-loader一样的 commonjs模块，否则无法解析img
            //         name: '[hash:10].[ext]'
            //     },
            // },
            {
                test: /\.html$/,
                // 多个使用use，单个使用loader
                // 解析html中img资源，从而能被url-loader处理
                loader: 'html-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    mode: "development"
}