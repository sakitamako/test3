//要素の追加unshift
var myoji=["田中","高橋","斎藤"];
myoji.unshift("鈴木");
document.write(myoji);
document.write("<br>");
var abc=["東京","埼玉","神奈川"];
abc.unshift("沖縄");
document.write(abc);
document.write("<br>");
//要素の追加push
var xyz1=["名前","住所","電話番号"];
xyz1.push("メールアドレス");
document.write(xyz1);
document.write("<br>");
var rech=["good","nice","bad"];
rech.push("lucky");
document.write(rech);
document.write("<br>");
//要素の削除pop
var xyz2=["名前","住所","電話番号"];
xyz2.pop();
document.write(xyz2);
document.write("<br>");
//要素の削除shift
var xyz3=["名前","住所","電話番号"];
xyz3.shift();
document.write(xyz3);
document.write("<br>");
//要素の切り出しslice
var myoji=["鈴木","田中","佐藤"];
document.write(myoji.slice(0,2));
document.write("<br>");
var myoji2=["青木","石井","上野","遠藤","太田"];
document.write(myoji2.slice(2,4));
document.write("<br>");

