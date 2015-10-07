'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/estilos.css': 'css/estilos.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'css/*.scss',
                tasks: ['sass','cssmin','clean','beep:2']
            },
            js: {
                files: ['js/init.js', 'js/funciones.js'],
                tasks: ['uglify','beep:2']
            }
        },
        cssmin: {
            target:{
                files:{
                'css/estilos.min.css': 'css/estilos.css'
                }
            }
        },

        uglify: {
            dist: {
              files: {
                'js/main.min.js': ['js/init.js', 'js/funciones.js']
              }
            }
        },
        // Deletes all .js files, but skips min.js files
        clean: {
          css: ["css/*.css", "!css/*.min.css"]
        }        
    });

    //Register modules to user
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-beep');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Register tasks
    grunt.registerTask('default', ['watch']);
};