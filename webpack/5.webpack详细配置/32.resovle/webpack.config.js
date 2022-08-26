const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename:"build.js",
        path: resolve(__dirname, 'build'),
        // publicPath: '/', //所有资源引入公共路径前缀（例如引入的build.js）
        chunkFilename: '[name]_chunk.js', // 非入口chunk名称（例如import引入的）
        // library:'[name]', // 整个库向外暴露的变量名
        // libraryTarget: "window", // 变量名添加到哪个上 browser环境
        // libraryTarget: "global", // 变量名添加到哪个上 node环境,
        // libraryTarget: "commonjs", // 什么形式暴露
    },
    // loader配置
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: "development",
    // 解析模块规则
    resolve: {
        // 配置解析模块路径别名
        alias: {
            $css : resolve(__dirname, 'src/css'),
            '@': resolve(__dirname, 'src')
        },
        // 配置省略文件路径的后缀名
        extensions: ['.js', '.vue', '.css'],
        modules: [resolve(__dirname, '../../node_modules'), 'node_modules']
    }
}