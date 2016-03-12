/**
* webpack 
* @date 2016-03-09 10:38:44
* @author Allenice <994298628@qq.com>
* @link http://www.allenice233.com
*/

var webpack = require('webpack');
var path = require('path');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractPlugin = require('extract-text-webpack-plugin');
var production = process.env.NODE_ENV === 'production';

var plugins = [
    new ExtractPlugin('style/app.css'),

    // function () {
    //     this.plugin('done', function(stats) {
    //         console.log(stats);
    //     });
    // },
];

if (production) {
    plugins = plugins.concat([
        // Cleanup the dist/ folder before
        // compiling our final assets
        new CleanPlugin('dist'),

        // This plugin looks for similar chunks and files
        // and merges them for better caching by the user
        new webpack.optimize.DedupePlugin(),

        // This plugins optimizes chunks and modules by
        // how much they are used in your app
        new webpack.optimize.OccurenceOrderPlugin(),

        // This plugin prevents Webpack from creating chunks
        // that would be too small to be worth loading separately
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 51200, // ~50kb
        }),

        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.[hash:8].js'),

        // This plugin minifies all the Javascript code of the final bundle
        new webpack.optimize.UglifyJsPlugin({
            mangle:   true,
            compress: {
                warnings: false, // Suppress uglification warnings
            },
        }),

        // This plugins defines various variables that we can set to false
        // in production to avoid code related to them from being compiled
        // in our final bundle
        new webpack.DefinePlugin({
            __SERVER__:      !production,
            __DEVELOPMENT__: !production,
            __DEVTOOLS__:    !production,
            'process.env':   {
                BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        })

    ]);
} else {
    plugins = plugins.concat([
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        // new CleanPlugin('dev/')
    ]);
}

config = {
    debug: !production,
    // devtool: production ? false : 'eval',
    entry: {
        app: './src',
        vendor: ['jquery', 'mustache']
    },

    output: {
        path: path.join(__dirname, './dev'),
        filename: 'app.js',
        chunkFilename: '[name].js',
        publicPath: '/dev/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015'],
                    plugins: ['add-module-exports']
                }
            },

            {
                test: /\.scss$/,
                loader: ExtractPlugin.extract('style', 'css!sass')
                // loader: "style!css!sass"
            },

            {
                test: /\.html/,
                loader: 'html'
            },

            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                loader: 'url',
                query: {
                    limit: 1000,
                    name: 'img/[name].[ext]'
                }
            }
        ]
    },

    plugins: plugins

}

if (production) {
    config.output = {
        path: path.join(__dirname, './dist'),
        filename: 'app.[hash].js',
        publicPath: '/dist/',
        chunkFilename: '[name].[hash].js'
    }
}

module.exports = config;