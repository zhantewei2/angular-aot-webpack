var send=require('koa-send');
var fs=require('fs')
var pathUt=require('path');
module.exports=function(path,dirname=''){
	return async(ctx,body)=>{
		let abPath=pathUt.join(dirname,path+ctx.path);
		let fileExist=await function(){
			return new Promise((resolve,reject)=>{
				fs.access(abPath,err=>{
					if(!!err||ctx.path==='/'){
						resolve(false);
					}else{	
						resolve(true);
					}
				})
			})
		}();
		if(fileExist){
			console.log('exist',ctx.path)
			await send(ctx,path+ctx.path,{root:dirname});
		}else{
			console.log(dirname)
			await send(ctx,path+'/index.html',{root:dirname});
		}
	}
}