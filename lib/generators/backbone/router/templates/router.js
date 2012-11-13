<%= router_namespace %>Router = Backbone.Router.extend({
    routes: {
    <% actions.each do |action| -%>
        "<%= action %>": "<%= action %>",
     <% end -%>
    },

<% actions.each do |action| -%>
  <%= action %>: function() {
    var view = new <%= "#{view_namespace}.#{action.camelize}View()" %>;
    $("#<%= plural_name %>").html(view.render().el);
  },
<% end -%>

});