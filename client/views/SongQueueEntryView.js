// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  initialize: function() {
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});



// var MovieView = Backbone.View.extend({

//   template: _.template('<div class="movie"> \
//                           <div class="like"> \
//                             <button><img src="images/<%- like ? \'up\' : \'down\' %>.jpg"></button> \
//                           </div> \
//                           <span class="title"><%- title %></span> \
//                           <span class="year">(<%- year %>)</span> \
//                           <div class="rating">Fan rating: <%- rating %> of 10</div> \
//                         </div>'),

//   initialize: function() {
//     // your code here
//     this.model.on('change', this.render, this);
//   },

//   events: {
//     'click button': 'handleClick',
//   },

//   handleClick: function() {
//     // your code here
//     this.model.toggleLike();
//   },

//   render: function() {
//     this.$el.html(this.template(this.model.attributes));
//     return this.$el;
//   }

// });