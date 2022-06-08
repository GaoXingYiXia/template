;
(function ($) {
	"use strict";
	//	通过extend合并jquery对象实现全局方法
	$.extend({
		nav: function (ele) {
			ele.children(".col-2").hover(function () {
				$(this).children("ul").stop().slideDown(100)
				.end().siblings().children("ul").stop().slideUp(100)
				$(this).css({
					background:'#eb4c4c',
					height: '55px' ,
					borderBottom :'3px #ce3535 solid'
				})			
			}, function () {
				$(this).children("ul").stop().slideUp(100)
				ele.children(".col-2").css({
					background: '#3a3f4a ',
					height: '55px',
					borderBottom: 'none'
				})
			})
		}
	});

	//	通过extend合并jquery的fn对象实现局部方法
	//	$.fn.extend({
	//		nav:function(){
	//			this.children("ul").children("li").hover(function(){
	//				$(this).children("ul").stop().slideDown(100)
	//				.end().siblings().children("ul").stop().slideUp(100)
	//			},function(){
	//				$(this).children("ul").stop().slideUp(100)
	//			})
	//		}
	//	});

	//	直接给jquery添加自定属性实现全局方法
	//	$.nav = function(ele){
	//		ele.children("ul").children("li").hover(function(){
	//			$(this).children("ul").stop().slideDown(100)
	//			.end().siblings().children("ul").stop().slideUp(100)
	//		},function(){
	//			$(this).children("ul").stop().slideUp(100)
	//		})
	//	}

	//	直接给jquery的fn对象添加自定属性实现局部方法
	//	$.fn.nav = function(){
	//		this.children("ul").children("li").hover(function(){
	//			$(this).children("ul").stop().slideDown(100)
	//			.end().siblings().children("ul").stop().slideUp(100)
	//		},function(){
	//			$(this).children("ul").stop().slideUp(100)
	//		})
	//	}

})(jQuery);
