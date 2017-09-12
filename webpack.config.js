const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const {AotPlugin}=require('@ngtools/webpack');

const join=(...args)=>path.join(__dirname,...args);

module.exports=function makeWepbackConfig(envOptions){
    const isProd=process.env.isProd=!!(envOptions&&envOptions.MODE);
    const config={};

    config.entry={
        main:join('demo/src/main.ts'),
        polyfills:join('demo/src/polyfills.ts'),
        vendors:join('demo/src/vendors.ts')
    };
    config.output={
        path:join('demo/dist'),
        filename:'[name].bundle.js',
        chunkFilename:'[id].chunk.js',
        sourceMapFilename:'[name].bundle.map'
    };
    config.module={
      rules:[
          {
              test:/\.ts$/,
              use:isProd?'@ngtools/webpack':
                  ['ts-loader','angular-router-loader','angular2-template-loader']
          },
          {
              test:/\.css$/,
              use:ExtractTextPlugin.extract({
                  fallback:'style-loader',
                  use:'css-loader'
              })
          },
          {
              test:/\.scss$/,
              use:ExtractTextPlugin.extract({
                  fallback:'style-loader',
                  use:['css-loader','sass-loader']
              })
          },
          {
              test:/\.html$/,
              use:'raw-loader'
          }
      ]
    };
    config.plugins=[
        new HtmlWebpackPlugin({
            template:'./demo/src/index.html',
            chunksSortMode:function(a,b){
                const order=['vendors','ployfills','main'];
                return order.indexOf(a.names[0])-order.indexOf(b.names[0]);
            }
        }),
        new webpack.LoaderOptionsPlugin({
            debug:!isProd,
            minimize:isProd
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names:["vendor"],
            "minChunks":2,
            "async":"common"
        }),
        new ExtractTextPlugin('styles.css')
    ];
    if(isProd){
        config.plugins.push(
            new AotPlugin({
                tsConfigPath:join('tsconfig-aot.json'),
                entryModule:join('demo/src/app/app.module#AppModule')
            }),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                mangle:true,
                output:{comments:false},
                sourceMap:false
            })
        );
    }else{
        /*dismiss angular warning:
          It can not present to the prod mode;
          will lead to not create lazy route chunks
         */
        config.plugins.push(
            new webpack.ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)@angular/,
                join('demo/src/app')
            )
        )
    }

    config.resolve={
        modules:['node_modules',join('demo/src')],
        extensions:['.ts','.js','.css','.scss']
    };

    config.devServer={
      contentBase:join('demo/src'),
      port:4200,
      host:'localhost',
      historyApiFallback:true
    };
    //config.devtool='inline-source-map';
    return config;
};
