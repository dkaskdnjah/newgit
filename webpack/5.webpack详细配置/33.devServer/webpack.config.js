const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: ['./src/js/index.js'],
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
        // 执行代码目录
        contentBase: resolve(__dirname, 'build'),
        // 是否监视 contentBase目录下的所有文件，一旦文件变化就会自动重载 reload
        watchContentBase: true,
        watchOptions: {
            // 忽略的文件
            ignored: 'node_module'
        },
        // 是否启动gzip压缩
        compress: true,
        // 使用3000端口
        port: 3000,
        // 主机
        host: 'localhost',
        // 默认打开浏览器
        open: true,
        // 是否开启HMR功能
        hot: true,
        // 是否显示启动服务器日志
        clientLogLevel: 'none',
        // 除了一些基本启动信息外，其他内容是否显示
        queit: true,
        // 报错是否全屏显示
        overlay: false,
        proxy: {
            'api': {
                // 一旦devServer（3000）服务器接受到 /api/xxx 的请求 就会转发到 另一个服务器（5000）
                target: "http://localhost:5000",
                // 发送请求 路径重写  /api/xxx --> /xxx 去掉/api 
                pathReWrite: {
                    '^/api':"",
                }
            }
        }
    }
}