var myoji=["田中","鈴木","和田","新田"];
document.write(myoji);
document.write("<br>");
var color=["赤","白","黒"];
document.write(color);
document.write("<br>");
var color=["赤","白","黒"];
document.write(color[0]);
document.write(color[1]);
document.write(color[2]);
document.write("<br>");
var color=["No1","No2","No3"];
delete color[0];
document.write(color);
document.write("<br>");
var pre1=["東京","埼玉","神奈川"];
pre1[3]="千葉";
document.write(pre1);
document.write("<br>");
var pre2=["東京","埼玉","神奈川"];
delete pre2[0];
pre2[0]="千葉";
document.write(pre2);
document.write("<br>");
var month=["1月","2月","3月"];
month[2]="誕生日";
document.write(month);
document.write(month[2]);
document.write("<br>");
var myoji={"A組":"田中","B組":"鈴木","C組":"佐藤"};
document.write(myoji["A組"]);
document.write("<br>");
var number={"1番":"佐藤","2番":"鈴木","3番":"和田"};
document.write(number["2番"]);
