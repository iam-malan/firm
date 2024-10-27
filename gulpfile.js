const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const webpack = require('webpack-stream');
const path = require('path');

// Compile SCSS to CSS
function styles() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: ['node_modules']
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

// Bundle TypeScript files
function scripts() {
    return gulp.src('src/js/main.ts')
        .pipe(webpack({
            mode: 'development',
            devtool: 'source-map',
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        use: 'ts-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader']
                    }
                ]
            },
            resolve: {
                extensions: ['.tsx', '.ts', '.js'],
                modules: ['node_modules'],
                alias: {
                    'swiper/css': path.resolve(__dirname, 'node_modules/swiper/swiper.min.css'),
                    'swiper/css/bundle': path.resolve(__dirname, 'node_modules/swiper/swiper-bundle.min.css'),
                    'swiper/modules/navigation/navigation.min.css': path.resolve(__dirname, 'node_modules/swiper/modules/navigation/navigation.min.css'),
                    'swiper/modules/pagination/pagination.min.css': path.resolve(__dirname, 'node_modules/swiper/modules/pagination/pagination.min.css')
                }
            },
            output: {
                filename: 'bundle.js'
            }
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
}

// Watch files
function watch() {
    browserSync.init({
        server: {
            baseDir: './',
            routes: {
                '/node_modules': 'node_modules'
            }
        },
        port: 3000,
        open: true,
        notify: false
    });

    gulp.watch('src/scss/**/*.scss', styles);
    gulp.watch('src/js/**/*.ts', scripts);
    gulp.watch(['*.html', 'src/images/**/*', 'src/videos/**/*']).on('change', browserSync.reload);
}

// Define tasks
const build = gulp.parallel(styles, scripts);
const dev = gulp.series(build, watch);

// Export tasks
exports.styles = styles;
exports.scripts = scripts;
exports.build = build;
exports.dev = dev;
exports.default = dev;
