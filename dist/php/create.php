<?php
	header("Content-Type: text/html;charset=utf-8");
	$link = @mysql_connect("localhost:3306","root","123");
	if(!$link){
		echo mysql_error();
	}
	$utf = mysql_query("set names utf8");
	if(!$utf){
		echo mysql_error();
	}
		
	//创建库
	if(!mysql_query('show database data')){
	    mysql_query('create database data character set utf8');
	}
	//使用库
    mysql_query('use data');
	
	//创建商品表
    if(!mysql_query('show columns from goods')) {
        $query = 'create table goods(
            goodsid varchar(300) primary key,
            img varchar(300),
            name varchar(300),
            weixin varchar(300),
            ranking varchar(300),
            qb varchar(300))';
        mysql_query($query);
    }    	
//	//创建用户表
//  if(!mysql_query('show columns from name')) {
//      $query = 'create table name(
//          user varchar(300) primary key,
//          password varchar(300),
//          goodsid varchar(300),
//          id varchar(300))';
//      mysql_query($query);
//  }
	
//  //创建购物车数据表
//  
//  if(!mysql_query("SELECT user FROM name")){
//	    if(!mysql_query('show columns from '.$user.'car')) {
//	        $query = 'create table '.$user.'car(
//	        	id int unsigned auto_increment primary key,
//	            goodsid varchar(300))';
//	        mysql_query($query);
//	    }
//
//	}
   


	$sel = mysql_select_db("data");
	if(!$sel){
		echo mysql_error();
	}



	
//将该数据输入到数据库
$json = '[
		{	"goodsid":"1",
			"name":"武神 贾克斯",
			"weixin":"微信价:<b>75.05 元</b>",
			"qb":"Q币价:79.00 QB",
			"img":"http://ossweb-img.qq.com/images/daoju/app/lol/rectangle/2-24013-9.jpg?_t=1516271286"
		},		{
			"goodsid":"2",
			"name":"源计划:净化 薇恩",
			"weixin":"微信价:<b>94.05 元</b>",
			"qb":"Q币价:99.00 QB",
			"img":"http://ossweb-img.qq.com/images/daoju/app/lol/rectangle/2-67011-9.jpg?_t=1511774756"
		},		{
			"goodsid":"3",
			"name":"源计划:升华 烬",
			"weixin":"微信价:<b>75.05 元</b>",
			"qb":"Q币价:79.00 QB",
			"img":"http://ossweb-img.qq.com/images/daoju/app/lol/rectangle/2-202004-9.jpg?_t=1511774880"
		},		{
			"goodsid":"4",
			"name":"源计划:裁决 蔚",
			"weixin":"微信价:<b>75.05 元</b>",
			"qb":"Q币价:79.00 QB",
			"img":"http://ossweb-img.qq.com/images/daoju/app/lol/rectangle/2-254011-9.jpg?_t=1511774997"
		},
				{
			"goodsid":"5",
			"name":"赛博潮流 佐伊",
			"weixin":"微信价:<b>65.55元</b>",
			"qb":"Q币价:69.00QB",
			"img":"http://ossweb-img.qq.com/images/daoju/app/lol/rectangle/2-142001-9.jpg?_t=1511775174"
		},		{
			"goodsid":"6",
			"name":"霸天猎手 雷恩加尔",
			"weixin":"微信价:<b>75.05元</b>",
			"qb":"Q币价:79.00 QB",
			"img":"http://ossweb-img.qq.com/images/daoju/app/lol/rectangle/2-107008-9.jpg?_t=1510647144"
		},		{
			"goodsid":"7",
			"name":"暮色枪骑 布里茨",
			"weixin":"微信价:<b>75.05 元</b>",
			"qb":"Q币价:79.00 QB",
			"img":"http://ossweb-img.qq.com/images/daoju/app/lol/rectangle/2-53020-9.jpg?_t=1510647277"
		},		{
			"goodsid":"8",
			"name":"银白枪骑 布里茨",
			"weixin":"微信价:<b>75.05 元</b>",
			"qb":"Q币价:79.00 QB",
			"img":"http://ossweb-img.qq.com/images/daoju/app/lol/rectangle/2-53021-9.jpg?_t=1510647321"
		},
					{
			"goodsid":"9",			
			"ranking":"排行01",
			"name":"未来战士 凯特琳",
			"weixin":"微信价:无",
			"qb":"99.00 QB",
			"img":"http://ossweb-img.qq.com/images/daoju/app/lol/rectangle/pkg-8150.jpg?_t=1495705094"
		},		{
			"goodsid":"10",
			"ranking":"02",
			"name":"源计划:雷",
			"weixin":"微信价:无",
			"qb":"79.00 QB",
			"img":"http://ossweb-img.qq.com/images/daoju/dbm/lol/236006.jpg"
		},		{
			"goodsid":"11",
			"ranking":"03",
			"name":"源计划:联合",
			"weixin":"微信价:无",
			"qb":"99.00 QB",
			"img":"http://ossweb-img.qq.com/images/daoju/dbm/lol/20160801_24071_7135.jpg"
		},		{
			"goodsid":"12",
			"ranking":"04",
			"name":"灌篮高手 德莱厄斯",
			"weixin":"微信价:无",
			"qb":"69.00 QB",
			"img":"http://ossweb-img.qq.com/images/daoju/mall/app/lol/122004.jpg"
		},{
			"goodsid":"13",
			"ranking":"05",
			"name":"腥红之月 亚索",
			"weixin":"微信价:无",
			"qb":"79.00 QB",
			"img":"http://ossweb-img.qq.com/images/daoju/dbm/lol/157003_190.jpg"
		},{
			"goodsid":"14",
			"name":"怨之砂 派克炫彩大礼包",
			"weixin":"微信价:<b>193.97元</b>",
			"qb":"Q币价:204.18QB",
			"img":"https://game.gtimg.cn/images/daoju/app/lol/big/pkg-12461.jpg"
		},{
			"goodsid":"15",
			"name":"电玩女神 娑娜（7天）",
			"weixin":"<b>45聚豆</b>",
			"qb":"Q币价:无",
			"img":"./images/2-37005-9.png"
		},{
			"goodsid":"16",
			"name":"钢铁意志 潘森1",
			"weixin":"无",
			"qb":"Q币价:22.50QB",
			"img":"./images/523.jpg"
		},{
			"goodsid":"17",
			"name":"钢铁意志 潘森2",
			"weixin":"无",
			"qb":"Q币价:22.50QB",
			"img":"./images/pkg-12461.jpg"
		},{
			"goodsid":"18",
			"name":"钢铁意志 潘森3",
			"weixin":"无",
			"qb":"Q币价:22.50QB",
			"img":"./images/1-555-9.jpg"
		},{
			"goodsid":"19",
			"name":"钢铁意志 潘森4",
			"weixin":"无",
			"qb":"Q币价:22.50QB",
			"img":"./images/2-555001-9.jpg"
		},{
			"goodsid":"20",
			"name":"钢铁意志 潘森5",
			"weixin":"无",
			"qb":"Q币价:22.50QB",
			"img":"./images/2-131012-9.jpg"
		},{
			"goodsid":"21",
			"name":"钢铁意志 潘森6",
			"weixin":"无",
			"qb":"Q币价:22.50QB",
			"img":"./images/2-8008-9.jpg"
		}
		]';
		
	$data = @ json_decode($json,true);
	$cb = @$_GET['cb'];
