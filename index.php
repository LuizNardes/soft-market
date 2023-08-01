<?php
include_once './src/config/config.php';
?>

<!DOCTYPE html>
<html lang="pt--br">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SoftMarket</title>
    <link rel="stylesheet" href="<?php echo URL?>dist/css/styles.css" />
    <script src="https://kit.fontawesome.com/aaca72973a.js" crossorigin="anonymous"></script>
</head>

<body class="d-flex flex-column min-vh-100">

    <?php
    
    include './dist/pages/navbar.php';
    include './src/php/classes/RenderPage.php';
    new RenderPage();

    include './dist/pages/footer.php';
    ?>

    <script src="<?php echo URL; ?>dist/js/app.js" type="module"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossorigin="anonymous"></script>
</body>

</html>