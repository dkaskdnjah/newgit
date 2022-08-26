// import '@babel/polyfill'
const add = (a,b)=>{
    return a+b;
}
let promise = new Promise((resovle,reject)=>{
    console.log('resovle: ', "呵呵呵哒");
    resovle()
})
console.log('promise: ', promise);
// eslint-disable-next-line: 下一行忽略eslint检查
// eslint-disable-next-line
console.log('add: ', add(1,2))();
