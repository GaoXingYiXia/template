<?php
	header("Content-Type: text/html;charset=utf-8");
	$link = @mysql_connect("localhost:3306","root","123");
	if(!$link){
		echo mysql_error();
	}
	$sel = mysql_select_db("data");
	if(!$sel){
		echo mysql_error();
	}
	$utf = mysql_query("set names utf8");
	if(!$utf){
		echo mysql_error();
	}
		
	$goodsid = @$_GET['goodsid'];
	$user =@$_GET['user'];
	
	//创建购物车数据表
	if(!mysql_query('show columns from '.$user.'car')) {
	$query = 'create table '.$user.'car(
		id int unsigned auto_increment primary key,
	    goodsid varchar(300))';
	    @mysql_query($query);
	}
		
	if($goodsid){
		$mysql = "INSERT ".$user."car(goodsid) VALUES('".$goodsid."')";
		@mysql_query($mysql);
	}
	
	
	$mysql3 = "SELECT id,goodsid FROM ".$user."car";
	$query3 = mysql_query($mysql3);	
	
	$data3 = array();
	class User 
	{		
		public $goodsid;

	}	
	while($obj = mysql_fetch_assoc($query3)){
		$user = new User();
		$user->id = $obj["id"];
		$user->goodsid = $obj["goodsid"];
		$data3[]=$user;		 		
	}
	echo json_encode($data3);	
	

	
	
?>
