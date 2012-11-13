<%= view_namespace %> = <%= view_namespace %> || {};

<%= view_namespace %>.EditView = Backbone.View.extend({
    template: JST["<%= jst 'edit' %>"],

    events: {
        "submit #edit-<%= singular_name %>": "update"
    },

    update: function(e) {
        var that = this;
        e.preventDefault();
        e.stopPropagation();
        that.model.save(null, {
            success: function(<%= singular_name %>) {
                that.model = <%= singular_name %>;
                window.location.hash = "/#{that.model.id}";
            }
        });
    },

    render: function() {
        var that = this;
        $(that.el).html(that.template(that.model.toJSON()));
        that.$("form").backboneLink(that.model);
        return that;
    }

});