<?php

mb_internal_encoding("utf-8");
$pdo = new PDO("mysql:dbname=lesson02;host=localhost;","root","root");

$pdo -> exec("insert into keijiban(handlename,title,comments)
values('".$_POST['handlename']."','".$_POST['title']."','".$_POST['comments']."');");

header("Location:http://localhost/keijiban/index.php");

?>