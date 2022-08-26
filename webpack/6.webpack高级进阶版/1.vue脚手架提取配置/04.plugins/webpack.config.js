const Plugin1 = require('./plugin1')
const Plugin2 = require('./plugin2')
module.exports = {
  plugins: [
      // new Plugin1(),
      new Plugin2({
        from: "public",
        to:"css",
        ignore: ["**/index.html"]
      }),
  ],
  mode: 'development'
};
