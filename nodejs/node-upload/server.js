var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs-extra'),
    util = require('util');
    formidable = require('formidable');

// 根据后缀名，返回对应的 mime-type
var mime = {
  'js': 'text/javascript',
  'css': 'text/css',
  'html': 'text/html',
  'json': 'application/json',
  'png': 'image/png',
  'jpg': 'image/jpeg',
  'gif': 'image/gif',
  'swf': 'application/x-shockwave-flash'
};


var server = http.createServer(function(req, res) {
  var pathname = req.url.split('?')[0];
  if(/\/upload/.test(pathname) && req.method.toLowerCase() === 'post') {

    var form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, './upload/temp/');
    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
    form.on('end', function(fields, files) {
      var temp_path = this.openedFiles[0].path;
      var file_name = this.openedFiles[0].name;
      var uploadDir = path.join(__dirname, './upload/');

      fs.copy(temp_path, path.join(uploadDir, file_name), function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log('success');
        }
      });
    });

  } else {
    var pathname = req.url.split('?')[0],
      url = pathname === '/' ? '/index.html' : pathname,
      ext = url.substr(url.lastIndexOf('.') + 1, url.length),
      filePath = path.join(__dirname, './public' + decodeURI(url));

    fs.readFile(filePath, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end('404! not found:' + url);
      }

      var mimeType = mime[ext] || 'text/html';
      res.writeHead(200, {
        'Content-Type': mimeType
      });
      res.end(data);
    });
  }
});

server.listen(3004);