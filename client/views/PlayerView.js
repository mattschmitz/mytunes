// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  events: {
    'ended': 'handleEnded'
  },

  initialize: function() {
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    //sets url to models url if model exists (otherwise sets url to empty), 
    //then returns $el
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },

  handleEnded: function() {
    this.model.ended();
  }

});


// events: {
//     'click button': 'handleClick',
//   },

//   handleClick: function() {
//     // your code here
//     this.model.toggleLike();
//   },