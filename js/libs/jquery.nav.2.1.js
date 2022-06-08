define([
	'./jquery'
], function() {
	'use strict';
	//	通过extend合并jquery对象实现局方法
	function Nav(){}
	
	Nav.prototype.init = function (ele) {
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

	return new Nav();
	

})
