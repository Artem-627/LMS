<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="styles/main_style.css">
    <title>Document</title>
</head>
<body>
    <? include_once('html/header.php'); ?>

    <div class="body">
        <div class="h1">Мои предметы</div><br />

        <div class="courses">
            <div class="course" style="background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3) ), url('images/math.jpg');">
                <a href="courses/math1.php">
                    <div class="course-h">Математика 1</div>
                    <!-- <img src="images/math.jpg" class="course-bg-image" /> -->
                </a>
            </div>
            <div class="course" style="background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3) ), url('images/math.jpg');">
                <a href="courses/math2.php">
                    <div class="course-h">Математика 2</div>
                    <!-- <img src="images/math.jpg" class="course-bg-image" /> -->
                </a>
            </div>
            <div class="course" style="background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3) ), url('images/math.jpg');">
                <a href="courses/math3.php">
                    <div class="course-h">Математика 3</div>
                    <!-- <img src="images/math.jpg" class="course-bg-image" /> -->
                </a>
            </div>
            <div class="course" style="background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3) ), url('images/math.jpg');">
                <a href="courses/math4.php">
                    <div class="course-h">Математика 4</div>
                    <!-- <img src="images/math.jpg" class="course-bg-image" /> -->
                </a>
            </div>
            <div class="course" style="background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3) ), url('images/math.jpg');">
                <a href="courses/math5.php">
                    <div class="course-h">Математика 5</div>
                    <!-- <img src="images/math.jpg" class="course-bg-image" /> -->
                </a>
            </div>
        </div>
    </div>

    <script src="script/main_script.js"></script>
</body>
</html>