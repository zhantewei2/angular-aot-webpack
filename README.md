# angular-aot-webpack
angular-aot-webpack
aot-test
-----
use for koa2:
-----
    const angularProxy=require('koa-angular-proxy');
    app.use(angularProxy('./dist'))

'./dist' is your directory of angular2 project that the defualt file is index.html.

Or suche use:
-----
    app.use(mount('/router',angularProxy('./dist')));

notice:index.html :_<base href='/router/'>_;
