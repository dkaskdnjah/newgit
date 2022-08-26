const  path  = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [ 
          {
            loader: "loader1",
            options: {
              name: "xcx",
            },
          },
          'loader2',
          'loader3',
        ]
      },
    ],
  },
  resolveLoader: {
    modules: ["node_module", path.resolve(__dirname, "loaders")],
  },
};
