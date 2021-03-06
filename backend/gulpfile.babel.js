'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';

import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
// import Cache from 'gulp-file-cache';
import Cache from 'gulp-cached';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import livereload from 'gulp-livereload';
import nodemon from 'gulp-nodemon'

import lazypipe from 'lazypipe';
import merge from 'merge-stream';
import browserSync from 'browser-sync';
import pump from 'pump';
import del from 'del';

let _browserSync = browserSync.create();

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

// give lazypipe
function buildPipes(path, cacheName) {
  return lazypipe()
    .pipe(Cache, cacheName)
    .pipe(sourcemaps.init)
      .pipe(babel, {
          presets: ["es2015"]
       })
      .pipe(uglify)
    .pipe(sourcemaps.mapSources, (function(sourcePath, file) {
      // source paths are prefixed with '../src/'
      // return '../src/' + sourcePath;
      return path;
    }))
    .pipe(sourcemaps.write, '../maps')
}

gulp.task('clean', () => {
    return del.sync([DIR.DEST])
});

gulp.task('js', () => {
  let routesTask = gulp.src(SRC.ROUTES)
   .pipe(buildPipes(SRC.ROUTES, 'ROUTES')())
   .pipe(gulp.dest(DEST.ROUTES))
   .pipe(_browserSync.reload({ stream : true }))

  let libTask = gulp.src(SRC.LIB)
    .pipe(buildPipes(SRC.LIB, 'LIB')())
    .pipe(concat('common.js'))
    .pipe(gulp.dest(DEST.LIB))
    .pipe(_browserSync.reload({ stream : true }))

  return
    merge(routesTask, libTask)
});

gulp.task('watch', () => {
    del.sync([DIR.DEST]);

    let watcher = {
      js: gulp.watch([SRC.ROUTES, SRC.LIB], ['js']),
      server: gulp.watch(['app.js'])
    };

    let notify = (event) => {
        gutil.log('File', gutil.colors.yellow(event.path), 'was', gutil.colors.magenta(event.type));
    };

    for(let key in watcher) {
        watcher[key].on('change', notify)
    }

    _browserSync.reload({ stream : true });
});


gulp.task('start', ['js'], () => {
  livereload.listen()
    nodemon({
      script: './bin/www.js',
      watch: DIR.DEST,
      stdout: false,
      ignore: [
        'gulpfile.babel.js',
        'node_modules/',
        'bin/'
      ]
    }).on('readable', function() {
      this.stdout.on('data', function(chunk) {
        if (/^listening/.test(chunk)) {
          livereload.reload()
        }
        process.stdout.write(chunk)
      })
    })
})

gulp.task('browser-sync', function() {
  _browserSync.init({
    proxy: "localhost:3030",  // local node app address
    port: 5000,  // use *different* port than above,
    files: ["dist/**/*.js"],
    notify: true
  });
});


gulp.task('default', ['clean', 'js', 'watch', 'browser-sync', 'start'], () => {
    return gutil.log('Gulp is running');
});
