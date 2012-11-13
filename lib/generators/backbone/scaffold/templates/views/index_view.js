<%= view_namespace %> = <%= view_namespace %> || {};

<%= view_namespace %>.IndexView = Backbone.View.extend({
    template: JST["<%= jst 'index' %>"],

    initialize: function() {
        var that = this;
        that.options.<%= plural_model_name %>.bind('reset', that.addAll);
    },

    addAll: function() {
        var that = this,
            view = new <%= view_namespace %>.<%= singular_name.camelize %>View({model: <%= singular_model_name %>});
        that.$("tbody").append(view.render().el);
    },

    render: function() {
        var that = this;
        $(that.el).html(that.template(<%= plural_model_name %>: that.options.<%= plural_model_name %>.toJSON()));
        that.addAll();
        return that;
    }

});