define([
    'backbone',
    'models/TaskCollection',
    'views/AppView',
    'views/TaskListView',
    'views/TaskMapView',
    'views/SettingsView'
], function (Backbone, taskCollection, AppView, TaskListView, TaskMapView, SettingsView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({

        appView: new AppView(),

        views: {},

        routes: {
            '': 'taskListView',
            'taskmap' : 'taskMapView',
            'settings': 'settingsView'
        },

        taskListView: function () {
            if (!this.views.taskListView) {
                this.views.taskListView = new TaskListView({ collection: taskCollection });
            }

            this.appView.setContentView({
                view: this.views.taskListView
            });
        },

        taskMapView: function () {
            if (!this.views.taskMapView) {
                this.views.taskMapView = new TaskMapView({ collection: taskCollection });
            }

            this.appView.setContentView({
                navBarTitle: 'Task Map',
                view: this.views.taskMapView
            });

            this.views.taskMapView.configureMap();
        },

        settingsView: function () {
            if (!this.views.settingsView) {
                this.views.settingsView = new SettingsView();
            }

            this.appView.setContentView({
                view: this.views.settingsView
            });
        }

    });

    return AppRouter;
})
