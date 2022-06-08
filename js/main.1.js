// {/* <script src="js/libs/jquery.js"></script>
//     <script src="js/jquery.banner.3.0.js"></script>
//     <script src="js/jquery.nav.2.0.js"></script>
//     <script src="js/Ajax.js"></script>
//     <script src="js/main.js"></script> */}



require(["./libs/jquery","./libs/jquery.banner.3.1", "./libs/jquery.nav.2.1"], function (_,banner,nav) {
        // console.log(banner);   	
    	banner.init({
            self: $(".banner_md"),//输入清除定时器的hover元素节点
            items: $(".banner_md .imgbox").children("img"),
            left: $(".banner_md #prev"),
            right: $(".banner_md #next"),
            list: $(".banner_md .list").children("li"),
            autoPlay: true,
            delayTime: 1800,
            timer: 500
        })    
         
        


        $.ajax({
            url: "php/create.php",
            beforeSend: function () {
                var str = '';
                var str1 = '';
                var str2 = '';
                for (var i = 0; i < 9; i++) {
                    if (i < 4) {
                        str += `<div class="input">
									<a>
										请连接服务器... 修改php文件 密码
									</a>
								</div>`
                    }
                    if (i >= 4 && i < 8) {
                        str1 += `<div class="input1">
									<a>
										请连接服务器... 修改php文件 密码
									</a>
								</div>`
                    }
                    if (i >= 8 && i < 9) {
                        str2 += ` <a>请连接服务器... 修改php文件 密码</a>`
                    }
                }

                for (var k = 0; k < document.querySelectorAll(".news_md_top").length; k++) {
                    document.querySelectorAll(".news_md_top")[k].innerHTML = str;
                    document.querySelectorAll(".news_md_bottom")[k].innerHTML = str1;
                    document.querySelectorAll(".news_right")[k].innerHTML = str2;
                }

            },
            //判断josn数据
            dataType: 'json',
        }).then(function (res) {
            //					 console.log(res)
            var str = '';
            var str1 = '';
            var str2 = '';

            for (var i = 0; i < res.length; i++) {
                if (i < 4) {
                    str += `<div class="input ajax" goodsid = ${i}> 
											<a>
												<span class="name"><strong>${res[i].name}</strong></span>
												<span class="red">${res[i].weixin}</span>
												<span>${res[i].qb}</span>
												<img class="img" src="${res[i].img}">
											</a>
										</div>`
                }

                if (i >= 4 && i < 8) {

                    str1 += `<div class="input1 ajax" goodsid = ${i}>
											<a>
												<img class="img" src="${res[i].img}">
												<div>
													<span class="name"><strong>${res[i].name}</strong></span>
													<span class="red">${res[i].weixin}</span>
													<span>${res[i].qb}</span>
												</div>
											</a>
										</div>`
                }
                if (i >= 8 && i < 13) {

                    str2 += `<dd goodsid = ${i} class="ajax">
												<i class="top_bg2">${res[i].ranking}</i>
												<div class="txt">
													<p>
														<a>${res[i].name}</a>
													</p>
													<p class="red">
														<b>${res[i].qb}</b>
													</p>
												</div>
												<a>
													<img src="${res[i].img}">
												</a>					
											</dd>`
                }


            }
            for (var k = 0; k < document.querySelectorAll(".news_md_top").length; k++) {
                document.querySelectorAll(".news_md_top")[k].innerHTML = str;
                document.querySelectorAll(".news_md_bottom")[k].innerHTML = str1;
                document.querySelectorAll(".news_right")[k].innerHTML = str2;



            }

            $('.ajax').on('click', function () {
                var goodsid = parseInt($(this).attr("goodsid")) + 1
                //										console.log(goodsid)
                var goods = {
                    "user": getCookie('name'),
                    "goodsid": goodsid
                }
                $.ajax({
                    type: "get",
                    url: "php/car.php",
                    data: goods,

                    dataType: 'json',
                    success: function (res0) {
                        $(".nav_right .nav_right2").html(res0.length);
                    }
                })
            })



            $.ajax({
                type: "get",
                url: "php/car.php",
                data: {
                    "user": getCookie('name')
                },
                dataType: 'json',
                success: function (res0) {
                    var str5 = '';
                    $(".nav_right .nav_right2").html(res0.length);
                    for (var i = 0; i < res0.length; i++) {
                        $.ajax({
                            type: 'get',
                            url: "php/show.php",
                            data: {
                                "goodsid": res0[i].goodsid,
                                "id": res0[i].id
                            },
                            dataType: 'json',
                            success: function (res1) {
                                str5 += `<tr id="${res1[0].goodsid}product${res1[0].id}">
															    <td class="cart_td_1"><input name="cartCheckBox" type="checkbox" value="${res1[0].goodsid}product${res1[0].id}" onclick="selectSingle()" /></td>
															    <td class="cart_td_2"><img src="${res1[0].img}" alt="shopping"/></td>
															    <td class="cart_td_3"><a href="#">${res1[0].name}</a><br />
															    <td class="cart_td_4">${res1[0].weixin}</td>
															    <td class="cart_td_5">${res1[0].qb}</td>
															    <td class="cart_td_6"><img src="images/taobao_minus.jpg" alt="minus" onclick="changeNum('num_1','minus')" class="hand"/> <input id="num_1" type="text"  value="1" class="num_input" readonly="readonly"/> <img src="images/taobao_adding.jpg" alt="add" onclick="changeNum('num_1','add')"  class="hand"/></td>
															    <td class="cart_td_8"><a href="javascript:deletegoods('${res1[0].goodsid}product${res1[0].id}');">删除</a></td>
															  </tr>`

                                $('#car').html(str5);


                            }
                        })
                    }
                }
            })

        })


        //	<div>
        //	<a>
        //		<span><strong>${res1[0].name}</strong></span>
        //		<span>${res1[0].weixin}</span>
        //		<span>${res1[0].qb}</span>
        //		<img src="${res1[0].img}">
        //	</a>
        //</div>			

        //			getCookie('name') && getCookie('password')

        //				console.log(getCookie('name'))

        var user = {
            "user": getCookie('name'),
            "password": getCookie('password')
        }
        //				console.log(user)					
        $.ajax({
                url: "php/user.php",
                type: "post",
                data: user,
                dataType: "text",
            })
            .then(function (res) {
                //					console.log(res)
            })




            //*-----------------------------加载头部---------------------------------*/
            $('header').load('top_footer.html .top,.logo,.nav1', function () {
                //导航条
                // $.nav($('.nav_md'))
                nav.init($('.nav_md'))

                //论坛+微博
                $('.myposition').hover(function () {
                    $(this).find('div').css({
                        display: 'block'
                    })
                }, function () {
                    $(this).find('div').css({
                        display: 'none'
                    })
                })


                //游戏导航
                $('.Navigation').hover(function () {
                    $('.box').css({
                        display: 'block'
                    })
                }, function () {
                    $('.box').css({
                        display: 'none'
                    })
                })
                //搜索框
                $('.search_list').hover(function () {
                    $('.search_bottom').css({
                        display: 'block'
                    })
                    $('.choose span').css({
                        backgroundPosition: '-20px -15px'
                    })
                }, function () {
                    $('.search_bottom').css({
                        display: 'none'
                    })
                    $('.choose span').css({
                        backgroundPosition: '0px -15px'
                    })
                })

                //游戏分类
                $('.dl').hover(function () {
                    $(this).children('.first').nextUntil('.end').css({
                        display: 'block'
                    })
                    $(this).children('.first').css({
                        background: '#fff',
                        color: '#333',
                        cursor: 'pointer'

                    })
                }, function () {
                    $('.dl .first').nextUntil('.end').css({
                        display: 'none'
                    })
                    $(this).children('.first').css({
                        background: '#f74a4a',
                        color: '#fff'
                    })
                })








            });


            //*-----------------------------尾部---------------------------------*/
            $('footer').load('top_footer.html .footer');


            //*-----------------------------加载尾部图片---------------------------------*/
            $('.main .imgs').load('top_footer.html #imgs');


            

          var ydtime= setTimeout(() => {          
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
                clearTimeout(ydtime);
            }, 30);

            

    });


            