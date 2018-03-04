'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';

import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import Cache from 'gulp-file-cache';
import nodemon from 'gulp-nodemon'
import livereload from 'gulp-livereload';
import concat from 'gulp-concat';
import merge from 'merge-stream';

import pump from 'pump';
import del from 'del';

let cache = new Cache();

// Definition Directory
const DIR = {
    SRC: 'src',
    DEST: 'dist'
};

const SRC = {
    JS: DIR.SRC + '/**/*.js',
    ROUTES: DIR.SRC + '/routes/*.js',
    LIB: DIR.SRC + '/lib/*.js'
};

const DEST = {
    JS: DIR.DEST,
    ROUTES: DIR.DEST + '/routes',
    LIB: DIR.DEST + '/lib'
};

gulp.task('clean', () => {
    return del.sync([DIR.DEST]);
});

gulp.task('js', () => {
  let routesTask = gulp.src(SRC.ROUTES)
    .pipe(babel({
      presets: ['es2015']
    }))
   .pipe(uglify())
   .pipe(gulp.dest(DEST.ROUTES));

  let libTask = gulp.src(SRC.LIB)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('common.js'))
    .pipe(uglify())
    .pipe(gulp.dest(DEST.LIB));

  return merge(routesTask, libTask);
});

gulp.task('default', ['clean', 'js'], () => {
    return gutil.log('Gulp is running');
});
