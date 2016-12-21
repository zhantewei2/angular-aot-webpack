const webpack=require('webpack');
var  helpers=require('./helpers.js');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CommonsChunkPlugin=require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports=function(){

	return {
		entry:{
			'p1':'./src/polyfills.ts',
			'p2':'./src/venders.ts',
			'p3':'./src/main.browser.ts'
			
		},
		resolve:{
			modules:[helpers.root('src'),helpers.root('node_modules')],
			extensions:['.ts','.js','.json']

		},
		module:{
			rules:[
				{test: /\.ts$/,use:[
					'awesome-typescript-loader',
					'angular2-template-loader',
					'angular-router-loader'
				
				]},
				{test:/\.json$/,use:'json-loader'},
				{test:/\.css$/,use:'css-loader'},
				{test:/\.html$/,use:'raw-loader'},
				{test:/\.(jpg|png|gif)/,use:'file-loader?name=[path][name].[ext]'}
			]
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
			})
		]
	}
}