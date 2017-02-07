module.exports=function(){
var koa=require('koa');
var Router=require('koa-router');
var mount=require('koa-mount');
var app=new koa();
var send=require('koa-send');
var convert=require('koa-convert');
var frontEndComponent=require('./angularProxy.js');
var router=new Router();
var path=require('path')
var rooter=function(...args){
	return path.join(__dirname,...args);
}
app.kets=['myKey'];
app.use(async(ctx,next)=>{
	ctx.response.set('Access-Control-Allow-Origin','http://localhost:3000');
	ctx.cookies.set('XSRF-TOKEN','mykey',{httpOnly:false});
	if(ctx.path==='/'){
		ctx.body='<a href="./router">gotoZTWAngular</a>';
	}else{
		await next();
	}
})
router.get('/get',async(ctx)=>{
	ctx.response.set('Access-Control-Allow-Origin','http://localhost:3001');
	ctx.body=ctx.path;
	console.log(ctx.request.get('X-XSRF-TOKEN'))
})
app.use(mount('/router',router.routes()));
app.use(mount('/router',router.allowedMethods()));
app.use(mount('/router',frontEndComponent('dest',path.join(__dirname,'../../'))));
app.listen(3001);
}
