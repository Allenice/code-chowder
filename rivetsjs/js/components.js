
$(function() {

  rivets.configure({
    rootInterface: '.',
    templateDelimiters: ['{{', '}}']
  });

  rivets.components['hello'] = {
    static: ['time1'],
    template: function() {
      return '<h1>Hello {{ userName }} !</h1><div>time1: {{ time1 }}</div><div>time2: {{ time2 }}</div>';
    },

    initialize: function(el, data) {
      return {
        userName: data.name,
        time1: data.time1,
        time2: data.time2
      };
    }
  };


  var user = window.user = {
    name: 'Allenice',
    time1: new Date(),
    time2: new Date()
  };

  rivets.init('hello', $('#hello3')[0], user);

  var view = rivets.bind($('#section')[0], user);

  setInterval(function() {
    user.time1 = user.time2 = new Date();
  }, 1000);

});