# angular-aot-webpack
angular-aot-webpack
aot-test
-----
use for koa2:
-----
    app.js:
        const angularProxy=require('koa-angular-proxy');
        app.use(angularProxy('./dist'))

'./dist' is your directory of angular2 project that the entry file is index.html.

And suche use:
-----
    app.js:             
        app.use(mount('/router',angularProxy('./dist')));
        
    ./dist/index.html:  
        <base href='/router/'>

-----
    
