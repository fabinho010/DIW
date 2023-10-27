const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const limpiarCSS = require("gulp-clean-css");
const limpiarJs = require("gulp-uglify");
const concat = require("gulp-concat");

function compilaSCSS() {
  return src("src/sass/*.scss").pipe(scss()).pipe(dest("dist/css/"));
}

function watcher() {
  watch("src/sass/*.scss", compilaSCSS);
}

function minimizaCSS() {
  return src("src/css/*.css").pipe(limpiarCSS()).pipe(dest("dist/css/"));
}

function minimizaJS() {
  return src("src/js/*.js").pipe(limpiarJs()).pipe(dest("dist/js/"));
}

function concatCSS() {
  return src("dist/css/*css")
    .pipe(concat("all.css"))
    .pipe(dest("dist/css/all.css"));
}

function concatJS() {
  return src("dist/js/*js").pipe(concat("all.js")).pipe(dest("dist/js/all.js"));
}

exports.compilaSCSS = compilaSCSS;
exports.watcher = watcher;
exports.minimizaCSS = minimizaCSS;
exports.minimizaJS = minimizaJS;
exports.concatCSS = concatCSS;
exports.concatJS = concatJS;

exports.kittens = series(
  compilaSCSS,
  parallel(minimizaCSS, minimizaJS),
  parallel(concatCSS, concatJS)
);
