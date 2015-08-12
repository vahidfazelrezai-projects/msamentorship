var gulp = require('gulp');
var merge = require('merge-stream');

gulp.task('vendor', function() {
    var js = gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/materialize-css/bin/materialize.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js'
    ])
    .pipe(gulp.dest('client/assets/js'));

    var css = gulp.src([
        'node_modules/materialize-css/bin/materialize.css'
    ])
    .pipe(gulp.dest('client/assets/css'));

    return merge(js, css);
});

gulp.task('default', ['vendor']);
