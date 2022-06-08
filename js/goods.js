
//加载nav渲染效果
var mynav =setTimeout(() => {
    $(".nav_left").hover(function(){
        $(".nav_left").css({
            background: "#eb4c4c"
        }).children(".nav_init").css({
            display:"block"
        }).end().children('a').css({
            color:" #ff9191"
        })
    },function(){
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

    $(".main_news_body .btn1").on('click', function () {
        console.log(1)
        $(this).css({
            display:"none"
        })
        $(".main_news_top").stop().animate({
            height: '170px'
        })
        $('.btn2').css({
            display:"block"
        })
    })
    $(".main_news_body .btn2").on('click', function () {
        console.log(1)
        $(this).css({
            display: "none"
        })
        $(".main_news_top").stop().animate({
            height: '382px'
        })
        $('.btn1').css({
            display: "block"
        })
    })

//中奖循环
    var lg = ($(".prize").children('li').length-2 )* $(".prize").children('li')[0].offsetHeight;
    var speed =$(".prize").children('li')[0].offsetHeight;
    var str =0;
    
    setInterval(function() {
        var time =setTimeout(function() {
            if(str >=lg){
                str =0;
            }else{
                str +=speed;
                clearTimeout(time);             
            }
            $(".main_news_footer .prize").stop().animate({
                marginTop: "-" + str + "px"
            })          
        }, 100);

    }, 2000);


    //goods.html  Ajax模拟
    var str3 = "";
    for (var i = 0; i < 15; i++) {
        str3 += `<li>
                <span>
                    <img src="./images/2-37005-9.png" width="266" height="110" alt="">
                </span>
                <p class="bou_nam">电玩女神 娑娜（7天）</p>
                <div class="exchange">
                    <div class="box">
                        <div class="luck-cn">
                            <i class="luck-btn">兑换</i>
                        </div>
                        <p class="judo-num">
                            <span>45</span>聚豆</p>
                    </div>
                    <a href="javascript:;" class="ex-btn ajax1" goodsid ="14">加入购物车</a>  
                </div>
                </li>`

    }
    document.querySelector(".main_footer ul").innerHTML = str3;
     
    $('.ajax1').on('click',function(){
    		var goodsid =parseInt($(this).attr("goodsid"))+1
    		var goods ={
    				"user":getCookie('name'),
    				"goodsid":goodsid
    		}	
    		$.ajax({
    			type:"get",
    			url:"php/car.php",
    			data:goods,
			
    			dataType: 'json',
    			success:function(res0){
    				$(".nav_right .nav_right2").html(res0.length);	
    			}	
    		})
    	})    
    

}    
	


        









