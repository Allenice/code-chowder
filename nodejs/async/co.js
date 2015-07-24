(function() {
  'use strict';

  var fs = require('fs');

  var helper = function (fn) {
    return function () {
      var args = [].slice.call(arguments);
      var pass;
      args.push(function () { // 在回调函数中植入收集逻辑
        if (pass) {
          pass.apply(null, arguments);
        }
      });
      fn.apply(null, args);

      return function (fn) { // 传入一个收集函数
        pass = fn;
      };
    };
  };


  var co = function (flow) {
    var generator = flow();
    var next = function (data) {
      var result = generator.next(data);
      if (!result.done) {
        result.value(function (err, data) {
          if (err) {
            throw err;
          }
          next(data);
        });
      }
    };
    next();
  };

  var readFile = helper(fs.readFile);

  co(function* () {
    var txt = yield readFile('file1.txt', 'utf8');
    console.log(txt);
    var txt2 = yield readFile('file2.txt', 'utf8');
    console.log(txt2);
  });

})();
