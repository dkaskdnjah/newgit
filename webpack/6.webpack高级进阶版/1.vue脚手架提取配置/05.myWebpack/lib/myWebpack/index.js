const compiler = require("./compiler")

function myWebpack (config) {
    return new compiler(config)
}
module.exports = myWebpack