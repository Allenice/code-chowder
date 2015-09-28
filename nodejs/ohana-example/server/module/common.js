
module.exports = function(server) {


  server.get('/', {
    data: {
      greet: 'hello ohana!'
    }
  });


  server.post('/login/?', {
    delay: 1000,

    data: function(params, query) {
      console.log(params);
      console.log(query);

      var status;
      if (query.email === '1@qq.com' && query.password === '123') {
        status = "登录成功"
      } else {
        status = "登录失败";
      }

      return {
        status: status,
        data: [params, query],
        time: '{{ date(new Date(), "YYYY/MM/dd hh:mm:ss") }}'
      }
    }
  });

  server.proxy('/tpl/android_new/category/category_hot_ajax_0.html', {
    urlRoot: 'http://a.9game.cn'
  });

}