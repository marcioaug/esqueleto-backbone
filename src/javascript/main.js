/*global require*/
require.config({
    paths: {
        'jquery': '../vendor/jquery/jquery',
        'underscore': '../vendor/underscore/underscore',
        'backbone': '../vendor/backbone/backbone',
        'json2': '../vendor/require-handlebars-plugin/hbs/json2',
        'text': '../vendor/requirejs-text/text',
        'less': '../vendor/less.js/dist/less-1.4.2',
        'util': 'util/util',
        'i18n': '../vendor/i18next/release/i18next.amd-1.7.1',
        'tpl': '../vendor/requirejs-tpl/tpl'
    },

    shim: {

        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },

        'underscore': {
            exports: '_'
        },

        'app': {
            deps: ['backbone', 'less', 'text']
        }
    }
});

require(['app'], function (app) {
    'use strict';
    app.initialize();
});
