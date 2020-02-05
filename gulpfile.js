var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browsersync = require('browser-sync').create();

const src = {
  html: [
    './src/**/*.html'
  ],
  scripts: [
    './src/js/**/*.js'
  ],  
  styles: [
    './src/css/**/*.css'
  ],
};

const dist = {
  html: './build',
  scripts: './build/js',
  styles: './build/css',
};

const browserSync = (done) => {
  browsersync.init({
    server: {
      baseDir: "./build/"
    },
    port: 3000
  });
  done();
}

const clean = () => {
  return del([
    'build',
  ]);
}

const styles = () => {
  return gulp.src(src.styles)
    .pipe(csso())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(dist.styles))
    .pipe(browsersync.stream());
}

const scripts = () => {
  return gulp.src(src.scripts)
    .pipe(uglify())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(dist.scripts))
    .pipe(browsersync.stream());
};

const pages = () => {
  return gulp.src(src.html)
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(dist.html))
    .pipe(browsersync.stream());
};

const watchFiles = () => {
  gulp.watch(src.styles, styles)
  gulp.watch(src.scripts, scripts)
  gulp.watch(src.html, pages)
}

const build = gulp.series(clean, gulp.parallel(styles, scripts, pages))
const watch = gulp.series(clean, gulp.parallel(styles, scripts, pages), gulp.parallel(watchFiles, browserSync))

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.pages = pages;
exports.build = build;
exports.watch = watch;
exports.default = watch;