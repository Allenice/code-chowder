var Server = require('ohana'),
    madoka = require('madoka');


var server = new Server({
  parser: madoka.generate
});

server.register([
  require('./module/common.js'),
  require('./module/user.js')
]);


server.start(4005);