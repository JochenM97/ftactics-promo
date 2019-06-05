var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create();
    uglify = require('gulp-uglify');
    concat = require('gulp-concat');

var paths = {
    styles: {
        src: "src/components/_app/main.scss",
        dest: "public"
    },
};

function style() {
    return gulp
        .src(paths.styles.src)
        // Initialize sourcemaps before compilation starts
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", sass.logError)
        // Use postcss with autoprefixer and compress the compiled file using cssnano
        .pipe(postcss([autoprefixer(), cssnano()]))
        // Now add/write the sourcemaps
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.dest))
        // Add browsersync stream pipe after compilation
        .pipe(browserSync.stream());
}


exports.style = style;

var build = gulp.parallel(style);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);