//問①
/*半径5cmの円、半径7cmの円、半径10cmの円の面積をそれぞれ求めてください。
円周率は、3.14 とします。［半径×半径×3.14=円の面積］*/

//５×５×3.14=78.5
//7×7×3.14=153.86
//10×10×3.14=314

/*まず、先頭に関数のfunctionを入力し、関数名にmensekiと入力します。
（）内にnumber（ナンバー）とhankei（半径）とen（3.14）の引数を入力して計算式の要素を入力します。
returnで関数の結果を表示させるために、半径+number+cmの円の面積は+hankei*en+㎠です。と入力します。
document.writeで反映させたいnumberの数字と半径×半径の答えを（）内に入力しています。
この入力をすることで
半径5㎝の円の面積は78.5㎠です。
半径7㎝の円の面積は153.86㎠です。
半径10㎝の円の面積は314㎠です。
と表示させることができます。*/

function menseki (number) {
    return "半径" + number + "cmの円の面積は" + (number * number * 3.14) + "㎠です。" + "<br>";
}
document.write(menseki (5));
document.write(menseki (7));
document.write(menseki (10));

document.write ("<br>");

//問②
/*大人料金が500円、子供料金が200円の遊園地があります。
Aグループは、大人2人、子供4人
Bグループは、大人1人、子供5人
Cグループは、大人3人、子供7人
関数を使用して
Aグループの合計金額1800円です。
Bグループの合計金額1500円です。
Cグループの合計金額2900円です。
と表示しなさい。*/

/*まず、先頭に関数のfunctionを入力し、関数名にgoukeiと入力します。
（）内にgroup（グループ）とadult（大人）とchild（子供）の引数を入力して計算式の要素を入力します。
returnで関数の結果を表示させるために、group+グループの合計金額は+adult*500+child*200+円です。と入力します。
document.writeで反映させたいgroupのABCと大人と子供の人数を（）内に入力しています。
この入力をすることで
Aグループの合計金額1800円です。
Bグループの合計金額1500円です。
Cグループの合計金額2900円です。
と表示させることができます。*/

function goukei (group, adult, child) {
    return group + "グループの合計金額は" + (adult * 500 + child * 200) + "円です。" + "<br>";
}
document.write(goukei ("A", 2, 4));
document.write(goukei ("B", 1, 5));
document.write(goukei ("C", 3, 7));
 
document. write ("<br>");
