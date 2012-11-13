<%= router_namespace %>Router = Backbone.Router.extend({
    initialize: function(options) {
        var that = this;
        that.<%= plural_model_name %> = new <%= collection_namespace %>Collection();
        that.<%= plural_model_name %>.reset(options.<%= plural_model_name %>);
    },

    routes: {
        "new": "new<%= class_name %>",
        "index": "index",
        ":id/edit": "edit",
        ":id": "show",
        ".*": "index"
    },

    new<%= class_name %>: function() {
        var that = this;
        that.view = new <%= "#{view_namespace}.NewView({collection: that.#{plural_name}})" %>;
        $("#<%= plural_name %>").html(that.view.render().el);
    },

    index: function() {
        var that = this;
        that.view = new <%= "#{view_namespace}.IndexView({#{plural_name}: that.#{plural_name}})" %>;
        $("#<%= plural_name %>").html(that.view.render().el);
    },

    show: function(id) {
        var that = this,
            <%= singular_name %> = that.<%= plural_name %>.get(id);
        that.view = new <%= "#{view_namespace}.ShowView({model: #{singular_name}})" %>;
        $("#<%= plural_name %>").html(that.view.render().el);
    },

    edit: function(id) {
        var that = this,
            <%= singular_name %> = that.<%= plural_name %>.get(id);
        that.view = new <%= "#{view_namespace}.EditView({model: #{singular_name}})" %>;
        $("#<%= plural_name %>").html(that.view.render().el)
    }

});