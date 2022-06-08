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
	
	

	$goodsid =$_GET['goodsid'];
	$id =$_GET['id'];
	


	//获取各个商品码的商品		
		$mysql3 = "SELECT * FROM goods WHERE goodsid=".$goodsid;	
		$query3 = mysql_query($mysql3);	
		
	
	$data1 = array();
	class User 
	{
		public $id;	
		public $goodsid;
		public $img;
		public $name;
		public $weixin;
		public $ranking;
		public $qb;
	}
		
	while($obj = mysql_fetch_assoc($query3)){
		$user = new User();
		$user->id = $id;
		$user->goodsid = $obj["goodsid"];
		$user->img = $obj["img"];
		$user->name = $obj["name"];
		$user->weixin = $obj["weixin"];
		$user->ranking = $obj["ranking"];
		$user->qb = $obj["qb"];
		$data1[]=$user;		 		
	}
	echo  json_encode($data1);
	
		
	
	
	
	

	//	$goodsid =$_GET['goodsid'];		
//	$mysql3 ="SELECT goodsid,img,name,weixin,ranking,qb FROM goods");	
?>