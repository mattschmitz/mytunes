// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',

  initialize: function () {
    var thisSongs = this;

    var onSuccess = function (collection, response, options) {
      thisSongs.set(response.results);
      thisSongs.trigger('newSongs');
    };

    var onFailure = function () {
      console.log('failed');
    };

    this.fetch({
      success: onSuccess,
      failure: onFailure
    });

  }

});
