var models = require('./models/like');
var Backbone = require('backbone');

var updateLikes = new models.NumberOfLikes();

updateLikes.like();


console.log(updateLikes);
