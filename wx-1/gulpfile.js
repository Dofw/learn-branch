const gulp = require('gulp');
const px2rem = require('gulp-px2rem-plugin');
const rem2px =require('gulp-rem-to-px')
const {adapter: {adaptConf}} = require('./init/index')

gulp.task('default', function(done) {
  gulp.src('./weui/index.wxss')
      .pipe(rem2px({
        fontSize: 16
      }))
      .pipe(px2rem({
        width_design: adaptConf.designWidth,
        pieces: adaptConf.pieces,
      }))
      .pipe(gulp.dest('./weui/output'))
      .on('end', done)
});