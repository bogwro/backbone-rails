<%= view_namespace %> ||= {}

<%= view_namespace %>.<%= @action.camelize %>View = Backbone.View.extend({
  template: JST["<%= jst @action %>"]

  render: ->
    var that = this;
    $(that.el).html(that.template());
    return that;
});
