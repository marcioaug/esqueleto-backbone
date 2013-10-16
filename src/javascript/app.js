/*global define*/
define(['backbone', 'i18n', 'util', 'routers/MainRouter'], function (Backbone, i18n, util) {
    'use strict';

    var initialize = function () {
        i18n.init({
            preload: ['pt-BR'],
            load: 'current',
            lng: 'pt-BR',
            fallbackLng: 'pt-BR',
            resGetPath: util.url('locales/__ns__-__lng__.json')
        }, function () {
            Backbone.history.start();
        });

    };

    return {
        initialize: initialize
    };
});
