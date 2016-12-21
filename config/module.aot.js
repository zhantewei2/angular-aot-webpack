module.exports={
	rules:[
				{test: /\.ts$/,use:[
					'awesome-typescript-loader',
					'angular2-template-loader',
					'angular2-webpack2-lazy-children-loader'
				]},
				{test:/\.json$/,use:'json-loader'},

				{test:/\.html$/,use:'raw-loader'},
				{test:/\.(jpg|png|gif)/,use:'file-loader?name=[path][name].[ext]'}
			]
}