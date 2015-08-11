
$(function() {

  rivets.configure({
    rootInterface: '.',
    templateDelimiters: ['{{', '}}']
  });

  rivets.components['hello'] = {
    template: function() {
      return '<h1>Hello {{ userName }} !</h1>';
    },

    initialize: function(el, data) {
      return {
        userName: data.name
      };
    }
  };


  var user = window.user = {
    name: 'Allenice'
  };

  var view = rivets.bind($('#section'), user);

});