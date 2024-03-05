<!DOCTYPE html>
<html lang = "ja">
    <head>
        <meta charset = "utf-8">
        <title>d.i.worksblog 掲示板</title>
        <link rel = "stylesheet" href = "style.css">
    </head>
    <body>
        <img src = "diblog_logo.jpg">
        <header>
            
        <ul>
            <li>トップ</li>
            <li>プロフィール</li>
            <li>D.I.BLOGについて</li>
            <li>登録フォーム</li>
            <li>問い合わせ</li>
            <li>その他</li>
        </ul>

    </header>
        <main>
            <div class = "main">
                <div class = "left">
                    <h1>プログラミングに役立つ掲示板</h1>
                    <form method = "post" action = "insert.php">
                        <div>
                            <h2>入力フォーム</h2>
                            <br>
                            <label>ハンドルネーム</label>
                            <br>
                            <input type = "text" class = "text" size = "50" name = "handlename" placeholder = "名前を入力" >
                        </div>
                        <div>
                            <label>タイトル</label>
                            <br>
                            <input type = "text" class = "text" size = "50" name = "title" placeholder = "タイトルを入力" >
                        </div>
                        <div>
                            <label>コメント</label>
                            <br>
                            <textarea cols = "100" rows = "10" name = "comments" class = "text" placeholder = "コメント内容を入力" ></textarea>
                        </div>
                        <div>
                            <input type = "submit" class = "submit" value = "送信する">
                        </div>
                    </form>
                    <br>
                    <?php
                    
                    mb_internal_encoding("utf-8");

                    $pdo = new PDO("mysql:dbname=lesson01;host=localhost;","root","root");
                    $stmt = $pdo -> query("select * from diworks_keijiban");

                    while ($row = $stmt -> fetch()) {
                        echo "<div class = 'kiji'>";
                        echo "<h3>".$row['title']."</h3>";
                        echo "<div class = 'contents'><br>";
                        echo $row['comments'];
                        echo "<div class = 'handlename'> <br> posted by ".$row['handlename']."</div>";
                        echo "</div>";
                        echo "</div>";
                        echo "<br>";
                    }
                    ?>
                </div>
                <div class = "right">
                    <h4>人気の記事</h4>
                    
                    <ul>
                        <li>PHPおすすめ本</li>
                        <li>PHP MyAdminの使い方</li>
                        <li>いま人気のエディタTop5</li>
                        <li>HTMLの基礎</li>
                    </ul>
                            
                    <h4>おすすめリンク</h4>    
                
                    <ul>
                        <li>ﾃﾞｨｰｱｲﾜｰｸｽ株式会社</li>
                        <li>XAMPPのダウンロード</li>
                        <li>Eclipseのダウンロード</li>
                        <li>Braketsのダウンロード</li>
                    </ul>
                    
                    <h4>カテゴリ</h4>
                        
                    <ul>
                        <li>HTML</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>JavaScript</li>
                    </ul>

                </div>
            </div>
        </main>
        <footer>
            Copyright D.I.works | D.I.blog is the one which provides A to Z about programming
        </footer>
    </body>
</html>
