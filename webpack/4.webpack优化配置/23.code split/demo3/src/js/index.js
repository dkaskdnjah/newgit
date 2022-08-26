import '../css/box1.css'
import '../css/box2.css'
import $ from "jquery"

// import '@babel/polyfill'
const add = (a,b)=>{
    return a+b;
}
// /* webpackChunkName: 'test' */ 重命名固定打包后的文件名
import(/* webpackChunkName: 'test' */'./test').then(({ hello })=>{
    console.log('res: ', hello());
}).catch((error)=>{
})
// eslint-disable-next-line: 下一行忽略eslint检查
console.log('$: ', $);
// eslint-disable-next-line
console.log('add: ', add(1,2));
