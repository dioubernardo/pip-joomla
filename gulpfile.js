var gulp = require('gulp');
var run = require('run-sequence');
var del = require('del');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var zip = require('gulp-zip');
var newfile = require('gulp-file');
var fs = require('fs');

var project = require('./package.json')

gulp.task('build:clean', function(){
	return del('build/portalidentidadepadrao');
});

gulp.task('build:copy', function(){
	return gulp.src(['src/**/*', '!src/less'])
		.pipe(gulp.dest('build/portalidentidadepadrao'))
});

gulp.task('build:less', function(){
	return gulp.src(['./src/less/*.less', '!./src/less/_*.less'])
		.pipe(less())
		.pipe(cleanCSS({compatibility: 'ie7'}))
		.pipe(gulp.dest('build/portalidentidadepadrao/css/'));
});

gulp.task('build:updatexmlversion', function(){
	var contents = fs.readFileSync('build/portalidentidadepadrao/templateDetails.xml').toString();
	return fs.writeFile(
		'build/portalidentidadepadrao/templateDetails.xml',
		contents.replace(/<version>[0-9.]+<\/version>/, '<version>'+project.version+'</version>'),
		function(){}
	);
});

gulp.task('build:cleanoldzip', function(){
	return del('dist/portalidentidadepadrao-*.zip');
});

gulp.task('build:zip', function(){
	return gulp.src('build/**/*')
        .pipe(zip('portalidentidadepadrao-'+project.version+'.zip'))
        .pipe(gulp.dest('dist'))
});

gulp.task('build:createxml', function(){
	var xml = 
		'<?xml version="1.0" encoding="UTF-8"?>'+
		'<updates><update>'+
			'<name>portalidentidadepadrao</name>'+
			'<element>portalidentidadepadrao</element>'+
			'<type>template</type>'+
			'<client>0</client>'+
			'<version>'+project.version+'</version>'+
			'<downloads><downloadurl type="full" format="zip">https://github.com/dioubernardo/pip-joomla/raw/master/dist/portalidentidadepadrao-'+project.version+'.zip</downloadurl></downloads>'+
			'<targetplatform name="joomla" version="3.[0123456789]"/>'+
			'<tags><tag>stable</tag></tags>'+
		'</update></updates>';
		
	return newfile('portalidentidadepadrao.xml', xml)
		.pipe(gulp.dest('dist'));
});

gulp.task('build', function(callback){
	run(
		'build:clean',
		['build:copy', 'build:less'],
		'build:updatexmlversion',
		'build:cleanoldzip',
		['build:zip', 'build:createxml'],
		callback
	);
});

gulp.task('default', ['build']);
