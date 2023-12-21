const { src, dest, watch, parallel, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat-css");
const limpiarCSS = require("gulp-clean-css");

function compilaSCSS() {
  return src("src/scss/application.scss").pipe(sass()).pipe(dest("src/css"));
}

function watcher() {
  watch("src/sass/*.scss", compilaSCSS);
}

function minimizaCSS() {
  return src("src/css/*.css").pipe(limpiarCSS()).pipe(dest("src/css"));
}

function concatCSS() {
  return src("src/css/*.css").pipe(concat("main.css")).pipe(dest("dist"));
}

exports.compilaSCSS = compilaSCSS;
exports.watcher = watcher;
exports.minimizaCSS = minimizaCSS;
exports.concatCSS = concatCSS;

exports.sass = series(compilaSCSS, minimizaCSS, concatCSS);
