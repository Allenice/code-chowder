var fs = require('fs'),
    path = require('path')

module.exports = {

  readAsync: function(cb) {
    fs.readFile('./article.txt', cb);
  }

};