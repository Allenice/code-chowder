
var app = require('../index');

module.exports.test1 = function(test) {

  test.ok('value', 'value result');
  test.done();
}

//module.exports.test2 = function(test) {
//  test.ok(false, 'this assertion should fail');
//  test.done();
//}

module.exports.readAsync = function(test) {

  app.readAsync(function(err, content) {
    test.equal(content, '1111');
    test.done();
  });

}