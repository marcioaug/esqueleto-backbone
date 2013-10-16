/*global module */

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({

        useminPrepare: {
            html: ['src/index.html'],
            options: {
                dest: 'dist/'
            }
        },

        usemin: {
            html: ['dist/**/*.html'],
            options: {
                dirs: ['dist/']
            }
        },

        htmlmin: {
            dist: {
                options: {

                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '*.html',
                    dest: 'dist/'
                }]
            }
        },

        imagemin: {
            dist: {
                files: [{expand: true, cwd: 'src/images', src: '{,*/}*.{png,jpg,jpeg}', dest: 'dist/images'}]
            }
        },

        cssmin: {
            dist: {
                files: {
                    'dist/css/main.css': ['src/css/**/*.css']
                }
            }
        },

        copy: {
            dist: {
                files: [
                    {expand: true, dot: true, cwd: 'src/', dest: 'dist/', src: ['*.{ico,txt}', '.htaccess', 'images/**/*.{webp,gif}', 'fonts/**/*']},
                    {expand: true, dot: true, cwd: 'src/',  src: ['locales/**/*'], dest: 'dist/'},
                    {expand: false, src: ['src/js/app.min.js'], dest: 'dist/js/app.min.js'},
                    {expand: false, src: ['src/server-dist.js'], dest: 'dist/server.js'}

                ]
            },

            dev: {
                files: [
                    {expand: false, src: ['src/vendor/modernizr/modernizr.js'], dest: 'src/js/vendor/modernizr.min.js'},
                    {expand: false, src: ['src/vendor/requirejs/require.js'], dest: 'src/js/vendor/require.min.js'},
                    {expand: false, src: ['src/vendor/normalize-css/normalize.css'], dest: 'src/less/vendor/normalize.less'}
                ]
            }
        },

        rev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 8
            },
            dist: {
                files: {
                    src: [
                        'dist/js/**/*.js',
                        'dist/css/**/*.css'
                    ]
                }
            }
        },

        clean: {
            dist: ['dist/*']
        },

        requirejs: {
            compile: {
                options: {
                    name: 'main',
                    baseUrl: 'src/javascript',
                    optimize: 'uglify',
                    preserveLicenseComments: false,
                    optimizeAllPluginResources: true,
                    useStrict: true,
                    findNestedDependencies: true,
                    wrap: false,
                    mainConfigFile: 'src/javascript/main.js',
                    out: 'src/js/app.min.js'
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                force: true
            },
            all: [
                'Gruntfile.js',
                'src/javascript/**/*.js'
            ]
        },

        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    'src/css/main.css': 'src/less/main.less'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('server', [
        'default'
    ]);

    grunt.registerTask('default', [
        'copy:dev',
        'jshint',
        'less'
    ]);

    grunt.registerTask('build', [
        'jshint',
        'clean:dist',
        'useminPrepare',
        'requirejs',
        'copy:dev',
        'imagemin',
        'htmlmin',
        'concat',
        'less',
        'cssmin',
        'uglify',
        'copy:dist',
        'rev',
        'usemin'
    ]);

};

