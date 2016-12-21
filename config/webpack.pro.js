const commonConfig=require('./webpack.common.js');
const webpack=require('webpack');
const BabiliPlugin=require('babili-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const webpackMerge=require('webpack-merge');
const  helpers=require('./helpers.js');
const AotPlugin = require('@ngtools/webpack').AotPlugin;
module.exports=function(){
	return {
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
		resolve:{
			modules:[helpers.root('src'),helpers.root('node_modules')],
			extensions:['.ts','.js','.json']

		},
		module:require(helpers.root('config','module.aot')),
		plugins:require(helpers.root('config','plugins.aot'))
	}
}