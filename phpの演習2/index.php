<?php

session_start();

$name = "";
$mail = "";
$age = "";
$comments = "";
$errorName = "";
$errorMail = "";
$errorAge = "";
$errorComments = "";

if (isset($_SESSION['name']) && isset($_SESSION['mail']) && isset($_SESSION['age']) && isset($_SESSION['comments'])) {
    $name = !is_null($_SESSION['name']) ? $_SESSION['name']:"";
    $name = !is_null($_SESSION['mail']) ? $_SESSION['mail']:"";
    $name = !is_null($_SESSION['age']) ? $_SESSION['age']:"";
    $name = !is_null($_SESSION['comments']) ? $_SESSION['comments']:"";
}

if (isset($_SESSION['error_name']) && isset($_SESSION['error_mail']) && isset($_SESSION['error_age']) && isset($_SESSION['error_comments'])) {
    $errorName = $_SESSION['error_name'] ? 1 : 0;
    $errorMail = $_SESSION['error_mail'] ? 1 : 0;
    $errorAge = $_SESSION['error_age'] ? 1 : 0;
    $errorComments = $_SESSION['error_comments'] ? 1 : 0;
}

?>

<!DOCTYPE html>
<html lang = "ja">
    <head>
        <meta charset = "utf-8">
        <title>お問い合わせフォームを作る</title>
        <link rel = "stylesheet" href = "style.css">
    </head>
    <body>
        <h1>お問い合わせフォーム</h1>
        <form method = "post" action = "mail_confirm.php">
            <div>
                <label>名前</label>
                <br>
                <input type = "text" class = "text" size = "35" name = "name" placeholder = "名前を入力" value ="<?php echo $name; ?>">
            </div>
            <div>
                <label>メールアドレス</label>
                <br>
                <input type = "text" class = "text" size = "35" name = "mail" placeholder = "メールアドレスを入力" value ="<?php echo $mail; ?>">
            </div>
            <div>
                <label>年齢</label>
                <br>
                <select class = "dropdown" name = "age" value ="<?php echo $name; ?>">
                    <option>選択してください</option>
                    
                    <script>
                    for (var i = 18; i <= 65; i++) {
                        document.write("<option value = " + i + " >" + i + "歳</option>");
                    }
                    </script>
                    
                </select>
            </div>
            <div>
                <label>コメント</label>
                <br>
                <textarea cols = "35" rows = "7" name = "comments" class = "text" placeholder = "コメント内容を入力" value ="<?php echo $comments; ?>"></textarea>
            </div>
            <div>
                <input type = "submit" class = "submit" value = "送信する">
            </div>
        </form>
    </body>
</html>

