import gulp from 'gulp';
import browserSync from 'browser-sync';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';

export function compileCSS() {
    return gulp.src([
            'css/normalize.css',
            'css/styles.css'
            ],
        {'base': 'css/'})
        .pipe(cleanCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('.'))
        .pipe(browserSync.stream());
}

function reload(cb) {
  browserSync.reload(); // A simple task to reload the page
  cb(); // use the error-first callback to signal task completion
}

// Static Server + watching scss/html files
export function serve() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("css/*.css", compileCSS);
    gulp.watch("*.html", reload);
};

export default compileCSS;
