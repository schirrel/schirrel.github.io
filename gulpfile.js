var gulp = require("gulp");
var concat = require("gulp-concat");
var minify = require("gulp-minify");
var cleanCss = require("gulp-clean-css");
var copy = require("gulp-copy");
var clean = require('gulp-clean');

var source = ["assets/*", "index.html", "cname", "CNAME"];
var destination = "public/";

gulp.task("js", function () {
  return gulp
    .src(["scripts/Request.js", "scripts/snarkdown.js", "scripts/translation.js",
      "scripts/menu.js", "scripts/content.js", "scripts/blog.js"])
      .pipe(
        minify({
          ext: {
            min: ".js",
          },
          noSource: true,
        }))

    .pipe(concat("magica.js"))
    .pipe(gulp.dest("public/"));
});

gulp.task("css", function () {
  return gulp
    .src(["style/*.css"])
    .pipe(concat("main.css"))
    .pipe(cleanCss())
    .pipe(gulp.dest("public/style"));
});

gulp.task('clear', function () {
    return gulp.src('public/')
        .pipe(clean({force: true}))
        .pipe(gulp.dest('public'));
});
gulp.task("copy", function () {
  return gulp
    .src(source)
    .pipe(copy(destination, {}))
});

gulp.task("default", gulp.series("clear", "js", "css", "copy"));
