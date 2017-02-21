// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.collection.on('add remove', this.render, this);
  },

  render: function() {
    this.$el.empty(); 
    this.$el.html('<th>Song Queue</th>');
    this.collection.forEach(this.renderEntryView, this);
    return this.$el;
  },

  renderEntryView: function(song) {
    var entryView = new SongQueueEntryView({model: song});
    this.$el.append(entryView.render());
  },

});

  // render: function() {
  //   this.$el.empty();
  //   this.collection.forEach(this.renderMovie, this);
  // },

  // renderMovie: function(movie) {
  //   var movieView = new MovieView({model: movie});
  //   this.$el.append(movieView.render());
  // }
