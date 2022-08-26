const {resolve} = require("path")
module.exports = {
    entry: './src/index.js',
    output: {
        filename:"build.js",
        path: resolve(__dirname, 'build'),
    },
    // loader配置
    module: {
        rules: [{
            test: /\.css$/,
            use: [ 
                // use数组中加载loader遵循顺序从右往左，从下往上 
                // 创建style标签，将js中的样式资源插入，添加到head中
                'style-loader',
                // 将css文件commonjs模块加载js中
                'css-loader'
            ]
        }]
    },
    plugins: [],
    mode: "development"
}