// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.models.length === 1) {
        this.playFirst();
      }
    });
    this.on('ended', this.removeFirst);
  },

  removeFirst: function() {
    console.log(this);
    this.remove(this.at(0));
    console.log(this);
  },

  playFirst: function () {
    // play first song in collection
    // return;

    this.at(0).play();
  }

});

// this === model === array of songs