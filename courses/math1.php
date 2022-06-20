<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../styles/main_style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js"></script>
    <script src="https://filters.pixijs.download/main/pixi-filters.js"></script>
    <script>
        const BG_texture = PIXI.Texture.from('../images/Main_Menu/BG.png');
        const exit_texture = PIXI.Texture.from('../images/main_menu/Exit_BTN.png');
        const start_texture = PIXI.Texture.from('../images/main_menu/Start_BTN.png');
        var player_texture = [];
        player_texture[0] = PIXI.Texture.from('../images/Ship_Parts/Ship_Main_Icon.png');
        player_texture[1] = PIXI.Texture.from('../images/player.png');
    </script>
    <title>Математика 1</title>
</head>
<body>
    <div id="content">
        <? include_once('../html/header.php'); ?>

        <div class="body">
            <div style="display: flex; justify-content: space-between;">
                <div class="h1">Математика 1</div><br />
                <a href="../index.php"><button class="button-type-1">На главную</button></a>
            </div><br />
            <div style="width: 100%; height: 500px; background: url('../images/Main_Menu/BG.png'); background-size: contain;" id="game"></div>
        </div>
    </div>

    <script src="../courses/script/math1.js"></script>
    <script src="../script/main_script.js"></script>
</body>
</html>