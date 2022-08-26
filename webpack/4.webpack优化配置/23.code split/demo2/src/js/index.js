import '../css/box1.css'
import '../css/box2.css'
import '../js/test.js'
import $ from "jquery"

// import '@babel/polyfill'
const add = (a,b)=>{
    return a+b;
}
// eslint-disable-next-line: 下一行忽略eslint检查
console.log('$: ', $);
// eslint-disable-next-line
console.log('add: ', add(1,2));
