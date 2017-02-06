const commonConfig=require('./webpack.common.js');
const webpackMerge=require('webpack-merge');
const  helpers=require('./helpers.js');
module.exports=function(){
	return webpackMerge(commonConfig(),{
		devtool:'cheap-module-source-map',
		output:{
			path:helpers.root('dist'),
			publicPath:'/',
			filename:'[name].bundle.js',
			sourceMapFilename:'[name].map',
			chunkFilename:'[id].chunk.js'
		},
		devServer:{
			port:3000,
			host:'localhost',
			historyApiFallback:true
			
		}
	})
}