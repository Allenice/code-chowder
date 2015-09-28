var gulp = require('gulp'),
    through = require('through2');

function prefixText(text) {
    return through.obj(function(file, en, cb) {
        console.log(file.isStream());
        console.log(file.isBuffer());
        
        cb();
    });
}

gulp.task('task1', function() {
    console.log('task1 run');
   return gulp.src('./package.json').pipe(prefixText('Allenice')); 
});

gulp.task('task2', ['task1'], function() {
    console.log('task2 run');
});

gulp.task('default', function() {
    console.log('hello world!');
});