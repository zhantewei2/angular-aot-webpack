var express=require('express');
var app=express();
var helpers=require('./helpers.js');
app.use('',express.static(helpers.root('dest')));
app.get('*',function(req,res,next){
	res.sendFile(helpers.root('dest','index.html'))

})
console.log(helpers.root('dest'))
app.listen(3001);