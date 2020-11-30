'use strict';

const gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    del = require('del');


const path = {
    build: { 
        html: 'build/',
        style: 'build/css/',
        js: 'build/js/',
        img: 'build/img/',
        fonts: 'build/fonts/',
        lib: 'build/lib/',
    },
    src: { 
        html: 'src/*.html', 
        style: 'src/scss/main.scss',
        js: 'src/js/*.js',
        img: 'src/img/**/*.*', 
        fonts: 'src/fonts/**/*.*',
        lib: 'src/lib/**/*.*',
    },
    watch: { 
        html: 'src/**/*.html',
        style: 'src/scss/**/*.scss',
        js: 'src/js/**/*.js',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        lib: 'src/lib/**/*.*',
    },
    clean: 'build'
};

function htmlBuild(cb){
    return gulp.src(path.src.html) 
        .pipe(rigger()) 
        .pipe(gulp.dest(path.build.html));
        cb();
}

function libBuild(cb){
    return gulp.src(path.src.lib) 
        .pipe(gulp.dest(path.build.lib));
        cb();
}

function styleBuild(cb){
    return gulp.src(path.src.style) 
        .pipe(sourcemaps.init()) 
        .pipe(sass()) 
        .pipe(prefixer({
            overrideBrowserslist: ['last 2 versions'], 
            cascade: false 
        })) 
        .pipe(cssmin()) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.style)); 
        cb();
}

function jsBuild(cb){
    return gulp.src(path.src.js) 
        .pipe(sourcemaps.init()) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js)); 
        cb();
}

function img(cb) {
    return gulp.src(path.src.img)
            .pipe(imagemin({ 
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngquant()],
                interlaced: true
            }))
            .pipe(gulp.dest(path.build.img));
    cb();
}

function fonts(cb) {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
}

function build(cb) {
    htmlBuild();
    styleBuild();
    jsBuild();
    img();
    fonts();
    libBuild();
    cb();
}

function clean() {
    return del(path.clean, {force: true});
}

// Watch files
function watchFiles() {
    gulp.watch(path.watch.style, styleBuild);
    gulp.watch(path.watch.js, jsBuild);
    gulp.watch(path.watch.html, htmlBuild);
    gulp.watch(path.watch.img, img);
    gulp.watch(path.watch.fonts, fonts);
    gulp.watch(path.watch.lib, libBuild)
}

// export tasks
exports.clean = clean;
exports.build = build;
exports.watch = watchFiles;
exports.default = gulp.parallel(build, watchFiles);