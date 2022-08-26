const { getOptions } = require('loader-utils')
const { validate } = require('schema-utils')

const schema = require('./schema')

// 同步loader  map , meta非必传
// 1.
module.exports = function (content, map , meta) {
    console.log('111: ', 111);
    const options = getOptions(this)
    validate(schema, options, {
        name: 'loader1'
    })
    return content;
}
// 2.
// module.exports = function (content, map , meta) {
//     console.log('111: ', 111);
//     this.callback(null,content, map , meta)
// }

module.exports.pitch = function (content, map , meta) {
    console.log('pitch 111');
}

// 异步loader
// module.exports = function (content, map , meta) {
//     console.log('111: ', 111);
//     const callback = this.async()
//     setTimeout(()=>{
//         callback(null,content)
//     }, 1000)
// }

