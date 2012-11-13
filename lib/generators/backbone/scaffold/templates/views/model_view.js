<%= view_namespace %> = <%= view_namespace %> || {};

<%= view_namespace %>.<%= singular_name.camelize %>View = Backbone.View.extend({
    template: JST["<%= jst singular_name %>"],

    events: {
        "click .destroy": "destroy"
    },

    tagName: "tr",

    destroy: function() {
        var that = this;
        that.model.destroy();
        that.remove();
        return false;
    },

    render: function() {
        var that = this;
        $(that.el).html(that.template(that.model.toJSON()));
        return that;
    }

});