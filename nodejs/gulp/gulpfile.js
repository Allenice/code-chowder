var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var compass = require('gulp-for-compass');
var del = require('del');
var postcss = require('gulp-postcss');
var precss = require('precss');

var paths = {
  scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
  images: 'client/img/**/*'
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm
gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['build'], cb);
});

gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

// Copy all static images
gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/img'));
});

gulp.task('compass', function () {
  gulp.src('client/sass/**/*.scss')
    .pipe(compass({
      sassDir: 'client/sass/',
      cssDir: 'client/css'
    }));
});

// postcss
gulp.task('postcss', function(){
  gulp.src('client/sass/**/*.scss')
    .pipe(postcss([precss()]))
    .pipe(gulp.dest('build/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts', 'images']);

gulp.task('test', function() {
  gulp.src('client/sass/**/*.scss')
    .pipe(function() {

    });
});

//gulp.task('task1', function(cb) {
//  console.log('task1');
//  cb();
//});
//
//gulp.task('task2', ['task1'], function () {
//  console.log('task2');
//});
//
//gulp.task('default', function() {
//  console.log('task');
//});