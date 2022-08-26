const fs = require("fs")
const path = require("path")
const babelParser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const { transformFromAst } = require("@babel/core")

const parser = {
    // 获取ast
    getAst(entryPath) {
        const file = fs.readFileSync(entryPath, "utf-8")
        // 2.将其解析成ast抽象语法树
        const ast = babelParser.parse(file, {
            sourceType: "module" , // 解析文件模块化方案 使用ES Module
        })

        return ast;
    },
    // 获取依赖
    getDeps(ast,entryPath){
        const dirname = path.dirname(entryPath)
        
        // 获取所有 ImportDeclaration 引入的文件 
        const deps = {}
        traverse(ast, {
            // 内部变量会去遍历 program.body 判断里面的类型
            // 如果type ImportDeclaration 就会执行ImportDeclaration方法
            ImportDeclaration({ node }) {
                const sourcePath =  node.source.value
                const absolutePath = path.resolve(dirname , sourcePath)
                deps[sourcePath] = absolutePath
            }
        })

        return deps;
    },
    // 将ast解析成code
    getCode(ast) {
        // 编译代码：将浏览器不能识别的语法进行编译
        const { code } = transformFromAst(ast, null , {
            presets: ["@babel/preset-env"]
        })

        return code;
    }
}
module.exports = parser