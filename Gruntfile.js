module.exports = function(grunt) {
    ssi = require('browsersync-ssi');
    // Project configuration.
    grunt.initConfig({
        less: {
            dist: {
                files: {
                    "static/css/style.css": "less/style.less",
                    "static/css/arcap.css": "less/page/arcap.less",
                    "static/css/specLada-vx.css": "less/spec/lada-vx.less",
                    "static/css/blank.css": "less/page/blank.less",
                }
            }
        },
        watch: {
            less: {
                files: ['less/**/*.less'],
                tasks: ['less'],
            }
        },
        browserSync: {
            bsFiles: {
                src: ['static/css/*.css', '**/*.html', '**/*.js']
            },
            options: {
                watchTask: true, // < VERY important
                server: {
                    baseDir: "./",
                    middleware: ssi({
                        baseDir: "./",
                        ext: '.html',
                    })
                }
            }
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-text-replace');

    // Default task(s).
    grunt.registerTask('default', ["browserSync", "watch"]);
};
