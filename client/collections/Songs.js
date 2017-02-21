// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function () {
    var thisSongs = this;
    $.ajax({
      url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs.json',
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      success: function (data) {
        // console.log(data.results);
        thisSongs.add(data.results);

        // thisSongs.forEach(function(model) {
        //   console.log(model.get('url'));
        // });
      },
      error: function (data) {
        console.error('failed');
      }
    });

  }

});