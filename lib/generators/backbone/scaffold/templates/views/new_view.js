<%= view_namespace %> = <%= view_namespace %> || {};

<%= view_namespace %>.NewView = Backbone.View.extend({
    template: JST["<%= jst 'new' %>"],

    events: {
        "submit #new-<%= singular_name %>": "save"
    },

    constructor: function(options) {
        var that = this;
        Backbone.View.call(options, that);
        that.model = new that.collection.model();
        that.model.bind("change:errors", function() {
            that.render();
        });
    },

    save: function(e) {
        var that = this;
        e.preventDefault();
        e.stopPropagation();
        that.model.unset("errors");

        that.collection.create(that.model.toJSON(), {
            success: function(<%= singular_name %>) {
                that.model =  <%= singular_name %>;
                window.location.hash = "/#{that.model.id}";
            },
            error: function(<%= singular_name %>, jqXHR) {
                that.model.set({errors: $.parseJSON(jqXHR.responseText)});
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