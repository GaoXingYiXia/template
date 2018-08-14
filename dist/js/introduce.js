//加载nav渲染效果
var mynav = setTimeout(() => {
    $(".nav_left").hover(function () {
        $(".nav_left").css({
            background: "#eb4c4c"
        }).children(".nav_init").css({
            display: "block"
        }).end().children('a').css({
            color: " #ff9191"
        })
    }, function () {
        $(".nav_left").css({
            background: " #3a3f4a"
        }).children(".nav_init").css({
            display: "none"
        }).end().children('a').css({
            color: "#acb1bb"
        })
    })
    clearTimeout(mynav)
}, 10);


window.onload = function () {


}
