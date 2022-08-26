function hello (){
    console.log('helloWord: ');
}
hello()

import data from "./index.json"
console.log('data: ', data);

// webpack 只能处理js/json资源，不能处置css/图片等其他资源
// 开发/生产环境都是将es6模块化编译成浏览器能识别的模块化
// 生产环境多了压缩代码