import '../css/box1.css'
import '../css/box2.css'
import '../js/test.js'
// import '@babel/polyfill'
const add = (a,b)=>{
    return a+b;
}
let promise = new Promise((resovle,reject)=>{
    console.log('resovle: ', "aaa55a啊啊a");
    resovle()
})
console.log('promise: ', promise);
// eslint-disable-next-line: 下一行忽略eslint检查
// eslint-disable-next-line
console.log('add: ', add(1,2));
