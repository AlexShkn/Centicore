
export const video = () => {
	return app.gulp.src('./src/img/video/**/*')
		.pipe(app.gulp.dest('./dist/img/video/'));
}

// gulp.src('app/fonts/**/*')
// 	.pipe(gulp.dest('dist/fonts'))