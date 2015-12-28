var through = require('through2');
var swig = require("swig"),
    path = require("path"),
    fs = require('fs'),
    beautify_html = require("js-beautify").html;


module.exports = function(options) {
    console.log(options);

    stream = through.obj(function(file, enc, cb){
        
    });

    return stream;
}


