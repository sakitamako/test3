//りんごは80円、オレンジは60円、
function fruitsprice (apple, orange){
  return (apple * 80) + (orange * 60);
}
//りんご80×３＋オレンジ60×５＝答え（円）
document.write (fruitsprice (3, 5) + "円" + "<br>");
//りんご80×6＋オレンジ60×8＝答え（円）
document.write (fruitsprice (6, 8) + "円" + "<br>");

document.write ("<br>");

//〇〇さん、こんにちは！
function nameHello (name){
  return (name + "さん。こんにちは！");
}
//高橋さん。こんにちは！
document.write (nameHello ("高橋"));
document.write ("<br>");
//鈴木さん。こんにちは！
document.write (nameHello ("鈴木"));

document.write ("<br>");

//〇〇県出身の方
function todouhuken (jyuusyo){
  return (jyuusyo + "県出身の方");
}
//埼玉県出身の方
document.write (todouhuken ("埼玉"));
document.write ("<br>");
//神奈川県出身の方
document.write (todouhuken ("神奈川"));

document.write ("<br>");

//あなたの点数は〇〇点です
function test (num){
  return ("あなたの点数は" + num + "点です");
}
//あなたの点数は100点です
document.write (test (100));
document.write ("<br>");
//あなたの点数は50点です
document.write (test (50));

document.write ("<br>");

//会員ナンバーは〇〇です
function osirase (num){
  return ("会員ナンバーは" + num + "です！！！");
}
//会員ナンバーは5番です
document.write (osirase (5));



