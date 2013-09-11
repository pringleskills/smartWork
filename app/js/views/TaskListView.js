define([
    'backbone',
    'text!templates/taskList.html'
], function (Backbone, html) {
    'use strict';

    var TaskListView = Backbone.View.extend({

        template: _.template(html),

        initialize: function () {
            this.listenTo(this.collection, 'reset', this.render);
            this.collection.fetch({ reset: true });
        },

        render: function () {
            var html = this.template({ tasks: this.collection.toJSON() });
            this.$el.html(html);
            return this;
        }
    });

    return TaskListView;
});
