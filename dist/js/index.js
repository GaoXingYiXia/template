


         
        //网页加载完之后渲染
window.onload =function(){
//banner
// //判断是否存在 .banner_md
    if (typeof $(".banner_md") == "object" && $(".banner_md").length != 0) {
        $(".banner_md").banner({
            items: $(".banner_md .imgbox").children("img"),
            left: $(".banner_md #prev"),
            right: $(".banner_md #next"),
            list: $(".banner_md .list").children("li"),
            autoPlay: true,
            delayTime: 1800,
            timer: 500
        })  
    }  
                                        
    //news 中右移效果
    $('.lol .input').hover(function () {
        $('.lol .input').find('a').stop().animate({
            left: '0px'
        }).eq($(this).index()).stop().animate({
            left: '15px'
        })
    }, function () {
        $('.lol .input').find('a').stop().animate({
            left: '0px'
        })
    })

    $('.cf .input').hover(function () {
        $('.cf .input').find('a').stop().animate({
            left: '0px'
        }).eq($(this).index()).stop().animate({
            left: '15px'
        })
    }, function () {
        $('.cf .input').find('a').stop().animate({
            left: '0px'
        })
    })


    $('.Blade .input').hover(function () {
        $('.Blade .input').find('a').stop().animate({
            left: '0px'
        }).eq($(this).index()).stop().animate({
            left: '15px'
        })
    }, function () {
        $('.Blade .input').find('a').stop().animate({
            left: '0px'
        })
    })


    $('.Dragon .input').hover(function () {
        $('.Dragon .input').find('a').stop().animate({
            left: '0px'
        }).eq($(this).index()).stop().animate({
            left: '15px'
        })
    }, function () {
        $('.Dragon .input').find('a').stop().animate({
            left: '0px'
        })
    })

    //news侧边栏——更换第一张图片的class样式
    
    for (var j = 0; j < 4; j++) {
        $('.news_right').eq(j).children('dd')
            .eq(0).addClass('news_right_top').children('i').removeClass('top_bg2').addClass('top_bg')
            .end().children('a').children('img').addClass('img1')
    }

    
} 



//   setTimeout(() => {
//        //导航条
//        $.nav($('.nav_md'))

//        //论坛+微博
//        $('.myposition').hover(function () {
//            $(this).find('div').css({
//                display: 'block'
//            })
//        }, function () {
//            $(this).find('div').css({
//                display: 'none'
//            })
//        })


//        //游戏导航
//        $('.Navigation').hover(function () {
//            $('.box').css({
//                display: 'block'
//            })
//        }, function () {
//            $('.box').css({
//                display: 'none'
//            })
//        })
//        //搜索框
//        $('.search_list').hover(function () {
//            $('.search_bottom').css({
//                display: 'block'
//            })
//            $('.choose span').css({
//                backgroundPosition: '-20px -15px'
//            })
//        }, function () {
//            $('.search_bottom').css({
//                display: 'none'
//            })
//            $('.choose span').css({
//                backgroundPosition: '0px -15px'
//            })
//        })

//        //游戏分类
//        $('.dl').hover(function () {
//            $(this).children('.first').nextUntil('.end').css({
//                display: 'block'
//            })
//            $(this).children('.first').css({
//                background: '#fff',
//                color: '#333',
//                cursor: 'pointer'

//            })
//        }, function () {
//            $('.dl .first').nextUntil('.end').css({
//                display: 'none'
//            })
//            $(this).children('.first').css({
//                background: '#f74a4a',
//                color: '#fff'
//            })
//        })
 
//   }, 10);              


                
                
        
                
                
                
                
                
                
                
                
                
       

            
        
            
  


        