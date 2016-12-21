var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    flatten = require('gulp-flatten'),
    Promise = require('es6-promise');
	
//Wszystko powyżej to załączanie dodatków do gulpa takich jak np "gulp-sass"
//są one wypisane w pliku package.json

gulp.task('appcss', function () {	//definicja taska kompilującego sass
    return gulp.src('css/sass/**/*.scss')	//wzorzec plików ktore mają być skompilowane (pliki z rozszerzeniem *.scss ze wszystkich podfolderów i folderu Content/app)
        .pipe(sass().on('error', sass.logError))	
        .pipe(autoprefixer({ browsers: ['last 3 versions'] }))
        .pipe(flatten())
        .pipe(gulp.dest('css'));	//ścieżka gdzie zapisać wynik taska czyli skompilowane pliki css
});

gulp.task('minifycss', ['appcss'], function () {	//definicja taska minifikującego css
    return gulp.src(['css/*.css', '!css/*.min.css'])
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css'));	//ścieżka gdzie zapisać wynik taska czyli zminifikowane pliki css
});

gulp.task('watchappcss', function () {	//definicja taska typu watch który sprawdza uruchamia się gdy zajdą jakieś zmiany w plikach pasujących do podanego wzorca
    return gulp.watch('css/sass/**/*.scss', ['appcss', 'minifycss']);	//czyli wszystkie pliki z rozszerzeniem *.scss ze wszystkich podfolderów i folderu Content/app
});