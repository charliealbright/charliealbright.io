var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');


gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', ['nodemon'], function() {
    browserSync.init({
        proxy: 'localhost:5000',
        port: 3000,
        notify: true
    })
})

gulp.task('nodemon', function () {
    nodemon(
        {
            script: 'app/index.js',
            ignore: [
                'gulpfile.js',
                'node_modules/'
            ]
        }
    ).on('restart', function () {
      console.log('restarted!')
    })
})

gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/views/**/*.ejs', browserSync.reload);
});
