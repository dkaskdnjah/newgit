const  path  = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [ 
          {
            loader: "babelLoader",
            options: {
              presets: ["@babel/preset-env"]
            },
          },
        ]
      },
    ],
  },
  // 配置loader解析路径
  resolveLoader: {
    modules: ["node_module", path.resolve(__dirname, "loaders")],
  },
  mode: 'development'
};
