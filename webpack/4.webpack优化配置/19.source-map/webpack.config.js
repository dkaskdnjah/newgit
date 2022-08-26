const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

// 设置node环境
process.env.NODE_ENV = 'development'
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename:"js/build.js",
        path: resolve(__dirname, 'build'),
    },
    // loader配置
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader', 
                // 1.@babel/core @babel/preset-env
                // 问题: 只能处理基础语法，如Promise高级语法无法转译
                // 2.@babel/polyfill
                // 问题: 只需要解决部分兼容性问题，但全部兼容性代码引入，体积大
                // 3.core-js 按需加载
                options:{
                    presets:[
                        [
                            '@babel/preset-env',
                            {   
                                // 按需加载
                                useBuiltIns:"usage",
                                corejs:{
                                    version:3,
                                },
                                // 指定兼容到哪个版本浏览器
                                targets:{
                                    chrome:'60',
                                    ie:'9',
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    mode: "development",
    devtool:"eval-source-map" // 源代码到构建代码 追溯（考虑是否运行更快、源代码和构建代码是否可准确定位、source-map是内联还是外部）
    // source-map
    // eval-source-map
    // inline-source-map
    // hidden-source-map
    // nosources-source-map
    // cheap-source-map
    // cheap-module-source-map
}