const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

// 设置node环境
process.env.NODE_ENV = 'development'
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
                    // 帮postcss找到package.json文件中的browserslist配置，通过配置加载指定兼容性样式
                    // "browserslist": {
                    //     "development": [
                    //       "last 1 chrome version", // 最近浏览器的一个版本
                    //       "last 1 firefox version",
                    //       "last 1 safari version"
                    //     ]
                    //     ,
                    //     "production": [
                    //       ">0.2%", // 兼容99.8的浏览器
                    //       "not dead", // 不要已经死的老版本
                    //       "not op_mini all" // 不要op_mini 已经死的
                    //     ]
                    //   }
                    // 默认配置
                    // 'postcss-loader'
                    // 修改loader配置
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         ident: 'postcss',
                    //         plugin: ()=>{
                    //             require('postcss-preset-env')
                    //         }
                    //     }
                    // }
                ],
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