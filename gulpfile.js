var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cleanCss = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

gulp.task('default', ['css']);

gulp.task('css', function() {
    return gulp.src([
            'css/normalize.css',
            'css/skeleton.css',
            'css/styles.css'
            ],
        {'base': 'css/'})
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 9'],
            cascade: false
        }))
        .pipe(cleanCss())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('.'))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['css'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("css/*.css", ['css']);
    gulp.watch("*.html").on('change', browserSync.reload);
});
