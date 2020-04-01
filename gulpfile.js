const { task, watch, parallel } = require('gulp');
var browserSync = require('browser-sync').create();

function watchHtml () {
    console.log(435);
    watch('./*.html', watchHtml);
    browserSync.reload();
}

function browser() {
  browserSync.init({
        server: {
            baseDir: './',
            directory: true
        },
        port: 7890
    });
};

exports.dev = parallel(browser, watchHtml);