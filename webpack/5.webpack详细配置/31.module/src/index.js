function hello (){
    console.log('hello: ');
}
hello()

import('./test').then(({ default: add })=>{
    console.log('res: ', add(2, 3));
})