<%= view_namespace %> = <%= view_namespace %> || {};

<%= view_namespace %>.<%= @action.camelize %>View = Backbone.View.extend({
  template: JST["<%= jst @action %>"],

  render: function() {
    var that = this;
    $(that.el).html(that.template());
    return that;
  }

});
