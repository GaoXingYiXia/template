let gulp = require('gulp');
let connect = require('gulp-connect');
let sass = require('gulp-sass-china');
//gulp.task() 创建gulp指令 在终端中执行
//gulp.src()  查找路径  
//local/**/*   local文件下所有文件  local/*.html local文件下.html所有文件 !local/*.html 除了
//gulp.pipe() 用来做连缀
//gulp.dest() 转存文件指令
//connect.reload() 自动刷新

gulp.task('hello',()=>{
    console.log('hello world')
})
gulp.task('index',()=>{ 
    return gulp
      .src(["local/index.html"])
      .pipe(gulp.dest("dist"))
      .pipe(connect.reload());
})
gulp.task('html', () => {
    return gulp
        .src(["local/*.html"])
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
})

gulp.task('watch',()=>{
    gulp.watch('local/index.html', ['index']);
    gulp.watch('local/*.html', ['html']);
    gulp.watch("local/sass/*.scss", ["sass"]);

})


gulp.task('myServer', ()=>{
    connect.server({
        root: 'dist',
        port: 8888,
        livereload: true
    });
});

gulp.task('default', ['myServer','watch'])

gulp.task("sass", () => {
    return gulp.src("local/sass/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
})
