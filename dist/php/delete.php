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
	
	
	$id = @$_REQUEST["id"];
	$user =@$_REQUEST["user"];
	
//	$mysql3 = "SELECT goodsid FROM ".$user."car";
//	$query3 = mysql_query($mysql3);	
		
	$mysql = "DELETE FROM ".$user."car WHERE id=".$id;
	$query = mysql_query($mysql);
	
	echo $id;
	


	
	
?>