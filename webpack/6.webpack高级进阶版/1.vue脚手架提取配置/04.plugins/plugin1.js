class Plugins1{
    apply(complier){
        complier.hooks.emit.tap('Plugins1',(compilation)=>{
            console.log('emit.tap');
        })
        complier.hooks.afterEmit.tapAsync('Plugins1',(compilation , cb)=>{
            setTimeout(()=>{
                console.log('afterEmit1.tap');
                cb()
            },1000)
        })
        complier.hooks.afterEmit.tapPromise('Plugins1',(compilation )=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve()
                    console.log('afterEmit2.tap');
                },1000)
            })
        })
        complier.hooks.afterEmit.tap('Plugins1',(compilation)=>{
            console.log('afterEmit.tap');
        })
        complier.hooks.done.tap('Plugins1',(compilation)=>{
            console.log('done.tap');
        })
    }
}
module.exports = Plugins1