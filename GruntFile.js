/**
 * Created by Jack Kettle on 29/10/2014.
 */

module.exports = function (grunt) {
    grunt.initConfig({

        // concat all js files
        concat: {
          js: {
            src: ['js/data.js', 'js/**/*.js'],
            dest: 'tmp/concat.js'
          },
          less: {
            src: ['less/style.less', 'less/**/*.less'],
            dest: 'tmp/concat.less'
          }
        },
        
        // Compile specified less files
        less: {
            compile: {
                options: {
                    paths: ["less/**/*"]
                },
                files: {
                    "dist/jquery-tariff-calculator.css": "tmp/concat.less"
                }
            }
        },
        
        // minifyjs
        uglify: {
            js: {
                options: {
                    compress: false,
                    mangle: false,
                    beautify: true
                },
                files: {
                    'dist/jquery-tariff-calculator.js': ['tmp/concat.js']
                }
            },
            dist: {
                options: {
                    compress: false,
                    mangle: false,
                },
                files: {
                    'dist/jquery-tariff-calculator.min.js': ['tmp/concat.js']
                }
            }
        },
        
        watch: {
            dist: {
                files: ["js/**/*.js"],
                tasks: ['concat:js', 'uglify:dist']
            },
            scripts: {
                files: ["js/**/*.js"],
                tasks: ['concat:js', 'uglify:js']
            },
            styles: {
                files: ["less/**/*.less"],
                tasks: ['concat:less', 'less']
            }
        }

    });

    // Load tasks so we can use them
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // The dev task will be used during development
    grunt.registerTask("default", ["watch"]);
};