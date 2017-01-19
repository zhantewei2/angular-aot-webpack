# angular-aot-webpack
angular-aot-webpack
aot-test
-----
use for koa2:
-----
    const angularProxy=require('koa-angular-proxy');
    app.use(angularProxy('./dist'))

'./dist' is your directory of angular2 project that the defualt file is index.html.

And suche use:
-----
    app.use(mount('/router',angularProxy('./dist')));
index.html:
-----
    base href='/router/'
