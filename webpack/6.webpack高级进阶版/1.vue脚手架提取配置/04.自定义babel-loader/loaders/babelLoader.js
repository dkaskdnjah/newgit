const { getOptions } = require('loader-utils')
const { validate } = require('schema-utils')
const babel  = require('@babel/core')
// 将普通的异步方法 转换成 promise方法
const util  = require('util')
const babelSchemar = require('./babelSchemar')


const transform = util.promisify(babel.transform)


module.exports = function (content, map , meta) {
    const callback = this.async()
    const options = getOptions(this)
    validate(babelSchemar, options, {
        name: 'babel loader'
    })
    transform(content, options).then(({ code, map })=>{
        callback(null, code, map, meta)
    }).catch((error)=>{
        callback(error)
    })
}


