/**
 * grunt 任务构建
 * @author Allenice
 * @date 2015-09-29 15:49
 */

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    grunt.initConfig({

        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed',
                // outputStyle: 'compressed',
                includePaths: ['style/bourbon']
            },
            compile: {
                cwd: 'style/sass',
                src: '**/*.scss',
                dest: './style/css/',
                expand: true,
                ext: '.css'
            }
        },

        watch: {
            sass: {
                files: ['style/sass/**/*.scss'],
                tasks: ['sass']
            }   
        }
    });

    // 默认任务
    grunt.registerTask('default', ['sass', 'watch']);
}