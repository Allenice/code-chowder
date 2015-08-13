(function() {

  rivets.configure({
    rootInterface: '.',
    templateDelimiters: ['{{', '}}']
  });

  // binders
  rivets.binders.color = function(el, value) {
    el.style.backgroundColor = value;
    el.style.color = 'white';
  }

  rivets.binders.toggle = {
    publishes: true,
    bind: function(el) {
      var model = this.model;
      $(el).on('click', function() {
        model.toggle = !model.toggle;
      });
    },

    unbind: function(el) {
      console.log('unbind');
      $(el).off('click', this.callback);
    },

    routine: function(el, value) {
      $(el)[!value ? 'addClass' : 'removeClass']('disabled');
    }
  };

  // formatter
  rivets.formatters.money = function(value) {
    return '$' + value;
  };

  rivets.formatters.currency = {
    read: function(value) {
      return (value / 100).toFixed(2);
    },

    publish: function(value) {
      console.log('publish');
      return Math.round(parseFloat(value) * 100);
    }
  };

  var auction = window.auction = {
    show: false,
    product: {
      name: 'Allenice'
    },
    currentBid: 1000,
    color: 'red',
    toggle: true,
    timeLeft: 150,
    currency: 12345
  };

  var view = rivets.bind($('#auction').show(), {auction: auction});

  setInterval(function() {
    auction.timeLeft--;
    if(auction.timeLeft <= 140) auction.show = true;

    if(auction.timeLeft <= 130) auction.color = 'blue';

    auction.currency--;
  }, 1000);
  
})();