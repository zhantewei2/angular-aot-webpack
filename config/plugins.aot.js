let webpack=require('webpack');

const HtmlWebpackPlugin=require('html-webpack-plugin');
const helpers=require('./helpers');

module.exports=[
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

			,
			 new webpack.optimize.UglifyJsPlugin({
				compress:{
					warnings:true
				},
				output:{
					comments:false
				},
				sourceMap:false
			})
		]