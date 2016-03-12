var webpack = require('webpack');
var path = require('path');
var ExtractPlugin = require('extract-text-webpack-plugin');


config = {
    entry: {
        app: './html/app.js'
    },

    output: {
        path: path.join(__dirname, './js'),
        filename: 'app.js'
    },

    module: {
        loaders: [
            {
                test: /\.swig$/,
                loader: path.resolve(__dirname, './index'),
                query: {
                    locals: {
                        name2: 'Allenice2'
                    }
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractPlugin.extract('style', 'css!sass')
                // loader: "style!css!sass"
            }
        ]
    },

    swigOptions: {
        
    },

    plugins:[
        new ExtractPlugin('../style/css/[name].css')
    ]
}

module.exports = config;