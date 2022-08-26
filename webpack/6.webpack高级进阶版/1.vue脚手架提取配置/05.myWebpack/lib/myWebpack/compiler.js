const { getAst, getDeps, getCode } = require("./parser")
const fs = require('fs')
const path = require('path')

class compiler{
    constructor (options) {
        this.options =options
    }
    run () {
        // 1.读取入口文件内容
        const entryPath = this.options.entry
        this.modules = [];

        // 第一次构建 获取入口文件信息
        const fileInfo = this.build(entryPath)
        this.modules.push(fileInfo)

        // 变量所有依赖
        this.modules.forEach(element => {
            // 当前文件所有依赖
            const deps = element.deps
            for (const filename in deps) {
                // 依赖绝对路径
                const absolutePath = deps[filename]
                const fileInfo = this.build(absolutePath)
                // 添加到module中就会继续循环遍历（递归）
                this.modules.push(fileInfo)
            }
        })
        const graph = this.modules.reduce((graph, module)=>{
            return {
                ...graph,
                [module.filePath]: {
                    code: module.code,
                    deps: module.deps,
                }
            }
        }, {})
        // console.log('graph: ', graph);
        this.genelate(graph)
    }
    build (filePath) {
        // 将文件解析成ast
        const ast = getAst(filePath)
        // 获取ast中所有依赖
        const deps = getDeps(ast, filePath)
        for (const key in deps) {
            deps[key] = deps[key].replace(/\\/g, '/')
        }
        // 将ast解析成code
        const code = getCode(ast)

        return {
            filePath,
            deps,
            code,
        }
    }
    genelate(graph) {
        const bundle = `
        (function(graph){
            // 加载入口文件
            function require(absolutePath) {
                // 执行每个文件代码中的require方法
                function localRequire(relativePath) {
                    // 递归调用 require引入绝对路径
                    return require(graph[absolutePath].deps[relativePath]);
                }
                // 需要暴露出去的文件内容
                var exports = {};
                (function (require,exports,code) {
                    // 执行代码块
                    eval(code);
                })(localRequire, exports ,graph[absolutePath].code)
                // 返回 require方法要得到的暴露内容
                return exports;
            }
            // 加载入口文件
            require('${this.options.entry}');
        })(${JSON.stringify(graph)})
        `
        fs.writeFileSync(path.resolve(this.options.output.path, this.options.output.filename), bundle)
    }
}
module.exports = compiler