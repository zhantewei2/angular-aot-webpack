const commonConfig=require('./webpack.common.js');
const webpack=require('webpack');
const webpackMerge=require('webpack-merge');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const  helpers=require('./helpers.js');
module.exports=function(){
	return webpackMerge(commonConfig(),{
		entry:{
			'p1':'./src/polyfills.ts',
			'p2':'./src/venders.ts',
			'p3':'./src/main.aot.ts'
			
		},
		output:{
			path:'dest',
			filename:'[name].bundle.js',
			chunkFilename:'[id].chunk.js'
		},
		plugins:[
			new HtmlWebpackPlugin({
				template:helpers.root('src','index.html'),
				favicon:helpers.root('src','favicon.ico'),
				title:'my test',
				chunks:['p1','p2','p3'],
				chunksSortMode:function sort1(a,b){
					let getId=function(str){return +str.match(/\d+/).toString();}
					return getId(a.names[0])-getId(b.names[0]);
				},
				minify:{
					removeComments:true,
					collapseWhitespace:false
				}
			}),
			new webpack.LoaderOptionsPlugin({
				minimize:true,
				debug:false
			})
		]
	})
}