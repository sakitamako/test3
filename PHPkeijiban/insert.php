<?php
    
if (!empty($_POST["handlename"]) && !empty($_POST["title"]) && !empty($_POST["comments"])) {
$handlename = htmlspecialchars($_POST["handlename"], ENT_QUOTES);
$title = htmlspecialchars($_POST["title"], ENT_QUOTES);
$comments = htmlspecialchars($_POST["comments"], ENT_QUOTES);

mb_internal_encoding("utf-8");
$pdo = new PDO("mysql:dbname=lesson01;host=localhost;","root","root");

$pdo -> exec("insert into diworks_keijiban(handlename,title,comments)
values('".$_POST['handlename']."','".$_POST['title']."','".$_POST['comments']."');");
       
}
 
header("Location:http://localhost/diworks_keijiban/index.php");

?>