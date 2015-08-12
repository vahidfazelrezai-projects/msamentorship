var gulp = require('gulp');

gulp.task('vendor', function() {
    return gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js'
    ])
    .pipe(gulp.dest('client/assets/js'));
});

gulp.task('default', ['vendor']);
