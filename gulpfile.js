var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var cssnested = require('postcss-nested');

gulp.task('default', function() {
    console.log("Hooray-!")
})

gulp.task('html', function() {
    console.log("imagine something")
})

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssvars, cssnested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'))
})

gulp.task('watch', function() {

    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles')
    })
})