/*
* 等所有异步结束后，执行逻辑
* */

var fs = require('fs');

var pending = function (callback) {
  var count = 0;
  return function () {
    count++;
    return function () {
      count--;
      if (count === 0) {
        callback();
      }
    };
  };
};

var done = pending(function () {
  // 所有回调结束后调用
  console.log('all is over');
});

fs.readFile('file1.txt', 'utf8', done());
fs.readFile('file2.txt', 'utf8', done());
