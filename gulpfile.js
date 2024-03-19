const { src, dest, watch, series } = require('gulp')
const sass = require ("gulp-sass")(require('sass'))

//Compile the SASS into normal css
function buildStyles (){
    //Instead of index.sccs insert *.scss so this will look for all the documents with .scss, this is for multiple sass files,
    // in this case it will look for all the files at the folder or subfolder with a sass file inside
    return src('shinobi/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

//Watcher function for our source sass file every time we make a change it will automatically reload

function watchTask(){
    watch(['shinobi/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)