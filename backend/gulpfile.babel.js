'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';

import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import Cache from 'gulp-file-cache';
import nodemon from 'gulp-nodemon'
import livereload from 'gulp-livereload';

import pump from 'pump';
import del from 'del';

let cache = new Cache();

// Definition Directory
const DIR = {
    SRC: 'src',
    DEST: 'dist'
};

const SRC = {
    JS: DIR.SRC + '/**/*.js'
};

const DEST = {
    JS: DIR.DEST
};

gulp.task('clean', () => {
    return del.sync([DIR.DEST]);
});

gulp.task('js', () => {
  return gulp.src(SRC.JS)
          .pipe(babel({
              presets: ['es2015']
          }))
         .pipe(uglify())
         .pipe(gulp.dest(DEST.JS));
});

gulp.task('default', ['clean', 'js'], () => {
    return gutil.log('Gulp is running');
});
