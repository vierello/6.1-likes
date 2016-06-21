var Backbone = require('backbone');
var $ = require('jquery');

var NumberOfLikes = Backbone.Model.extend({
    defaults: {
      'likes': 0,
    },
    initialize: function(){
      $('.like-button').html(this.get('likes') + ' likes');
    },
    like: function() {
      var baseLikes = this.get('likes');
      //console.log(baseLikes);
      $('.like-button').on('click', function(){
        $('.like-button').html((baseLikes += 1) + ' likes');
      });
    }
});

module.exports = {
  'NumberOfLikes': NumberOfLikes
};
