
$(function() {

  // backbone model
  var User = Backbone.Model.extend({

    greeting: function() {
      return 'My name is ' + this.get('name');
    }

  });
  
  var user = window.user = new User({
    name: 'Allenice',
    age: 0
  });

  // adapter
  rivets.adapters[':'] = {
    observe: function(obj, keypath, callback) {
      obj.on('change:' + keypath, callback);
    },

    unobserve: function(obj, keypath, callback) {
      obj.off('change:' + keypath, callback);
    },

    get: function(obj, keypath) {
      return obj.get(keypath);
    },

    set: function(obj, keypath, value) {
      return obj.set(keypath, value);
    }
  };


  var tags = ['nodejs', 'php', 'angular'];

  rivets.bind($('#app')[0], {user: user, tags: tags});

  var i = 0;

  setInterval(function() {
    user.set('age', ++i);
  }, 1000);

  
});