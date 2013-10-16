/*global define*/


define(['backbone'], function (Backbone) {
    'use strict';

    var MainRouter = Backbone.Router.extend({

        routes: {
            '': 'index'
        }

    });

    return new MainRouter();
});
