// JavaScript Document



/*改变所购商品的数量*/
function changeNum(numId,flag){/*numId表示对应商品数量的文本框ID，flag表示是增加还是减少商品数量*/
	var numId=document.getElementById(numId);
	if(flag=="minus"){/*减少商品数量*/
		if(numId.value<=1){
			alert("宝贝数量必须是大于0");
			return false;
			}
		else{
			numId.value=parseInt(numId.value)-1;			
			}
		}
	else{/*flag为add，增加商品数量*/
		numId.value=parseInt(numId.value)+1;		
		}
	}
	

/*复选框全选或全不选效果*/
function selectAll(){
	var oInput=document.getElementsByName("cartCheckBox");
 for (var i=0;i<oInput.length;i++){
 	    oInput[i].checked=document.getElementById("allCheckBox").checked;
	}
}
	
/*根据单个复选框的选择情况确定全选复选框是否被选中*/
function selectSingle(){
	var k=0;
	var oInput=document.getElementsByName("cartCheckBox");
	 for (var i=0;i<oInput.length;i++){
	   if(oInput[i].checked==false){
		  k=1;
		  break;
	    }
	}
	if(k==0){
		document.getElementById("allCheckBox").checked=true;
		}
	else{
		document.getElementById("allCheckBox").checked=false;
		}
}


/*删除单行商品*/

	function deletegoods(goodsid){
		var deletegoods=document.getElementById(goodsid) //获取当前元素
		var id =goodsid.split('duct')[1]
		
		deletegoods.parentNode.removeChild(deletegoods);
		$.ajax({
				url: "php/delete.php",
				type: "post",
				data: {
					"id":id,
					"user":getCookie('name')
				},
				dataType: "text",			
		})
		
	}	



/*删除选中行的商品*/
function deleteSelectRow(){
	var oInput=document.getElementsByName("cartCheckBox");
	var Index;
	 for (var i=oInput.length-1;i>=0;i--){
	   if(oInput[i].checked==true){
			CheckBox=document.getElementById(oInput[i].value);/*获取当前元素*/
			var id =oInput[i].value.split('duct')[1];
			CheckBox.parentNode.removeChild(CheckBox);
			$.ajax({
				url: "php/delete.php",
				type: "post",
				data: {
					"id":id,
					"user":getCookie('name')
				},
				dataType: "text",			
			})			
	    }
	}
}

