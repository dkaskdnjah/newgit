import './assets/iconfont/iconfont.css'
import './assets/css/index.css'
import './js/index.js'

function add (a,b) {
    console.log('add: ', a+b);
}
add(1,2)

if (module.hot) {
    module.hot.accept("./js/index.js",function(){
        hello()
    })
}