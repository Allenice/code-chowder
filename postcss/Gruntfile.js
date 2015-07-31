/*
* postcss test
* */

var precss = require('precss');


module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-postcss');

  grunt.initConfig({

    postcss: {
      options: {
        map: {
          inline: false,
          annotation: 'styles/css/maps/'
        },
        processors: [
          precss()
        ]
      },
      compile: {
        expand: true,
        cwd: 'styles/sass/',
        ext: '.css',
        src: ['**/*.scss', '!**/_*.scss'],
        dest: 'styles/css/'
      }

    }

  });

  grunt.registerTask('default', ['postcss']);

}