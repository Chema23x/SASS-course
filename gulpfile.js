const { src, dest, watch, series } = require('gulp')
const sass = require ("gulp-sass")(require('sass'))

//Compile the SASS into normal css
function buildStyles (){
    return src('index.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

//Watcher function for our source sass file every time we make a change it will automatically reload

function watchTask(){
    watch(['index.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)