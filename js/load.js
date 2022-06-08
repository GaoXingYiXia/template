     //*-----------------------------加载头部---------------------------------*/






     /*-----------------------------加载登录框 及js代码---------------------------------*/

     //	获取元素对象	
     $('.denglu').load('top_footer.html .weizi', function () {
         //当加载完后，才能实时获取当前页面的总体高度 + 并体现拖拽效果
         $('.weizi').css({
             height: $('header').outerHeight() + $('footer').outerHeight() + $('.main').outerHeight()
         })

         // $('input[type=checkbox]')
         var dialogDrag = document.getElementById("dialogDrag")
         var dialogMove = document.getElementById("dialogMove")
         var clientW = document.documentElement.clientWidth;
         var clientH = document.documentElement.clientHeight; //获取屏幕宽高

         myEvent.add(dialogDrag, 'mousedown', function (eve) {
             var e = eve || window.event
             //			console.log(e);
             var x1 = e.offsetX
             var y1 = e.offsetY

             dialogMove.onmousemove = function (eve) {
                 //onmousemove要加在document上
                 var e = eve || window.event

                 var l = e.clientX - x1;
                 var t = e.clientY - y1;
                 //				console.log(l,t)
                 if (l < 0) {
                     l = 0;
                 }
                 if (t < 0) {
                     t = 0;
                 }
                 if (l > clientW - dialogMove.offsetWidth) {
                     l = clientW - dialogMove.offsetWidth
                 }
                 if (t > clientH - dialogMove.offsetHeight) {
                     t = clientH - dialogMove.offsetHeight
                 }
                 dialogMove.style.left = l + "px";
                 dialogMove.style.top = t + "px";
             }

             document.onmouseup = function () {
                 dialogMove.onmousemove = null;

             }
         })
         // console.log($('input[type=checkbox]')[0]);

         //  7天免登录
         $('.ui-dialog-input-username')[0].value = getCookie('name')
         $('.ui-dialog-input-password')[0].value = getCookie('password')
         $('.ui-dialog-submit').on('click', function () {
             setCookie('name', $('.ui-dialog-input-username').val())
             setCookie('password', $('.ui-dialog-input-password').val())
             if ($('input[type=checkbox]')[0].checked == true) {
                 setCookie('name', $('.ui-dialog-input-username').val(), 7)
                 setCookie('password', $('.ui-dialog-input-password').val(), 7)
             }

         })


         if (getCookie('name') && getCookie('password')) {
             hideDialog();
             $('.top .top_right').children('li').eq(0).html(getCookie('name') + '<span>已登录</span> <a href="javascript:tuichu();">退出登录</a>')
             $('.banner_right .asidetop .gray').html(getCookie('name') + '<span>已登录</span> <a href="javascript:tuichu();">退出登录</a>')
             $('.container .main_top .main_news_body .number1 #mydenglu').html(getCookie('name') + '<span>已登录</span> <a href="javascript:tuichu();">退出登录</a>')


         }

         
         
        });
        //	重新调整对话框的位置和遮罩，并且展现
        function showDialog() {
            $('#dialogMove').css({
                display: "block"
            })
            $('#mask').css({
                display: "block"
            })
            $('.weizi').css({
                zIndex: 10000
            })
        }
        //	关闭对话框
        function hideDialog() {
            $('#dialogMove').css({
                display: "none",
            })
            $('#mask').css({
                display: "none"
            })
            $('.weizi').css({
                zIndex: -1000
            })

        }

        //登录
        function Login() {
            $('#dialogMove').css({
                display: "none",
            })
            $('#mask').css({
                display: "none",
            })
            $('.weizi').css({
                zIndex: -1000
            })
            if ($('.ui-dialog-input-username')[0].value && $('.ui-dialog-input-password')[0].value) {
                $('.top .top_right').children('li').eq(0).html($('.ui-dialog-input-username')[0].value + '<span>已登录</span> <a href="javascript:tuichu();">退出登录</a>')
                $('.banner_right .asidetop .gray').html($('.ui-dialog-input-username')[0].value + '<span>已登录</span> <a href="javascript:tuichu();">退出登录</a>')

                $('.container .main_top .main_news_body .number1 #mydenglu').html($('.ui-dialog-input-username')[0].value + '<span>已登录</span> <a href="javascript:tuichu();">退出登录</a>')

            } else {
                alert('账户或密码不正确');
            }

        }

        //退出登录
        function tuichu() {
            removeCookie('name');
            removeCookie('password');
            $('.top .top_right').children('li').eq(0).html('<span>您还未登录,请</span> <a href="javascript:showDialog();">登录</a>')
            $('.banner_right .asidetop .gray').html('您还未登录哦，<a href="javascript:showDialog();" class="blue">立即登录</a>购买超值商品！')
            $('.container .main_top .main_news_body .number1 #mydenglu').html('亲爱的用户，请<a href="javascript:showDialog();">【登录】</a>')


        }

        function zhuceInterface() {
            $('#dialogMove .zhuce').css({
                display: "block"
            })
            $('#dialogMove .ui-dialog-content').css({
                display: "none"
            })
        }

        function LoginInterface() {
            $('#dialogMove .zhuce').css({
                display: "none"
            })
            $('#dialogMove .ui-dialog-content').css({
                display: "block"
            })
        }

        function zhuce() {
            $.ajax({
                url: "http://datainfo.duapp.com/shopdata/userinfo.php",
                data: {
                    status: "register",
                    userID: $("#dialogMove .zhuce .zhuce-name").val(),
                    password: $("#dialogMove .zhuce .zhuce-password").val()
                },
                success: function (a) {

                    switch (a) {
                        case "0":
                            $("#dialogMove .zhuce #zhuce-name").html("用户名重名");
                            break;
                        case "1":
                            $("#dialogMove .zhuce #zhuce-name").html("注册成功，3秒后跳转登录页面");
                            setTimeout(function () {
                                LoginInterface();
                            }, 3000)
                            break;
                        case "2":
                            $("#dialogMove .zhuce #zhuce-name").html("我的服务器都被你搞坏了，你要陪！");
                            break;
                    }
                }
            })
            if ($("#dialogMove .zhuce .zhuce-password").val() != $("#dialogMove .zhuce .zhuce-password2").val()) {
                $("#dialogMove .zhuce #zhuce-password").html('请输入正确的密码')
            }
        }
        //默认设置弹出层启动
        showDialog();

