var gulp = require('gulp');
var reactify = require('reactify');
var browserify = require('browserify');
var source = require("vinyl-source-stream");

gulp.task('default', function () {
    return browserify({
	    	entries: ['./app.jsx'],
	        transform: [reactify],
	    })
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./'));
});
