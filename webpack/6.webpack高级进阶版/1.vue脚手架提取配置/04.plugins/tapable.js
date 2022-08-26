const { SyncHook, SyncBailHook, AsyncParallelHook, AsyncSeriesHook } = require('tapable')

class hook {
    constructor () {
        this.hook = {
            // 同步
            // 依次往下执行
            go: new SyncHook(['address']),
            // 一遇return 就不往下执行
            // go: new SyncBailHook(['address']),
            // 异步
            // 并行（异步代码同时执行）
            leave: new AsyncParallelHook(['name','age']),
            // 串行 （同时执行按时间顺序）
            // leave: new AsyncSeriesHook(['name','age']),
        }
    }
    tap() {
        this.hook.go.tap('class01',(address)=>{
            console.log('class01: ', address);
            // return 123123;
        })
        this.hook.go.tap('class02',(address)=>{
            console.log('class02: ', address);
        })
        this.hook.leave.tapAsync('class03',(name, age, cb)=>{
            setTimeout(()=>{
                console.log('class03: ', name +':' + age);
                cb();
            },1000)
        })
        this.hook.leave.tapPromise('class04',(name, age)=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve()
                    console.log('class04: ', name +':' + age);
                },2000)
            })
        })
        this.hook.leave.tap('class05',(name, age)=>{
            console.log('class05: ', name +':' + age);
        })
    }
    start() {
        this.hook.go.call('baidu')
        this.hook.leave.callAsync('xcx',20, ()=>{
             console.log("~~~~end")
        })
    }
}
const l =  new hook();
l.tap()
l.start()