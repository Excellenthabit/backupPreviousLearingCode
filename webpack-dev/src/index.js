console.log('Hello Webpack');
document.write('Hello World!');
var el = document.createElement('div');
el.innerHTML = 'Hello Webpack！';
document.body.append(el);

require('./index.css');
require('./index.less');


let fn = () =>{
    console.log('Arrow function');
};

fn();