var gulp = require('gulp'),
    cleanCss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat');

gulp.task('default', function() {
    gulp.src([
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
        .pipe(gulp.dest('.'));
});
