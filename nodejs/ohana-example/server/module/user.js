
module.exports = function(server) {

  // 获取用户列表
  server.get('/user/?', {
    data: function() {
      return [
        '{{repeat(10)}}',
        {
          _id: '{{objectId()}}',
          index: '{{index()}}',
          sefIntro: function(faker) {
            return 'My name is ' + this.name + '.';
          },
          avatar: '{{image.avatar()}}',
          age: '{{integer(20, 40)}}',
          name: '{{firstName()}} {{surname()}}',
          gender: '{{random("male", "female")}}',
          email: '{{email()}}',
          address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}'
        }
      ];
    }
  });


}