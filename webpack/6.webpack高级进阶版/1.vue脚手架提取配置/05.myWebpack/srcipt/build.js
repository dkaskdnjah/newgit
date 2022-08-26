const config = require("../config/webpack.config")
const myWebpack = require("../lib/myWebpack")

const compiler = myWebpack(config)
compiler.run()