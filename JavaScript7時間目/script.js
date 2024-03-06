var a1= 2;
if(a1 < 10){
  document.write( "A" );
}
document.write( "<br>" );

var a2 = 10;
if(a2 <= 10){
  document.write( "B" );
}
document.write( "<br>" );

var a3 = 12;
if(a3 == 12){
  document.write( "同じ数字" );
}
document.write( "<br>" );

var a4 = "田中"
if(a4 == "田中"){
  document.write( a4 + "さんです" );
}
document.write( "<br>" );

var b1 = 90;
if(100 >= b1){
  document.write( "100より小さい数です" );
}
document.write( "<br>" );

var b2 = 3;
if(b2 < 1){
  document.write( "A" ); 
}
else if(b2 > 1){
  document.write( "B" );
}
document.write( "<br>" );

var b3 = 10;
if(b3 < 10){
  document.write( "X" );
}
else if(b3 > 5){
  document.write( "Y" );
}
document.write("<br>");

var b4=1;
if(b4 == 0){
  document.write("数字は0");
}
else if(b4 == 1){
  document.write("数字は1");
}
else if(b4 == 2){
  document.write("数字は2");
}
document.write("<br>");

var b5=-8;
if(b5 < 1){
  document.write("マイナス");
}
else if(b5 > 1){
  document.write("プラス");
}
document.write("<br>");

var c1=10;
if(c1 < 10){
  document.write("★");
}
else{
  document.write("☆");
}
document.write("<br>");

var c2=5;
if(c2 > 5){
  document.write("OK");
}
else{
  document.write("NG");
}
document.write("<br>");

var c3="A";
if(c3 == "B"){
  document.write("B");
}
else{
  document.write("その他");
}
document.write("<br>");

var c4=5;
if(c4 > 0 && c4 < 10){
  document.write("B");
}
else{
  document.write("その他");
}
document.write("<br>");

var c5=10;
if(c5 > 10 || c5 < 5){
  document.write("X");
}
else{
  document.write("Y");
}
