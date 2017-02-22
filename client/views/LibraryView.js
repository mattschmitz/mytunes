// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    //listen for this.collection.on('sucess of get request') - this.render();
    this.collection.on('newSongs', this.newSongsHandler, this);
  },

  newSongsHandler: function() {
    this.render();
  },

  render: function() {
    this.$el.empty(); 
    this.$el.html('<th>Library</th>');
    this.collection.forEach(this.renderEntryView, this);
    return this.$el;
  },

  renderEntryView: function(song) {
    var entryView = new LibraryEntryView({model: song});
    this.$el.append(entryView.render());
  },

});



  // render: function() {

  //   this.$el.empty(); 
    
  //   this.$el.html('<th>Song Queue</th>').append(
  //     this.collection.map(function(song) {
  //       return this.renderEntryView(song);
  //     })
  //   );

  //   return this.$el;
  // },