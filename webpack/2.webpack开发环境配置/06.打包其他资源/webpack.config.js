const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: ['./src/index.js','./src/index.html'],
    output: {
        filename:"build.js",
        path: resolve(__dirname, 'build'),
    },
    // loader配置
    module: {
        rules: [
            {   
                // css style-loader默认支持HMR
                // js 不支持HMR，只能module.hot更新除入口js文件之外
                // html HMR会导致html不更新 需要改entry 引入html
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },  
            {   //排除css|html|js资源
                exclude: /\.(css|html|js)$/,
                // 多个使用use，单个使用loader
                // 解析html中img资源，从而能被url-loader处理
                loader: 'file-loader',
                options: {
                    outputPath:"iconfont"
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: "development",
    // 自动编译 打开浏览器 热更新
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        // 启动gzip压缩
        compress: true,
        // 使用3000端口
        port: 3000,
        // 默认打开浏览器
        open: true,
        hot: true,
    }
}