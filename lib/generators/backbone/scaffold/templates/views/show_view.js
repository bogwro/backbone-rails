<%= view_namespace %> = <%= view_namespace %> || {};

<%= view_namespace %>.ShowView = Backbone.View.extend({
    template: JST["<%= jst 'show' %>"],

    render: function() {
        var that = this;
        $(that.el).html(that.template(that.model.toJSON()));
        return that;
    }
});