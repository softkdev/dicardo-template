const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
// const imagemin = require('gulp-imagemin'); // Will be imported dynamically
const browserSync = require("browser-sync").create();
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const del = require("del");

// Paths configuration
const paths = {
  src: {
    html: "src/html/**/*.html",
    scss: "src/scss/**/*.scss",
    js: "src/js/**/*.js",
    images: "src/images/**/*.{jpg,jpeg,png,gif,svg,webp}",
    fonts: "src/fonts/**/*.{woff,woff2,ttf,eot}",
  },
  dist: {
    base: "dist",
    css: "dist/css",
    js: "dist/js",
    images: "dist/images",
    fonts: "dist/fonts",
  },
};

// Clean dist folder
function cleanDist() {
  return del(["dist/**/*"]);
}

// Compile SCSS to CSS
function compileSass() {
  return gulp
    .src("src/scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "expanded",
        precision: 10,
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        cascade: false,
        grid: true,
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.stream());
}

// Minify CSS for production
function minifyCSS() {
  return gulp
    .src("src/scss/main.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
        precision: 10,
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        cascade: false,
        grid: true,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.dist.css));
}

// Process JavaScript files
function processJS() {
  return gulp
    .src(paths.src.js)
    .pipe(sourcemaps.init())
    .pipe(concat("main.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.dist.js))
    .pipe(browserSync.stream());
}

// Minify JavaScript for production
function minifyJS() {
  return gulp
    .src(paths.src.js)
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist.js));
}

// Optimize images
async function optimizeImages() {
  const imagemin = await import("gulp-imagemin");
  return gulp
    .src(paths.src.images)
    .pipe(imagemin.default())
    .pipe(gulp.dest(paths.dist.images));
}

// Copy fonts
function copyFonts() {
  return gulp.src(paths.src.fonts).pipe(gulp.dest(paths.dist.fonts));
}

// Copy HTML files
function copyHTML() {
  return gulp
    .src(paths.src.html)
    .pipe(gulp.dest(paths.dist.base))
    .pipe(browserSync.stream());
}

// Browser Sync configuration
function serve() {
  browserSync.init({
    server: {
      baseDir: paths.dist.base,
    },
    port: 3000,
    open: true,
    notify: false,
  });
}

// Watch files for changes
function watchFiles() {
  gulp.watch(paths.src.html, copyHTML);
  gulp.watch(paths.src.scss, compileSass);
  gulp.watch(paths.src.js, processJS);
  gulp.watch(paths.src.images, optimizeImages);
  gulp.watch(paths.src.fonts, copyFonts);
}

// Development task
const dev = gulp.series(
  cleanDist,
  gulp.parallel(copyHTML, compileSass, processJS, optimizeImages, copyFonts),
  gulp.parallel(serve, watchFiles)
);

// Production build task
const build = gulp.series(
  cleanDist,
  gulp.parallel(copyHTML, minifyCSS, minifyJS, optimizeImages, copyFonts)
);

// Watch task for development
const watch = gulp.series(
  gulp.parallel(copyHTML, compileSass, processJS, optimizeImages, copyFonts),
  gulp.parallel(serve, watchFiles)
);

// Export tasks
exports.clean = cleanDist;
exports.sass = compileSass;
exports.js = processJS;
exports.images = optimizeImages;
exports.fonts = copyFonts;
exports.html = copyHTML;
exports.serve = serve;
exports.watch = watch;
exports.dev = dev;
exports.build = build;
exports.default = dev;
