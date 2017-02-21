// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.models.length === 1) {
        this.playFirst();
      }
    });
    this.on('ended', this.handleEnd);
    this.on('dequeue', this.remove);
  },

  playFirst: function () {
    // play first song in collection
    this.at(0).play();
  },

  handleEnd: function(song) {
    this.remove(song); //remove that song from the collection
    if (this.models.length > 0) {
      this.playFirst(); 
    }
  }
});

// this === model === array of songs