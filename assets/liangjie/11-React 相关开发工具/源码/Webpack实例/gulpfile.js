var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('jsx', function() {
	browserify({
		entries: ['./app.jsx'],
		transform: [reactify]
	})
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('./'));
});

gulp.task('default', ['jsx']);