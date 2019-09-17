const path = require('path');

const htmlWebpackPlugin = require("html-webpack-plugin");

//在vue-loader 15+ 的版本种必须要这样的引用一个东西 下面这句 和plugins里面的东西

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry : 'C:/Users/王炜/Desktop/vue/7day/wangyiyun/src/main.js',
    output : {
        path : path.resolve('C:/Users/王炜/Desktop/vue/7day/wangyiyun/dist','build'),
        filename : 'build.js'
    },
    plugins : [
        new htmlWebpackPlugin({
            template : path.join(__dirname,"./src/index.html"),
            filename : "index.html"
        }),
        new VueLoaderPlugin()
    ],
    module : {
        rules : [
            { test : /\.css$/, use : ["style-loader","css-loader"] },
            { test : /\.(sass|scss)$/,use : ["style-loader","css-loader","sass-loader"]},
            { 
                test : /\.(jpg|png|gif|bmp|ttf|svg|woff|eot|woff2)$/,
                use : [
                    {
                        loader : 'url-loader',
                        options: {
                            limit: 8192,
                            name : '[hash:8]-[name].[ext]'
                        }              
                    }
                ]
                // options : {
                //     limit : 6000,
                //     name : '[hash:8]-[name].[ext]'
                // }
            },
            { 
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use : "vue-loader"
            }  
        ]
    },
    resolve : {
        alias:{ //设置vue被导入时包的路径
            "vue$" : "vue/dist/vue.js"
        }
    }
}