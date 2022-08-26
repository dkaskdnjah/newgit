const add = (a,b)=>{
    return a+b;
}
// eslint-disable-next-line
console.log('add: ', add(1,2));
console.log('index文件被加载了: ', add);
document.getElementById("btn").onclick = function (){
    // 懒加载 使用时才加载文件 （看控制台是否有打印test文件内容）
    // 预加载 webpackPrefetch 等其他文件都加载完了 在进行加载 不影响加载主要业务加载速度 （兼容性差） （看network是否有加载文件）
    // 正常加载是并行加载（同一时间加载多个文件）
    import(/* webpackChunkName: 'test', webpackPrefetch:true  */'./test').then(({ hello })=>{
        console.log('res: ', hello());
    }).catch((error)=>{
    
    })
}

/*  
    // 让ES6支持浏览器全局变量 navigator window
    "env": {
        "browser": true
    }
*/  
if ('serviceWorker' in navigator) {
    window.addEventListener('load',function(){
        navigator.serviceWorker.register('/service-worker.js').then(()=>{
            console.log('serviceWorker注册成功了');
        }).catch(()=>{
            console.log('serviceWorker注册失败了');
        })
    })
}
