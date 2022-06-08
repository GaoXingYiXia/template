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
	//中括号
	$user = $_REQUEST['user'];
	$password = $_REQUEST['password'];



	//创建用户表
    if(!mysql_query('show columns from name')) {
        $query = 'create table name(
            user varchar(300) primary key,
            password varchar(300),
            goodsid varchar(300),
            id varchar(300))';
        mysql_query($query);
    }
	

	if($user&&$password){
		$mysql = "INSERT name(user,password) VALUES('".$user."','".$password."')";
		$query = mysql_query($mysql);
	}
	
	
   echo 1;
?>