<?php

include './classes/MySQL.php';

$busca = new MySQL();

$query = "SELECT sum(quantidade) as quantidade FROM carrinho";

$resultado = $busca->select($query);


if ($resultado !== null) {
    
    echo json_encode($resultado[0]['quantidade']);
    
} 