//	print_r($data) ;
//	echo sizeof($data); 数组长度	
	for ($i=0;$i<sizeof($data);$i++) {
		@mysql_query("insert into goods values('".$data[$i]['goodsid']."','".$data[$i]['img']."','".$data[$i]['name']."','".$data[$i]['weixin']."','".$data[$i]['ranking']."','".$data[$i]['qb']."')");
		
	}
	for($i=0;$i<count($data,0);$i++){
		@mysql_query("insert into goods values('".$data[$i]['goodsid']."','".$data[$i]['img']."','".$data[$i]['name']."','".$data[$i]['weixin']."','".$data[$i]['ranking']."','".$data[$i]['qb']."')");
	}	
		
	// $query3=mysql_query("SELECT goodsid,img,name,weixin,ranking,qb FROM goods");	
	
	// $data1 = array();
	// class User 
	// {		
	// 	public $goodsid;
	// 	public $img;
	// 	public $name;
	// 	public $weixin;
	// 	public $ranking;
	// 	public $qb;
	// }


	
	// while($obj = mysql_fetch_array($query3)){
	// 	$user = new User();
	// 	$user->goodsid = $obj["goodsid"];
	// 	$user->img = $obj["img"];
	// 	$user->name = $obj["name"];
	// 	$user->weixin = $obj["weixin"];
	// 	$user->ranking = $obj["ranking"];
	// 	$user->qb = $obj["qb"];
	// 	$data1[]=$user;		 		
	// }
	echo  json_encode($data);

?>
