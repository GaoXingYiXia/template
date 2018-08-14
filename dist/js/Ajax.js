

			$.ajax({
					url: "php/create.php",
					beforeSend:function(){
						var str = '';
						var str1 = '';
						var str2= '';
						for (var i = 0; i < 9; i++) {
							if (i<4) {
								str += `<div class="input">
									<a>
										请连接服务器... 修改php文件 密码
									</a>
								</div>`
							}
							if(i>=4&&i<8){
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
						var str ='';				
						var str1 ='';
						var str2 ='';

						for (var i =0 ; i < res.length; i++){
								if (i<4) {
								str +=`<div class="input ajax" goodsid = ${i}> 
											<a>
												<span class="name"><strong>${res[i].name}</strong></span>
												<span class="red">${res[i].weixin}</span>
												<span>${res[i].qb}</span>
												<img class="img" src="${res[i].img}">
											</a>
										</div>`
									}
									
								if(i>=4 && i<8){
										
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
									
							$('.ajax').on('click',function(){
								var goodsid =parseInt($(this).attr("goodsid"))+1
//										console.log(goodsid)
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
							
							
							
							$.ajax({
									type:"get",
									url:"php/car.php",
									data:{"user":getCookie('name')},									
									dataType: 'json',
									success:function(res0){										
										var str5 ='';
										$(".nav_right .nav_right2").html(res0.length);																		
										for (var i =0 ; i < res0.length; i++) {											
											$.ajax({
												type:'get',
												url:"php/show.php",
												data:{
													"goodsid":res0[i].goodsid,
													"id":res0[i].id
												},
												dataType: 'json',
												success:function(res1){	
													str5 +=`<tr id="${res1[0].goodsid}product${res1[0].id}">
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

				var user ={
						"user":getCookie('name'),
						"password":getCookie('password')
				}				
//				console.log(user)					
				$.ajax({
					url: "php/user.php",
					type: "post",
					data: user,
					dataType: "text",			
				})
				.then(function(res){
//					console.log(res)
				})
				
				
				



					
			
			












							
