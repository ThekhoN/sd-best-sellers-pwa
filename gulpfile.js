var gulp =require('gulp');

gulp.task('gen-sw', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'build';

  swPrecache.write(`${rootDir}/service-worker.js`, {
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
    stripPrefix: rootDir
  }, callback);
});
