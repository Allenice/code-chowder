var gulp = require('gulp'),
    htmlBuilder = require('./gulp-html-template'),
    through = require('through2');

function prefixText(text) {
    console.log(text);
    return through.obj(function(file, en, cb) {
        // console.log(file.isStream());
        // console.log(file.isBuffer());
        console.log('prefixText');
        var content = file.contents.toString();
        var pak = JSON.parse(content);

        pak.name = 'gulp-modify';
        content = JSON.stringify(pak);
        file.contents = new Buffer(content);

        cb(null, file);
    });
}

function plugin2(options) {
    console.log(options);
    return through.obj(function(file, enc, cb) {
        console.log('plugin2');
        console.log(file.contents.toString());
        cb(null, file);
    });
}

gulp.task('task1', function() {
    console.log('task1 run');
   return gulp.src('./package.json').pipe(prefixText('Allenice')); 
});

gulp.task('task2', ['task1'], function() {
    console.log('task2 run');
});


gulp.task('task3', function() {
    return gulp.src('./package.json')
        .pipe(prefixText('Allenice'))
        .pipe(plugin2({
            name: 'Allenice'
        }));
});

gulp.task('default', function() {
    console.log('hello world!');
});

gulp.task('html', function() {
    return gulp.src(['./html/src/**/*.tpl'])
        .pipe(htmlBuilder({locals:'./locals.js'}))
        .pipe(plugin2())
        ;
});