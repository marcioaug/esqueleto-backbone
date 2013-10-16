/*global define*/
define(function () {
    'use strict';

    var config = {
        url: '/',
        rest: 'http://localhost:8080/rest'
    };

    return {

        url: function (path, options) {
            var p;

            if (typeof options === 'object') {
                for (p in options) {
                    if (options.hasOwnProperty(p)) {
                        path = path.replace(':' + p, options[p]);
                    }
                }
            }

            return config.url + path;
        },

        rest: {
            url: function (path, options) {
                var p;

                if (typeof options === 'object') {
                    for (p in options) {
                        if (options.hasOwnProperty(p)) {
                            path = path.replace(':' + p, options[p]);
                        }
                    }
                }

                return config.rest + path;
            }
        }
    };
});
