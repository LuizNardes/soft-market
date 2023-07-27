<?php
include_once './config/config.php';
?>

<!DOCTYPE html>
<html lang="pt--br">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SoftMarket</title>
    <link rel="stylesheet" href="<?php echo URL?>css/styles.css" />
</head>

<body>

    <?php
    
    include 'pages/navbar.php';

    $page = (!empty(filter_input(INPUT_GET,'page',FILTER_DEFAULT)) ? filter_input(INPUT_GET,'page',FILTER_DEFAULT) : 'home' );
    $page = array_filter(explode('/', $page));
    
    $arquivo = 'pages/'.$page[0].'.php';

    var_dump($arquivo);

    if(is_file($arquivo)){
        include $arquivo;
    }else{
        include './pages/404.php';
    }

    ?>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossorigin="anonymous"></script>
</body>

</html>