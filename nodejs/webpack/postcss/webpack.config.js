var webpack = require('webpack');
var ExtractPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var autoprefixer = require('autoprefixer');
var precss = require('precss');

var plugins = [
    new ExtractPlugin('style/app.css')
];


var config = {
    entry: {
        app: './src'
    },

    output: {
        path: path.join(__dirname, './dev'),
        filename: 'app.js',
        publicPath: '/dev/'
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractPlugin.extract('css?minimize&camelCase!postcss')
            },

            {
                test: /\.scss$/,
                loader: ExtractPlugin.extract('css?minimize&camelCase!postcss!sass?sourcemap')
            }
        ]
    },

    postcss: function () {
        return [autoprefixer, precss];
    },

    plugins: plugins
}

module.exports = config;