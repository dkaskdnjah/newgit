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
                // 排除第三方库不检查
                exclude:/node_modules/,
                loader: 'eslint-loader', 
                // eslint-loader 依赖  
                // package.json中添加配置
                // "eslintConfig": {
                //     "extends": "airbnb-base"
                // }
                // airbnb-base 依赖 eslint-config-airbnb-base eslint-plugin-import eslint
                options:{
                    // 自动修复
                    fix:true,
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
}