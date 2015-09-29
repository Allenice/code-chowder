var ETP = require('extract-text-webpack-plugin');

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ETP.extract("css-loader") }
        ]
    },
    plugins: [
        new ETP('dist/style.css', {allChunks: true})
    ]
}