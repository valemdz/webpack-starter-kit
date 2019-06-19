const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractyPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports={
    entry:{
       js:'./src/index.js',
       vanilla:'./src/hello_vanilla.js'
    },
    output:{
        filename:'[name].[chunkhash].js'
    },
    devtool:'source-map',
    module:{
        rules:[
            {
                test:/\.(js)$/,
                exclude:/node_modules/, 
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.html$/,                
                use:[{
                    loader:'html-loader',
                    options:{minimize:true}                
                }]
            },
            {
                test:/\.(css|scss)/,
                use:[
                    'style-loader',
                     MiniCssExtractyPlugin.loader,
                     'css-loader',
                     { 
                         loader: 'postcss-loader',
                         options:{
                             autoprefixer:{
                                 browser:['last 2 versions']
                             },
                             sourceMap:true,
                             plugins: ()=>[autoprefixer]
                         }
                     },
                     'resolve-url-loader',
                     'sass-loader?outputStyle=compressed&sourceMap'
                ]
            },
            {
                test:/\.(jpe?g|png|gif|svg|webp)$/i,
                use:[
                    'file-loader?name=assets/[name].[ext]',
                    'image-webpack-loader?bypassOnDegub'
                ]
            },
            {
                test:/\.(ttf|eoy|woff2?|mp4|mp3|xml|pdf)$/i,
                use:'file-loader?name=assets/[name].[ext]'
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new MiniCssExtractyPlugin({
            filename:'[name].[chunkhash].css',
            chunkFilename:'[id].css'
        }),
        new HtmlWebpackPlugin({
            template:'./src/template.html',
            filename:'index.html',
            chunks:['js']
        }),
        new HtmlWebpackPlugin({
            template:'./src/template.html',
            filename:'vanilla.html',
            chunks:['vanilla']
        })
    ]
}


// Revisar este archivo de conf que no lo levanta con estas opciones
//'css-loader?minimize&sourceMap',

//'dist/**/*.*' cualquier nivel interno de carpetas y cualquier tipo de archivos